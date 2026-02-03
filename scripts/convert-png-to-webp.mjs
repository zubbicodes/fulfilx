import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const projectRoot = process.cwd();

function parseArgs(argv) {
  const deleteOriginals = argv.includes("--delete-originals");
  const roots = argv.filter((arg) => !arg.startsWith("--"));

  return {
    deleteOriginals,
    roots:
      roots.length > 0
        ? roots.map((p) => path.resolve(projectRoot, p))
        : [path.resolve(projectRoot, "assets"), path.resolve(projectRoot, "public")],
  };
}

async function listFilesRecursively(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listFilesRecursively(fullPath)));
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }

  return files;
}

function isImage(filePath) {
  const lower = filePath.toLowerCase();
  return lower.endsWith(".png") || lower.endsWith(".jpg") || lower.endsWith(".jpeg");
}

function toWebpPath(inputPath) {
  const ext = path.extname(inputPath);
  return inputPath.slice(0, -ext.length) + ".webp";
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function convertOne(inputPath, deleteOriginals) {
  const webpPath = toWebpPath(inputPath);
  await sharp(inputPath).webp({ quality: 85, effort: 6 }).toFile(webpPath);

  const outExists = await fileExists(webpPath);
  if (!outExists) {
    throw new Error(`WebP output missing: ${webpPath}`);
  }

  if (deleteOriginals) {
    await fs.unlink(inputPath);
  }
}

async function main() {
  const { deleteOriginals, roots } = parseArgs(process.argv.slice(2));

  const imageFiles = [];
  for (const root of roots) {
    const stat = await fs.stat(root).catch(() => null);
    if (!stat?.isDirectory()) continue;
    const files = await listFilesRecursively(root);
    imageFiles.push(...files.filter(isImage));
  }

  if (imageFiles.length === 0) {
    console.log("No PNG/JPG files found.");
    return;
  }

  let converted = 0;
  const failures = [];

  for (const inputPath of imageFiles) {
    try {
      await convertOne(inputPath, deleteOriginals);
      converted += 1;
    } catch (err) {
      failures.push({ inputPath, message: err instanceof Error ? err.message : String(err) });
    }
  }

  console.log(`Converted ${converted}/${imageFiles.length} images to WebP.`);

  if (failures.length > 0) {
    for (const f of failures) {
      console.error(`${f.inputPath}: ${f.message}`);
    }
    process.exitCode = 1;
  }
}

await main();

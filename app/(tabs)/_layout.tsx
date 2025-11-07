// app/_layout.tsx
import { Slot } from "expo-router";
import React from "react";
import Navbar from "../../components/layout/home"; // path may change depending on folder
import '../../global.css';

export default function Layout() {
  return (
    <>
      {/* Global header visible on every page */}
      <Navbar />

      {/* Render routed pages below */}
      <Slot />
    </>
  );
}

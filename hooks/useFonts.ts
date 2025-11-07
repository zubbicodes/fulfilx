// hooks/useFonts.ts
import { useFonts } from 'expo-font';

export function useCustomFonts() {
  const [fontsLoaded] = useFonts({
    'HelveticaNowDisplay-Regular': require('../assets/fonts/HelveticaNowDisplay-Regular.ttf'),
    'HelveticaNowDisplay-Bold': require('../assets/fonts/HelveticaNowDisplay-Bold.ttf'),
    'HelveticaNowDisplay-Medium': require('../assets/fonts/HelveticaNowDisplay-Medium.ttf'),
  });

  return fontsLoaded;
}
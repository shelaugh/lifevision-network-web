/**
 * Craft × Pop design system 共通定数。
 * 全ページ共通の palette / motion easing。
 */

export const CRAFT = {
  CORAL: "#FF5A3D",   // hero accent (energetic tangerine)
  SUN: "#FFC93C",     // sunny yellow
  LIME: "#A4DC4F",    // recreation green
  LIME_DARK: "#7BC03D",
  SKY: "#5DC9F2",     // sky blue
  PLUM: "#E963A8",    // hot pink
  VIOLET: "#9B5BFF",  // violet
  BG: "#FFFAF0",      // warm cream BG
  INK: "#2A1F1A",     // warm dark brown
  PAPER: "#FFFFFF",   // card white
} as const;

// framer-motion 推奨 ease (smooth・craft 系で多用)
export const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

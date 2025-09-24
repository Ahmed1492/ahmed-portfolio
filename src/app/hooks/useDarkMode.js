// components/ThemeInitializer.tsx
"use client";

import { useEffect, useState } from "react";

export default function ThemeInitializer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevent rendering until theme is applied
  return null;
}
import { useCallback, useEffect, useState } from 'react';

export function useTheme() {
  // dark = default (original er moto)
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') === 'light' ? 'light' : 'dark'
  );

  useEffect(() => {
    // single source of truth: html e shudhu "dark" class
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggle };
}
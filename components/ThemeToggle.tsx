import { useEffect, useState } from 'react';
import { MoonIcon, SunIcon } from './Icons';

type Theme = 'light' | 'dark';
const themeStorageKey = 'ob-theme';

function themeFromValue(value: string | null | undefined): Theme {
  if (value == null || value === 'light') return 'light';
  if (value === 'dark') return 'dark';
  console.warn('Unrecognized theme preference. Using light mode.');
  return 'light';
}

function applyTheme(theme: Theme) {
  const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (!themeColor) throw new Error('The page is missing its theme-color metadata.');

  const root = document.documentElement;
  root.dataset.theme = theme;
  themeColor.content = getComputedStyle(root).getPropertyValue('--ct-paper').trim();
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => themeFromValue(document.documentElement.dataset.theme));

  useEffect(() => {
    let storage: Storage;
    try {
      storage = window.localStorage;
    } catch (error) {
      console.warn('Unable to synchronize theme choices between tabs.', error);
      return;
    }
    const handleStorage = (event: StorageEvent) => {
      if (event.storageArea !== storage || (event.key !== themeStorageKey && event.key !== null)) return;
      const nextTheme = themeFromValue(event.newValue);
      applyTheme(nextTheme);
      setTheme(nextTheme);
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    applyTheme(nextTheme);
    setTheme(nextTheme);
    try {
      window.localStorage.setItem(themeStorageKey, nextTheme);
    } catch (error) {
      console.warn('Unable to save the theme preference. This choice will only last for this tab.', error);
    }
  };

  const label = theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode';
  return (
    <button type="button" className="ct-theme-toggle" aria-label={label} title={label} onClick={toggleTheme}>
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  );
}

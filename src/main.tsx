
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Set up theme from localStorage or system preference
const setInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

// Apply theme before rendering to prevent flash
setInitialTheme();

createRoot(document.getElementById("root")!).render(<App />);

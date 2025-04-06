
import React from 'react';
import ThemeToggle from '../ThemeToggle';
import { useSidebar } from '@/components/ui/sidebar';

const SidebarFooterContent: React.FC = () => {
  const { open } = useSidebar();
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="px-3 py-4">
      <div className="flex items-center justify-between mb-4">
        <ThemeToggle />
        {open && (
          <span className="text-xs text-sidebar-foreground opacity-70">
            © {currentYear} TaskFlow
          </span>
        )}
      </div>
    </div>
  );
};

export default SidebarFooterContent;

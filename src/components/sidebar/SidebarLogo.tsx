
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSidebar } from '@/components/ui/sidebar';

interface SidebarLogoProps {
  title: string;
  subtitle?: string;
}

const SidebarLogo: React.FC<SidebarLogoProps> = ({ 
  title, 
  subtitle 
}) => {
  const { open, toggleSidebar } = useSidebar();
  
  return (
    <div className={cn(
      "flex items-center px-4 py-6",
      !open ? "justify-center" : "justify-between"
    )}>
      {open && (
        <div className="transition-all duration-200 ease-in-out">
          <h1 className="text-xl font-bold text-sidebar-foreground">{title}</h1>
          {subtitle && (
            <p className="text-xs text-sidebar-foreground opacity-70">{subtitle}</p>
          )}
        </div>
      )}
      <button 
        onClick={toggleSidebar}
        className="p-2 rounded-full hover:bg-sidebar-accent text-sidebar-foreground transition-colors duration-200"
        aria-label={open ? "Réduire le menu" : "Agrandir le menu"}
      >
        {open ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
      </button>
    </div>
  );
};

export default SidebarLogo;

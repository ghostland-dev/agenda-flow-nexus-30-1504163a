
import React from 'react';
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarRail
} from '@/components/ui/sidebar';

// Import our components
import SidebarLogo from './sidebar/SidebarLogo';
import SidebarNavLinks from './sidebar/SidebarNavLinks';
import SidebarFooterContent from './sidebar/SidebarFooterContent';

const Sidebar: React.FC = () => {
  return (
    <SidebarComponent>
      <SidebarRail />
      <SidebarHeader className="border-b border-sidebar-border">
        <SidebarLogo title="TaskFlow" subtitle="Gérez vos tâches" />
      </SidebarHeader>
      
      <SidebarContent className="px-2 py-4">
        <SidebarNavLinks />
      </SidebarContent>
      
      <SidebarFooter className="border-t border-sidebar-border mt-auto">
        <SidebarFooterContent />
      </SidebarFooter>
    </SidebarComponent>
  );
};

export default Sidebar;

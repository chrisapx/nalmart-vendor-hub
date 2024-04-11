
interface MenuItem {
    href?: string;
    icon?: string;
    text: string;
    submenu?: MenuItem[];
    action?: () => void;
  }
  
  interface MenuSection {
    section: string;
    items: MenuItem[];
  }
  
  interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: (arg: boolean) => void;
  }

  export type { MenuItem, MenuSection, SidebarProps}
  
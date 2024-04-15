
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

  interface IRoleForm {
    name: string;
  }

  interface ProductFormProps {
  show: boolean;
  toggle: (form: boolean) => void;
}

  interface IUser {
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    image: string;
    roles: Array<any>;
  }

  interface Image {
    url: string;
  }

  interface IItem {
    ads: Array<Image>;
    approved: boolean;
    brand: string;
    category: string;
    coverPhoto: Image;
    description: string;
    details: Array<any>;
    discount: any;
    freeDelivery: boolean;
    globalPrice: any;
    name: string;
    displayName: string;
    original: string;
    photos: Array<Image>;
    price: any;
    qty: string;
    serialNumber: string;
    stockCount: any;
    store: string;
    subCategory: string;
    type: string;
    vendorID: any;
    whatIsInTheBox: string;
  }

  export type { 
    MenuItem, 
    MenuSection, 
    SidebarProps, 
    IUser, IItem ,IRoleForm,
    ProductFormProps
    }
  
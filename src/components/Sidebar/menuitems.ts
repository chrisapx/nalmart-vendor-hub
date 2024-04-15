import { MenuSection } from "@/app/interfaces";
import Cookies from "js-cookie";

const getMenuItems = (confirmLogout: Function) => {
    const menuItems: MenuSection[] = [
        {
            section: "MENU",
            items: [
                { href: "/dashboard", icon: "pi pi-home", text: "Dashboard" },
                {
                    icon: "pi pi-list",
                    text: "Orders",
                    submenu: [
                        { href: "/orders/list", text: "Manage Orders" },
                    ],
                },
                {
                    icon: "pi pi-tags",
                    text: "Products",
                    submenu: [
                        { href: "/products/list", text: "Manage Products" },
                    ],
                },
            ],
        },
        {
            section: "MANAGEMENT",
            items: [
                {
                    icon: "pi pi-users",
                    text: "User management",
                    submenu: [
                        { href: "/users/list", text: "Manage Users" },
                        { href: "/roles/list", text: "Manage User roles" },
                        { href: "/departments/list", text: "Manage Departments" },
                    ],
                },
                {
                    icon: "pi pi-tags",
                    text: "Categories",
                    submenu: [
                        { href: "/categories/list", text: "Manage Categories" },
                        { href: "/sub-categories/list", text: "Manage Sub Categories" },
                    ],
                },
            ],
        },
        {
            section: "OTHERS",
            items: [
                {
                    href: "/settings",
                    icon: "pi pi-cog",
                    text: "Settings",
                },
                {
                    action: () => { Cookies.remove("token"); Cookies.remove('profile'); },
                    href: '/auth/signin',
                    icon: "pi pi-power-off",
                    text: "SignOut",
                },
            ],
        },
    ];
    return menuItems
}

export { getMenuItems }
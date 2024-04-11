import { MenuSection } from "@/app/interfaces";

const user = 'user'
const getMenuItems = (confirmLogout: Function) => {

    const menuItems: MenuSection[] = [
        {
            section: "MENU",
            items: [
                { href: "/dashboard", icon: "pi pi-home", text: "Dashboard" },
                {
                    href: "/orders",
                    icon: "pi pi-list",
                    text: "Orders",
                    submenu: [
                        { href: "/orders/list", text: "Manage Orders" },
                    ],
                },
                {
                    href: "/products",
                    icon: "pi pi-tags",
                    text: "Products",
                    submenu: [
                        { href: "/products/list", text: "Manage Products" },
                    ],
                },
            ],
        },
        {
            section: "SUPPORT",
            items: [
                {
                    href: "/users/list",
                    icon: "pi pi-user",
                    text: "Users",
                },
                {
                    href: "/roles/list",
                    icon: "pi pi-briefcase",
                    text: "Roles",
                },
                {
                    href: "/departments/list",
                    icon: "pi pi-sitemap",
                    text: "Departments",
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
                    action: () => confirmLogout("center"),
                    icon: "pi pi-power-off",
                    text: "SignOut",
                },
            ],
        },
    ];
    return menuItems
}

export { getMenuItems }
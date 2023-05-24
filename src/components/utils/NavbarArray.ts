export interface NavbarType {
    label: string,
    href: string
};


export const NavbarArray: Array<NavbarType> = [
    {
        label: "Explore",
        href: "/",
    },
    {
        label: "My trips",
        href: "/",
    },
    {
        label: "Chat",
        href: "/",
    },
];


export const NavbarArrayRight : Array<NavbarType> = [
    {
        label: "My home",
        href: "/",
    },
    {
        label: "My Account",
        href: "/",
    },
]
import { GiHamburgerMenu } from "react-icons/gi"
import { Logo } from "@/components/assets"
import { NavbarArray, NavbarArrayRight, NavbarType } from "@/components/utils/NavbarArray"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return (
        <div className="bg-primaryLight sticky z-30 top-0 px-3 md:px-14 2xl:px-0 py-3 md:py-4">
            <div className="max-w-7xl mx-auto text-white font-light flex justify-between items-center">

                <div className="flex gap-12 items-center">
                    <Logo />
                    {NavbarArray.map((item: NavbarType, index: number) => (
                        <Link className="hidden md:flex hover:text-slate-300 duration-150" key={index + 2} href={item.href}>{item.label}</Link>
                    ))}
                </div>

                <div className="space-x-8 hidden md:flex">
                    {NavbarArrayRight.map((item: NavbarType, index: number) => (
                        <Link key={index+3} className="hover:text-slate-300 duration-150" href={item.href}>{item.label}</Link>
                    ))}
                </div>
                
                <div className="md:hidden">
                    <GiHamburgerMenu size={20} />
                </div>
            </div>
        </div>
    )
}

export default Navbar
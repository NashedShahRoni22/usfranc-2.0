"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { FaFacebook, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-10 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/logo.webp" alt="logo" width={50} height={50} />
          <h2 className="font-bold text-xl md:text-2xl text-[#7b5e00]">
            USFRANC
          </h2>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-4">
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* About */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-120 grid gap-2 p-4 grid-cols-2 ">
                  <ListItem href="/about">Learn USFC</ListItem>
                  <ListItem href="/difference">
                    What is USFC and What not?
                  </ListItem>
                  <ListItem href="/usf-peer-to-peer-transfer-fees">
                    USFC Peer to Peer Transfer Fees
                  </ListItem>
                  <ListItem href="/assurance-statement">
                    USFRANC assurance statement
                  </ListItem>
                  <ListItem href="/whitepaper">Whitepaper</ListItem>
                  <ListItem href="/compliance">Compliance</ListItem>
                  <ListItem href="/aml-compliance">Aml Compliance</ListItem>
                  <ListItem href="/privacy-policy">Privacy Policy</ListItem>
                  <ListItem href="/terms-and-conditions">
                    Terms & Conditions
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Investors</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-60 p-4">
                  <ListItem href="/usfranc-investors-distribution-policy">
                    Distribution Policy
                  </ListItem>
                  <ListItem href="/">Terms & Condtions</ListItem>
                  <ListItem href="/">Invest in USFC now</ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Capital Hedge</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-80 p-4">
                  <ListItem href="/"> Learn Capital Hedge</ListItem>
                  <ListItem href="/">Capital Reserve Transparency</ListItem>
                  <ListItem href="/">Capital Investment Overview</ListItem>
                  <ListItem href="/">Policy</ListItem>
                  <ListItem href="/">Flow Chart</ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Get USFC</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-60 p-4">
                  <ListItem href="/">Private Sale</ListItem>
                  <ListItem href="/">Order USFRANC Now</ListItem>
                  <ListItem href="/">Participation Terms</ListItem>
                  <ListItem href="/">Terms & Conditions</ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/">Wallet</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <button className="md:hidden!" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: showMenu ? 0 : "100%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="md:hidden fixed top-19 right-0 h-screen w-[85%] max-w-sm bg-white z-50 shadow-lg overflow-y-auto">
        <div className="flex flex-col gap-4 px-6 py-4 h-screen bg-white shadow-md">
          <Link href="/">Home</Link>
          <MobileDropdown
            title="About"
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}>
            <Link href="/about">Learn USFC</Link>
            <Link href="/difference">What is USFC and What not?</Link>
            <Link href="/usf-peer-to-peer-transfer-fees">
              USFC Peer to Peer Transfer Fees
            </Link>
            <Link href="/assurance-statement">USFRANC assurance statement</Link>
            <Link href="/whitepaper">Whitepaper</Link>
            <Link href="/compliance">Compliance</Link>
            <Link href="/aml-compliance">Aml Compliance</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
          </MobileDropdown>
          <MobileDropdown
            title="Investors"
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}>
            <Link href="/usfranc-investors-distribution-policy">
              Distribution Policy
            </Link>
            <Link href="/">Invest Now</Link>
          </MobileDropdown>
          <MobileDropdown
            title="Capital Hedge"
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}>
            <Link href="/">Overview</Link>
            <Link href="/">Transparency</Link>
          </MobileDropdown>
          <MobileDropdown
            title="Get USFC"
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}>
            <Link href="/">Private Sale</Link>
            <Link href="/">Order Now</Link>
          </MobileDropdown>
          <Link href="/wallet">Wallet</Link>
          <Link href="/contact">Contact</Link>
          <div className="my-auto">
            <h2 className="font-bold text-2xl mt-40 hover:text-[#7b5e00] transition duration-300">
              Follow Us
            </h2>
            <ul className="flex gap-2 mt-4">
              <li>
                <FaXTwitter
                  className="hover:text-[#7b5e00] transition duration-300"
                  size={22}
                />
              </li>
              <li>
                <FaFacebook
                  className="hover:text-[#7b5e00] transition duration-300"
                  size={22}
                />
              </li>
              <li>
                <FaGithub
                  className="hover:text-[#7b5e00] transition duration-300"
                  size={22}
                />
              </li>
              <li>
                <FaLinkedin
                  className="hover:text-[#7b5e00] transition duration-300"
                  size={22}
                />
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;

function ListItem({ children, href }) {
  const pathname = usePathname();
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link href={href} className={pathname === href ? "bg-gray-100" : ""}>
          {children}
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

function MobileDropdown({ title, children, openDropdown, setOpenDropdown }) {
  const isOpen = openDropdown === title;

  return (
    <div>
      <button
        onClick={() => setOpenDropdown(isOpen ? null : title)}
        className="w-full text-left font-medium">
        {title}
      </button>

      <div
        className={`ml-4 flex flex-col gap-2 text-sm transition-all duration-300 ${
          isOpen ? "max-h-60 mt-2" : "max-h-0 overflow-hidden"
        }`}>
        {children}
      </div>
    </div>
  );
}

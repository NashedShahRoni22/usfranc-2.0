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
import Container from "../Container/Container";
import MobileDropdown from "../NavbarMenuItems/MobileDropdown";
import ListItem from "../NavbarMenuItems/ListItem";

const navItems = [
  {
    type: "link",
    label: "Home",
    href: "/",
  },
  {
    type: "dropdown",
    label: "About",
    items: [
      { label: "Learn USFC", href: "/about" },
      { label: "What is USFC and What not?", href: "/difference" },
      {
        label: "USFC Peer to Peer Transfer Fees",
        href: "/usf-peer-to-peer-transfer-fees",
      },
      { label: "USFRANC assurance statement", href: "/assurance-statement" },
      { label: "Whitepaper", href: "/whitepaper" },
      { label: "Compliance", href: "/compliance" },
      { label: "Aml Compliance", href: "/aml-compliance" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
    width: "w-140 grid grid-cols-2",
  },
  {
    type: "dropdown",
    label: "Investors",
    items: [
      {
        label: "Distribution Policy",
        href: "/usfranc-investors-distribution-policy",
      },
      { label: "Terms & Condtions", href: "/investors-terms-and-conditions" },
      { label: "Invest in USFC now", href: "/pre-order" },
    ],
    width: "w-60",
  },
  {
    type: "dropdown",
    label: "Capital Hedge",
    items: [
      { label: " Learn Capital Hedge", href: "/capital-hedge" },
      {
        label: "Capital Reserve Transparency",
        href: "/capital-reserve-transparency",
      },
      {
        label: "Capital Investment Overview",
        href: "/capital-investment-overview",
      },
      { label: "Policy", href: "/policy" },
      { label: "Flow Chart", href: "/flow-chart" },
    ],
    width: "w-80",
  },
  {
    type: "dropdown",
    label: "Get USFC",
    items: [
      { label: "Private Sale", href: "/buy" },
      { label: "Order USFRANC Now", href: "/pre-order" },
      { label: "Participation Terms", href: "/participation-terms" },
      {
        label: "Terms & Conditions",
        href: "/participation-terms-and-conditions",
      },
    ],
    width: "w-60",
  },
  {
    type: "link",
    label: "Wallet",
    href: "/wallet",
  },
  {
    type: "link",
    label: "Contact",
    href: "/contact",
  },
];
const socialLinks = [
  { icon: <FaXTwitter size={20} />, href: "#" },
  { icon: <FaFacebook size={20} />, href: "#" },
  { icon: <FaGithub size={20} />, href: "#" },
  { icon: <FaLinkedin size={20} />, href: "#" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.webp" alt="logo" width={50} height={50} />
            <h2 className="font-bold text-xl md:text-2xl text-primary">
              USFRANC
            </h2>
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="gap-0">
              {navItems.map((item, i) => (
                <NavigationMenuItem key={i}>
                  {item.type === "link" ? (
                    <NavigationMenuLink asChild>
                      <Link href={item.href}>{item.label}</Link>
                    </NavigationMenuLink>
                  ) : (
                    <>
                      <NavigationMenuTrigger>
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className={`${item.width} p-4 gap-2`}>
                          {item.items.map((sub, idx) => (
                            <ListItem key={idx} href={sub.href}>
                              {sub.label}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  )}
                </NavigationMenuItem>
              ))}
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
          className="md:hidden fixed top-12 right-0 h-screen w-[85%] max-w-sm bg-white z-50 shadow-lg overflow-y-auto">
          <div className="flex flex-col gap-4 px-6 py-4 h-screen bg-white shadow-md">
            {navItems.map((item, i) =>
              item.type === "link" ? (
                <Link key={i} href={item.href}>
                  {item.label}
                </Link>
              ) : (
                <MobileDropdown
                  key={i}
                  title={item.label}
                  openDropdown={openDropdown}
                  setOpenDropdown={setOpenDropdown}>
                  {item.items.map((sub, idx) => (
                    <Link key={idx} href={sub.href}>
                      {sub.label}
                    </Link>
                  ))}
                </MobileDropdown>
              ),
            )}

            <div className="my-auto">
              <h2 className="font-bold text-2xl mt-40 hover:text-primary transition duration-300">
                Follow Us
              </h2>
              <ul className="flex gap-4 mt-2">
                {socialLinks.map((social, index) => (
                  <li key={index}>
                    <a
                      href={social.href}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm">
                      {social.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </Container>
    </nav>
  );
};

export default Navbar;

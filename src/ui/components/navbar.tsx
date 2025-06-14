'use client';

import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@heroui/react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './language-switcher';
import MobileMenuDrawer from './mobile-menu-drawer';
import { Menu, Home, Contact, EqualApproximately } from 'lucide-react';

interface MenuItem {
  icons: React.ComponentType<{ className?: string }>;
  key: string;
  label: string;
  href: string;
}

const MarketPlaceNavbar: React.FC = () => {
  const t = useTranslations('navbar');
  const [isOpen, setIsOpen] = useState<boolean>(false);


  const menuItems: MenuItem[] = [
    { key: 'home', label: t('home'), href: '#home', icons: Home },
    { key: 'about', label: t('about'), href: '#about', icons: EqualApproximately },
    { key: 'contact', label: t('contact'), href: '#contact', icons: Contact },
  ];

  // Handle scroll to hide/show navbar
  
  const navbarVariants = {
    visible: { y: 0, opacity: 1 },
    hidden: { y: -100, opacity: 0 },
  };

  const linkVariants = {
    initial: { y: 10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2 } },
  };

  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
   
  
        <motion.div
          variants={navbarVariants}
          initial="visible"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="sticky top-0 z-50"
        >
          <Navbar className="backdrop-blur-xl bg-gradient-to-r from-black/70 to-gray-900/70 border-b border-white/10 shadow-xl" >
            {/* Logo */}
            <NavbarBrand>
              <motion.p
                className="font-extrabold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-600 tracking-tight cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                onClick={() => handleLinkClick('#home')}
              >
                Tejang
              </motion.p>
            </NavbarBrand>

            {/* Mobile Menu Button */}
            <NavbarContent className="lg:hidden" justify="end">
              <Button
                onClick={() => setIsOpen(true)}
                className="bg-transparent text-white"
                startContent={<Menu className="h-6 w-6" />}
              />
            </NavbarContent>

            {/* Desktop Menu */}
            <NavbarContent className="hidden lg:flex gap-6" justify="center">
              {menuItems.map((item, index) => (
                <NavbarItem key={item.key}>
                  <motion.div
                    variants={linkVariants}
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center text-white/80 font-semibold text-lg hover:text-amber-400 transition-colors"
                      onClick={() => handleLinkClick(item.href)}
                    >
                      <item.icons className="h-5 w-5 mr-2" />
                      {item.label}
                    </Link>
                  </motion.div>
                </NavbarItem>
              ))}
            </NavbarContent>

            {/* Language Switcher (Desktop) */}
            <NavbarContent className="hidden lg:flex" justify="end">
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <LanguageSwitcher />
              </motion.div>
            </NavbarContent>

            {/* Mobile Menu Drawer */}
            <MobileMenuDrawer isOpen={isOpen} onOpenChange={setIsOpen} menuItems={menuItems} />
          </Navbar>
        </motion.div>
      )}




export default MarketPlaceNavbar;
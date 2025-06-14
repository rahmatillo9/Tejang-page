'use client';

import React from 'react';
import { Drawer, DrawerContent } from '@heroui/react';
import { Link } from '@heroui/react';
import { motion } from 'framer-motion';
import LanguageSwitcher from './language-switcher';

interface MenuItem {
  icons: React.ComponentType<{ className?: string }>;
  key: string;
  label: string;
  href: string;
}

interface MobileMenuDrawerProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  menuItems: MenuItem[];
}

const MobileMenuDrawer: React.FC<MobileMenuDrawerProps> = ({ isOpen, onOpenChange, menuItems }) => {
  const handleLinkClick = (href: string) => {
    onOpenChange(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Drawer isOpen={isOpen} onOpenChange={onOpenChange} placement="left">
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <DrawerContent className="fixed top-0 left-0 w-64 h-full backdrop-blur-xl bg-black/80 border-r border-white/10 shadow-xl text-white py-12 px-6">
          <nav className="flex flex-col gap-4 mt-5">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.15, duration: 0.4, ease: 'easeOut' }}
              >
                <Link
                  href={item.href}
                  className="flex items-center text-lg font-semibold text-white/90 hover:text-amber-400 transition-colors py-2"
                  onClick={() => handleLinkClick(item.href)}
                >
                  <item.icons className="h-5 w-5 mr-3" />
                  {item.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: menuItems.length * 0.15, duration: 0.4, ease: 'easeOut' }}
              className="mt-6"
            >
              <LanguageSwitcher />
            </motion.div>
          </nav>
        </DrawerContent>
      </motion.div>
    </Drawer>
  );
};

export default MobileMenuDrawer;



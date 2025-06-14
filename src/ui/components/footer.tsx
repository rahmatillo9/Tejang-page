'use client';

import React from 'react';
import { Link } from '@heroui/react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full backdrop-blur-xl bg-gradient-to-r from-black/70 to-gray-900/70 border-t border-white/10 shadow-xl py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Brand */}
        <p className="font-extrabold text-xl bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-600 tracking-tight">
          Tejang
        </p>
        
        {/* Powered by Butcher */}
        <div className="text-white/80 font-medium text-sm">
          Powered by{' '}
          <Link
            href="https://butcher4.uz"
            className="text-amber-400 hover:text-orange-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Butcher
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
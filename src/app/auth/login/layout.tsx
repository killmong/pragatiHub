// layout.tsx
import React from 'react';
import { ReactNode } from 'react';
import Header from '@/app/header/page'; // Import Header component if you have one
import Footer from '@/app/footer/page'; // Import Footer component if you have one

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
};

export default Layout;

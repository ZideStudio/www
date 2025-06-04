import type React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white py-10">
      <div className="container mx-auto flex flex-col items-center space-y-10 md:flex-row md:justify-between md:space-y-0">
        <div className="w-4/5 md:w-1/2">
          <h1 className="text-2xl font-bold">Zide</h1>
          <p className="mt-2">Zide is a software development company that creates innovative projects for everyone!</p>
        </div>
        <div className="w-4/5 md:w-1/2">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="mt-2">
            <a href="mailto:contact@zide.fr" className="text-blue-400">
              contact@zide.fr
            </a>
          </p>
          <p className="mt-2">© 2024-{new Date().getFullYear()} Zide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import type { Page } from '../../models/pages.model';

type NavBarProps = {
  pages: Page[];
  withEntireLogo: boolean;
  withRoundedCorners: boolean;
};

export const NavBar = ({ pages, withEntireLogo, withRoundedCorners }: NavBarProps) => {
  const redirectToHome = () => {
    if (!withEntireLogo) return; // only on home page

    const homeRef = pages.find((page) => page.title === 'Home')?.ref;
    if (!homeRef) return;

    homeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const openPage = (page: Page) => {
    page.ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ borderRadius: withRoundedCorners ? '0px' : '0px' }}
      animate={{ borderRadius: withRoundedCorners ? '0px 0px 16px 16px' : '0px' }}
      transition={{ duration: 0.5 }}
      className="fixed flex flex-row justify-between w-full z-20 align-middle backdrop-blur-sm shadow-xs shadow-black md:border-x border-b border-gray-300 px-3 md:px-10 py-2"
    >
      <div className="flex justify-start w-14" onClick={redirectToHome} onKeyUp={redirectToHome}>
        <AnimatePresence mode="wait">
          {withEntireLogo ? (
            <motion.img
              key="complete-logo"
              src="/assets/logo/zide_complete.png"
              alt="Zide"
              className="text-white h-8 antiSelect"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          ) : (
            <motion.img
              key="simple-logo"
              src="/assets/logo/zide.png"
              alt="Zide"
              className="text-white h-8 antiSelect"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>
      </div>
      <div className="flex space-x-14 select-none">
        {pages.map((page, i, a) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: no id
            key={i}
            onClick={() => {
              openPage(page);
            }}
            onKeyUp={() => {
              openPage(page);
            }}
          >
            <motion.div className="relative inline-block cursor-pointer group" onClick={() => openPage(page)} onKeyUp={() => openPage(page)}>
              <span className="font-lubri text-gray-300 text-3xl font-bold text-center group-hover:text-blue-400 transition-colors duration-300">
                {page.title}
              </span>

              <motion.div
                layout
                className={`absolute ${i + 1 < a.length ? 'left-0' : 'right-0'} bottom-0 h-0.5 bg-gray-300 group-hover:bg-blue-400 transition-colors duration-300`}
                initial={{ width: 0 }}
                animate={{ width: page.isSelected ? '100%' : '0%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        ))}
      </div>
      <a className="flex justify-end w-14" href="https://github.com/ZideStudio" target="_blank" rel="noopener noreferrer">
        <img src="/assets/brand/github.png" alt="GitHub" className="h-8 antiSelect" />
      </a>
    </motion.div>
  );
};

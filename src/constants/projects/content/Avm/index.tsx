import { useEffect, useState } from 'react';
import { AvmAbout } from './About';
import { AvmInstall } from './Install';

export const Avm = () => {
  const getInitialTab = (): 'about' | 'install' => {
    const hash = window.location.hash.replace('#', '');
    return hash === 'install' ? 'install' : 'about';
  };

  const [selectedTab, setSelectedTab] = useState<'about' | 'install'>(getInitialTab);

  const handleTabChange = (tab: 'about' | 'install') => {
    setSelectedTab(tab);
    window.location.hash = tab; // Met à jour l'URL sans recharger
  };

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash === 'about' || hash === 'install') {
        setSelectedTab(hash);
      }
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <div className="flex flex-col md:px-10 space-y-6">
      <header className="text-center space-y-2">
        <h1 className="text-3xl font-extrabold underline">Auto Version Manager</h1>
        <h2 className="text-xl font-bold">
          A CLI to manage your version managers automatically.
          <br />
          Compatible with NVM, GVM, Rustup and more!
        </h2>
      </header>

      <nav className="flex justify-center pb-5 space-x-6 font-semibold text-xl">
        <button
          type="button"
          onClick={() => handleTabChange('about')}
          className={`text-blue-300 hover:text-blue-500 ${selectedTab === 'about' ? 'underline' : ''}`}
        >
          About
        </button>
        <button
          type="button"
          onClick={() => handleTabChange('install')}
          className={`text-blue-300 hover:text-blue-500 ${selectedTab === 'install' ? 'underline' : ''}`}
        >
          Install
        </button>
      </nav>

      <div className="article">{selectedTab === 'about' ? <AvmAbout /> : <AvmInstall />}</div>
    </div>
  );
};

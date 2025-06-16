import { useEffect, useState } from 'react';
import { Cryptography } from './Cryptography';
import { Pastebin } from './Pastebin';
import { Steganography } from './Steganography';

type Tab = 'cryptography' | 'pastebin' | 'steganography';

const DEFAULT_TAB: Tab = 'cryptography';
const VALID_TABS: Tab[] = ['cryptography', 'pastebin', 'steganography'];

export const CryptForMe = () => {
  const getInitialTab = (): Tab => {
    const hash = window.location.hash.replace('#', '');
    return VALID_TABS.includes(hash as Tab) ? (hash as Tab) : DEFAULT_TAB;
  };

  const [selectedTab, setSelectedTab] = useState<Tab>(getInitialTab);

  const handleTabChange = (tab: Tab) => {
    setSelectedTab(tab);
    window.location.hash = tab;
  };

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (VALID_TABS.includes(hash as Tab)) {
        setSelectedTab(hash as Tab);
      }
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return (
    <div className="space-y-3">
      <header className="text-center space-y-2">
        <h1 className="text-2xl font-extrabold underline">Crypt For Me</h1>
        <h2 className="font-bold">Online website for encrypting data or using a steganography tool on pictures!</h2>
      </header>

      <nav className="flex flex-col md:flex-row md:justify-center pb-5 md:space-x-6 font-semibold text-xl">
        <button
          type="button"
          onClick={() => handleTabChange('cryptography')}
          className={`text-blue-300 hover:text-blue-500 ${selectedTab === 'cryptography' ? 'underline' : ''}`}
        >
          Cryptography Tool
        </button>
        <button
          type="button"
          onClick={() => handleTabChange('pastebin')}
          className={`text-blue-300 hover:text-blue-500 ${selectedTab === 'pastebin' ? 'underline' : ''}`}
        >
          Secure Pastebin
        </button>
        <button
          type="button"
          onClick={() => handleTabChange('steganography')}
          className={`text-blue-300 hover:text-blue-500 ${selectedTab === 'steganography' ? 'underline' : ''}`}
        >
          Steganography
        </button>
      </nav>

      <p className="italic text-gray-500 pb-10">🚧 The project is currently under development, and will be launched in public beta by the end of 2025!</p>

      <div className="article">{selectedTab === 'cryptography' ? <Cryptography /> : selectedTab === 'pastebin' ? <Pastebin /> : <Steganography />}</div>
    </div>
  );
};

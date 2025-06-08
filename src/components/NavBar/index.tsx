type NavBarProps = {
  title: string;
};

export const NavBar = ({ title }: NavBarProps) => (
  <div className="fixed flex flex-row justify-between w-full z-20 align-middle backdrop-blur-sm shadow-xs shadow-black md:border-x border-b border-white md:rounded-b-xl px-10 py-2">
    <img src="/assets/logo/zide_complete.png" alt="Zide" className="text-white h-8 antiSelect" />
    <h2 className="text-white text-xl font-bold text-center">{title}</h2>
    <a href="https://github.com/ZideStudio" target="_blank" rel="noopener noreferrer">
      <img src="/assets/brand/github.png" alt="GitHub" className="h-8 antiSelect" />
    </a>
  </div>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-1">
      <div className="container mx-auto flex justify-between">
        <div className="w-1/2">
          <h1 className="text-2xl font-bold">Zide</h1>
          <p className="mt-2">Zide is a software development company that creates innovative projects for everyone!</p>
        </div>
        <div>
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

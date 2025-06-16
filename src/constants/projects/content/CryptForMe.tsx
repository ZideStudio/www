export const CryptForMe = () => (
  <div className="space-y-6">
    <header className="text-center space-y-2">
      <h1 className="text-2xl font-extrabold underline">Crypt For Me</h1>
      <h2 className="font-bold">Online website for sharing information securely and anonymously.</h2>
    </header>
    <div className="article space-y-6">
      <div className="space-y-4">
        <article>
          <p>The website will feature tools such as:</p>
          <ul className="list-disc list-inside text-left space-y-1 mx-auto w-fit">
            <li>
              <span className="mr-1">Secure pastebin (texts)</span>
            </li>
            <li>
              <span className="mr-1">Cryptography tool (pictures)</span>
            </li>
            <li>
              <span className="mr-1">Steganography (pictures)</span>
            </li>
          </ul>
        </article>
      </div>
      <p className="font-bold">The project is currently under development, and will be launched in public beta by the end of 2025!</p>
    </div>
  </div>
);

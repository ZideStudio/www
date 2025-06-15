export const Avm = () => {
  const fileExamples = {
    Node: ['.nvmrc', '.node-version', 'package.json'],
    Go: ['go.mod'],
    Rust: ['rust-toolchain'],
    Ruby: ['.rbenv', '.rvmrc', '.ruby-version', '.ruby-gemset'],
    All: ['Dockerfile'],
  };

  const renderFileList = () =>
    Object.entries(fileExamples).map(([lang, files]) => (
      <li key={lang}>
        {lang}:{' '}
        {files.map((file, i) => (
          <span key={file} className="bg-white/10 px-1 rounded mr-1 inline-block">
            {file}
            {i < files.length - 1 && ','}
          </span>
        ))}
      </li>
    ));

  return (
    <div className="flex flex-col md:px-10 space-y-6">
      <header className="text-center space-y-2">
        <h1 className="text-2xl font-extrabold underline">Auto Version Manager</h1>
        <h2 className="font-bold">
          A CLI to manage your version managers automatically.
          <br />
          Compatible with NVM, GVM, Rustup, and more!
        </h2>
      </header>

      <img src="https://i.imgur.com/xS2XYlA.png" alt="CLI auto execution" className="w-full md:w-1/2 h-auto mx-auto rounded shadow" />

      <section className="pb-10 space-y-10">
        <article className="space-y-3">
          <p>
            The project analyzes the files in your directory as soon as you open your terminal, and automatically changes the version of your language via your
            version manager, according to the configuration file in the current directory.
          </p>
          <p className="font-bold">Just install the CLI and you don't have to worry about your versions anymore! 😇</p>
        </article>

        <article>
          <p className="mb-1 font-medium">Language versions can be identified from the following files:</p>
          <ul className="list-disc list-inside text-left space-y-1 mx-auto md:max-w-md">{renderFileList()}</ul>
        </article>
      </section>

      <section className="space-y-1">
        <p className="font-bold">🎉 AVM was correctly published early 2025</p>
        <p className="italic">Regular updates will introduce new features and resolve issues.</p>
      </section>

      <img src="https://i.imgur.com/DxL4ViJ.png" alt="CLI help command" className="w-full md:w-3/4 h-auto mx-auto rounded shadow" />
    </div>
  );
};

import { CommandBlock } from '../../../../components/CodeBock';

export const AvmInstall = () => {
  return (
    <section className="space-y-10">
      <p>
        To <span className="underline">install</span> or <span className="underline">update</span> avm, you should run the install script.
        <br />
        To do that, you may either download and run the script manually, or use the following cURL or Wget command:
      </p>

      <div className="space-y-2">
        <CommandBlock content={'curl -sSL https://github.com/ZideStudio/avm/releases/latest/download/install.sh | bash'} />

        <p className="text-center italic font-medium">OR</p>

        <CommandBlock content={'wget -qO- https://github.com/ZideStudio/avm/releases/latest/download/install.sh | bash'} />
      </div>

      <p>
        When you run the install script, it will prompt you with several questions to set up AVM according to your preferences. You will have the option to
        configure AVM to run automatically each time you open a terminal, and to enable automatic updates.
      </p>

      <div className="py-10 space-y-3">
        <p>
          To <span className="underline">uninstall</span> AVM, simply remove the installation script from your system :
        </p>
        <CommandBlock content={'rm -rf ~/.avm'} />
        <p>
          Don't forget to delete the AVM alias from your rc file, such as ~/.bashrc or ~/.zshrc.
          <br />
          The section to remove looks like this:
        </p>
        <CommandBlock
          content={`# AVM - Auto Version Manager\navm() { source ~/.avm/bin/avm "$@"; }\navm run --managers all # Automatically call avm cli each time terminal opens\navm update --auto # Auto-update AVM daily`}
        />
      </div>
    </section>
  );
};

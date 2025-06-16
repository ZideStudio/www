export const Pastebin = () => {
  return (
    <section className="space-y-10 text-left">
      <p>The pastebin tool will allow you to temporarily and securely store any textual content! Your text can be:</p>

      <div className="space-y-6">
        <ul className="list-disc pl-5 space-y-3">
          <li>
            Encrypted using our CPK key or a password
            <img className="h-10" src="https://i.imgur.com/wJQnH2z.png" alt="Encryption Key" />
          </li>
          <li>Stored for a maximum duration of one month</li>
        </ul>
      </div>

      <p>This way, you can securely share any content with your contacts.</p>

      <p>
        This pastebin tool will be released after the image encryption service, which is <span className="underline">scheduled for the end of 2025</span>.
      </p>

      <p>In a second phase, this tool will evolve to offer a public API, enabling integration into various platforms.</p>
    </section>
  );
};

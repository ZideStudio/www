import { useState } from 'react';

interface CommandBlockProps {
  content: string;
}

export const CommandBlock = ({ content }: CommandBlockProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  return (
    <div className="relative bg-black text-white p-4 rounded-lg overflow-x-auto shadow-lg">
      <button
        type="button"
        onClick={copyToClipboard}
        className="absolute flex flex-row top-2 right-2 text-sm bg-gray-800/90 hover:bg-gray-800 transition px-2 py-1 rounded"
      >
        <i className={`pi ${copied ? 'pi-check text-blue-400' : 'pi-clipboard'} min-w-5`} />
      </button>
      <pre className="whitespace-pre-wrap text-start pr-5">
        <code>{content}</code>
      </pre>
    </div>
  );
};

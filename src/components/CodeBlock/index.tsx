'use client';

import { useState } from 'react';

interface CodeBlockProps {
  content: string;
}

export const CodeBlock = ({ content }: CodeBlockProps) => {
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
    <div className="relative bg-secondary text-white p-4 rounded-lg overflow-x-auto shadow-lg">
      <button
        type="button"
        onClick={copyToClipboard}
        className="absolute flex flex-row top-2 right-2 text-sm bg-primary/50 hover:bg-primary transition px-2 py-1 rounded"
      >
        <i className={`pi ${copied ? 'pi-check text-activeprimary' : 'pi-clipboard'} min-w-5`} />
      </button>
      <pre className="whitespace-pre-wrap break-words text-start pr-5 font-sans text-sm">
        <code>{content}</code>
      </pre>
    </div>
  );
};

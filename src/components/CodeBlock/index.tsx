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
    <div className="bg-secondary relative overflow-x-auto rounded-lg p-4 text-white shadow-lg">
      <button
        type="button"
        onClick={copyToClipboard}
        className="bg-primary/50 hover:bg-primary absolute top-2 right-2 flex flex-row rounded px-2 py-1 text-sm transition"
      >
        <i className={`pi ${copied ? 'pi-check text-activeprimary' : 'pi-clipboard'} min-w-5`} />
      </button>
      <pre className="pr-10 text-start font-sans text-sm break-words whitespace-pre-wrap">
        <code>{content}</code>
      </pre>
    </div>
  );
};

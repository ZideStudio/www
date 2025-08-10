import { Language } from '@models/language.model';
import Link from 'next/link';

type LanguagesGridProps = {
  languages: Language[];
  className?: string;
};

export const LanguagesGrid = ({ languages }: LanguagesGridProps) => {
  return (
    <div className="flex flex-wrap gap-4">
      {languages.map((language, index) => (
        <LanguageChip key={index} language={language} />
      ))}
    </div>
  );
};

type LanguageChipProps = {
  language: Language;
  className?: string;
};

const LanguageChip = ({ language, className }: LanguageChipProps) => {
  return (
    <Link href={language.url} rel="noopener noreferrer" target="_blank" className="group">
      <div
        className={`flex space-x-1 items-center text-text/75 border-2 select-none rounded-md py-1 px-2 border-text/75 bg-secondary transition-all duration-300 ease-slow-in shadow-2xs group-hover:shadow-[4px_4px_0px] group-hover:shadow-text/75 group-hover:-translate-x-1 group-hover:-translate-y-1 group-active:translate-x-0 group-active:translate-y-0 group-active:shadow-none ${className}`}
      >
        {language.logo}
        <span className="text-lg font-semibold pr-1">{language.name}</span>
      </div>
    </Link>
  );
};

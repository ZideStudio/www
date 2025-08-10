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
        className={`text-text/75 border-text/75 bg-secondary ease-slow-in group-hover:shadow-text/75 flex items-center space-x-1 rounded-md border-2 px-2 py-1 shadow-2xs transition-all duration-300 select-none group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[4px_4px_0px] group-active:translate-x-0 group-active:translate-y-0 group-active:shadow-none ${className}`}
      >
        {language.logo}
        <span className="pr-1 text-lg font-semibold">{language.name}</span>
      </div>
    </Link>
  );
};

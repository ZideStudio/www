import { LanguagesGrid } from '@components/LanguagesGrid';
import { Tag } from '@components/Tag';
import { Title } from '@components/Title';
import { LANGUAGES } from '@constants/languages.data';
import { useTranslations } from 'next-intl';

export const Languages = () => {
  const t = useTranslations('home.languages');

  return (
    <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row items-center justify-around px-10 lg:px-20">
      <div className="flex md:w-3/4 flex-col space-y-3 md:px-20">
        <Tag>{t('tag')}</Tag>
        <Title id="about">{t('title')}</Title>
        <div className="flex flex-col space-y-5">
          <p className="text-text">{t('description')}</p>
        </div>
      </div>
      <div className="md:w-3/4">
        <LanguagesGrid languages={LANGUAGES} />
      </div>
    </div>
  );
};

import { Tag } from '@components/Tag';
import { Title } from '@components/Title';
import { useTranslations } from 'next-intl';

export const Presentation = () => {
  const t = useTranslations('home.presentation');

  return (
    <div className="flex flex-row items-center justify-around px-10 lg:px-20">
      <div
        className="border-activeprimary hidden h-52 w-52 rounded-lg border-5 bg-cover bg-center lg:block xl:h-96 xl:w-96"
        style={{ backgroundImage: "url('/assets/logo/zide_square.png')" }}
      />
      <div className="flex max-w-2xl flex-col space-y-3">
        <Tag>{t('tag')}</Tag>
        <div className="flex flex-row items-end space-x-3">
          <div
            className="border-activeprimary block h-24 w-24 rounded-lg border-5 bg-cover bg-center lg:hidden"
            style={{ backgroundImage: "url('/assets/logo/zide_square.png')" }}
          />
          <Title id="about" className="scroll-mt-40">
            Zide Studio
          </Title>
        </div>
        <div className="flex flex-col space-y-5">
          <p className="text-text">{t('zide')}</p>
          <p className="text-text">{t('team')}</p>
          <p className="text-text">{t('product')}</p>
        </div>
      </div>
    </div>
  );
};

'use client';

import { Carousel } from '@components/Carousel';
import { MemberCard } from '@components/MemberCard';
import { Tag } from '@components/Tag';
import { Title } from '@components/Title';
import { MEMBERS } from '@constants/members.data';
import { useTranslations } from 'next-intl';

export const Team = () => {
  const t = useTranslations('home.team');

  return (
    <div className="flex flex-col items-center justify-around px-10 lg:px-20">
      <div className="flex flex-col items-center justify-center space-y-3">
        <Tag>{t('tag')}</Tag>
        <Title id="about">{t('title')}</Title>
        <p className="text-text">{t('description')}</p>
      </div>

      <div className="flex items-center w-full py-5">
        <Carousel items={MEMBERS} renderItem={(member) => <MemberCard member={member} />} speed={15000} />
      </div>
    </div>
  );
};

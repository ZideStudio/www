'use client';

import { Locale } from '@/i18n/config';
import { QuoteSvg } from '@components/Svg/QuoteSvg';
import { Member } from '@models/member.model';
import { useLocale } from 'next-intl';

type MemberCardProps = {
  member: Member;
};

export const MemberCard = ({ member }: MemberCardProps) => {
  const currentLocale = useLocale() as Locale;

  let role;
  let message;
  if (currentLocale === 'fr') {
    role = member.roleFr;
    message = member.messageFr;
  } else {
    role = member.roleEn;
    message = member.messageEn;
  }

  const openGithub = () => {
    if (!member.githubUrl) return;
    window.open(member.githubUrl, '_blank');
  };

  return (
    <div className="w-full h-72 p-10 bg-secondary rounded-xl overflow-hidden flex flex-col space-y-5 group border border-primary hover:border-text text-text">
      <div className={`flex flex-row items-center space-x-3 ${member.githubUrl ? 'cursor-pointer' : ''}`} onClick={openGithub}>
        <img src={member.pictureUrl} className="h-10 w-auto sm:h-12 rounded-full" />

        <div className="flex flex-col">
          <div className="flex flex-row items-center space-x-2">
            {member.githubUrl && <i className="pi pi-github text-text/50" />}
            <p className="text-xl">{member.name}</p>
          </div>
          <p className="text-text/25 text-lg truncate">{role}</p>
        </div>
      </div>
      <div className="relative flex items-start">
        <QuoteSvg className="absolute -top-2 -left-3 w-6 h-6" />
        <p className="z-10 text-text" dangerouslySetInnerHTML={{ __html: message }} />
      </div>
    </div>
  );
};

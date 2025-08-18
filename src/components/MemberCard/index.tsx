'use client';

import type { Locale } from '@/i18n/config';
import { QuoteSvg } from '@components/Svg/QuoteSvg';
import type { MemberFeedback } from '@models/member.model';
import { useLocale } from 'next-intl';

type MemberCardProps = {
  feedback: MemberFeedback;
};

export const MemberCard = ({ feedback }: MemberCardProps) => {
  const currentLocale = useLocale() as Locale;

  let role;
  let message;
  if (currentLocale === 'fr') {
    role = feedback.member.roleFr;
    message = feedback.messageFr;
  } else {
    role = feedback.member.roleEn;
    message = feedback.messageEn;
  }

  const openGithub = () => {
    if (!feedback.member.githubUrl) return;
    window.open(feedback.member.githubUrl, '_blank');
  };

  return (
    <div className="bg-secondary group border-primary hover:border-text text-text flex h-72 w-full flex-col space-y-5 overflow-hidden rounded-xl border p-10">
      <div className={`flex flex-row items-center space-x-3 ${feedback.member.githubUrl ? 'cursor-pointer' : ''}`} onClick={openGithub}>
        <img src={feedback.member.pictureUrl} alt="Member" className="h-10 w-auto rounded-full sm:h-12" />

        <div className="flex flex-col">
          <div className="flex flex-row items-center space-x-2">
            {feedback.member.githubUrl && <i className="pi pi-github text-text/50" />}
            <p className="text-xl">{feedback.member.name}</p>
          </div>
          <p className="text-text/25 truncate text-lg">{role}</p>
        </div>
      </div>
      <div className="relative flex items-start">
        <QuoteSvg className="absolute -top-2 -left-3 h-6 w-6" />
        <p className="text-text z-10" dangerouslySetInnerHTML={{ __html: message }} />
      </div>
    </div>
  );
};

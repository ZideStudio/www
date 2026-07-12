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
    <div className="bg-secondary group border-primary hover:border-text text-text flex min-h-[16rem] w-full max-w-full flex-col space-y-5 overflow-hidden overflow-y-auto rounded-xl border pt-4 pr-4 pb-8 pl-4 sm:overflow-visible sm:pt-5 sm:pr-5 sm:pb-12 sm:pl-5">
      <div
        className={`flex w-full max-w-full flex-col items-center sm:flex-row sm:items-start sm:space-x-3 ${feedback.member.githubUrl ? 'cursor-pointer' : ''}`}
        onClick={openGithub}
      >
        <img src={feedback.member.pictureUrl} alt="Member" className="mb-2 h-16 w-16 rounded-full sm:mb-0 sm:h-12 sm:w-auto" />

        <div className="flex w-full max-w-full flex-col items-center sm:items-start">
          <div className="flex w-full max-w-full flex-row items-center justify-center space-x-2 sm:justify-start">
            {feedback.member.githubUrl && <i className="pi pi-github text-text/50" />}
            <p className="w-full max-w-full truncate text-center text-lg break-words sm:text-left">{feedback.member.name}</p>
          </div>
          <p className="text-text/25 w-full max-w-full truncate text-center text-base break-words sm:text-left">{role}</p>
        </div>
      </div>
      <div className="relative flex min-h-[3rem] w-full max-w-full items-start">
        <QuoteSvg className="absolute -top-2 -left-3 h-6 w-6" />
        <p className="text-text z-5 w-full max-w-full break-words" style={{ wordBreak: 'break-word' }} dangerouslySetInnerHTML={{ __html: message }} />
      </div>
    </div>
  );
};

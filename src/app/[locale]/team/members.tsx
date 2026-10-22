import projectService from '@/services/project';
import { TeamCard } from '@components/TeamCard';
import { Title } from '@components/Title';
import { DISCORD_URL } from '@constants/discord';
import { MEMBER_FEEDBACKS } from '@constants/feedbacks.data';
import { useLocale, useTranslations } from 'next-intl';

const GRID_COLUMNS = 3;
const linkClassName = 'text-activesecondary font-semibold underline underline-offset-2';

export const Members = () => {
  const t = useTranslations('team');
  const locale = useLocale();

  // Two empty slots on the last desktop row leave enough room to put the join text next to the last card
  const joinFitsLastRow = MEMBER_FEEDBACKS.length % GRID_COLUMNS === 1;

  return (
    <div className="mx-5 mt-4 md:mx-24">
      <section className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {MEMBER_FEEDBACKS.map((feedback) => (
          <TeamCard
            key={feedback.member.id}
            feedback={feedback}
            projects={projectService.getByMemberId(feedback.member.id).map(({ slug, title, mainColor }) => ({ slug, title, mainColor }))}
          />
        ))}

        <div
          className={`bg-secondary border-text/10 flex flex-col items-center justify-center space-y-4 rounded-xl border p-6 text-center md:p-10 ${joinFitsLastRow ? 'md:col-span-2 lg:col-span-2' : 'col-span-full'}`}
        >
          <Title className="!text-3xl md:!text-4xl">{t('join.title')}</Title>
          <p className="text-text max-w-2xl text-lg md:text-xl">
            {t.rich('join.description', {
              discord: (chunks) => (
                <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className={linkClassName}>
                  {chunks}
                </a>
              ),
              contact: (chunks) => (
                <a href={`/${locale}/contact`} className={linkClassName}>
                  {chunks}
                </a>
              ),
            })}
          </p>
        </div>
      </section>
    </div>
  );
};

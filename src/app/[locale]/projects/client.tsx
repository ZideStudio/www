'use client';

import { useProjects } from '@/hooks/projects.hook';
import { ProjectFilters } from '@components/ProjectFilters';
import { ProjectGrid } from '@components/ProjectGrid';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export const Projects = () => {
  const [name, setName] = useState('');
  const [target, setTarget] = useState('');
  const [status, setStatus] = useState('');
  const [type, setType] = useState('');
  const [sort, setSort] = useState('newest');

  const t = useTranslations('projects');

  const { projects } = useProjects({
    filters: {
      name,
      target,
      status,
      type,
      sort,
    },
  });

  return (
    <div className="mx-5 space-y-5 md:mx-24">
      <ProjectFilters setNameAction={setName} setTargetAction={setTarget} setStatusAction={setStatus} setTypeAction={setType} setSortAction={setSort} />

      {projects.length > 0 ? (
        <section>
          <ProjectGrid projects={projects} />
        </section>
      ) : (
        <div className="flex flex-col items-center justify-center py-10">
          <p className="text-text text-xl font-bold">{t('errors.not_found')}</p>
          <p className="text-text/50">{t('errors.not_found_details')}</p>
        </div>
      )}
    </div>
  );
};

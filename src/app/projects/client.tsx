'use client';

import { useProjects } from '@/hooks/projects.hook';
import { ProjectFilters } from '@components/ProjectFilters';
import { ProjectGrid } from '@components/ProjectGrid';
import { useState } from 'react';

export const Projects = () => {
  const [name, setName] = useState('');
  const [target, setTarget] = useState('');
  const [status, setStatus] = useState('');
  const [type, setType] = useState('');
  const [sort, setSort] = useState('newest');

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
    <div className="mx-5 md:mx-24 space-y-5">
      <ProjectFilters setNameAction={setName} setTargetAction={setTarget} setStatusAction={setStatus} setTypeAction={setType} setSortAction={setSort} />

      <section>
        <ProjectGrid projects={projects} />
      </section>
    </div>
  );
};

'use client';

import { Input } from '@components/Input';
import type { SelectOption } from '@components/Select';
import { Select } from '@components/Select';
import { ProjectStatus, ProjectTarget, ProjectType } from '@models/project.model';
import { useTranslations } from 'next-intl';

type ProjectFiltersProps = {
  setNameAction: (e: string) => void;
  setTargetAction: (e: string) => void;
  setStatusAction: (e: string) => void;
  setTypeAction: (e: string) => void;
  setSortAction: (e: string) => void;
};

export const ProjectFilters = ({ setNameAction, setTargetAction, setStatusAction, setTypeAction, setSortAction }: ProjectFiltersProps) => {
  const t = useTranslations('projects');

  const targetOptions: SelectOption[] = [
    { label: t('filters.all_targets'), value: '', icon: 'users' },
    ...Object.values(ProjectTarget).map((target) => {
      let icon: string | undefined;
      switch (target) {
        case ProjectTarget.EVERYONE:
          icon = 'globe';
          break;
        case ProjectTarget.DEVELOPERS:
          icon = 'code';
          break;
        default:
          break;
      }
      return {
        label: t(`target.${target.toLowerCase()}`),
        value: target,
        icon,
      };
    }),
  ];

  const statusOptions: SelectOption[] = [
    { label: t('filters.all_status'), value: '', icon: 'chart-bar' },
    ...Object.values(ProjectStatus).map((status) => {
      let icon: string | undefined;
      switch (status) {
        case ProjectStatus.RELEASED:
          icon = 'bookmark';
          break;
        case ProjectStatus.IN_PROGRESS:
          icon = 'briefcase';
          break;
        case ProjectStatus.PAUSED:
          icon = 'pause-circle';
          break;
        case ProjectStatus.PLANNED:
          icon = 'calendar-clock';
          break;
        default:
          break;
      }
      return {
        label: t(`status.${status.toLowerCase()}`),
        value: status,
        icon,
      };
    }),
  ];

  const typeOptions: SelectOption[] = [
    { label: t('filters.all_types'), value: '', icon: 'id-card' },
    ...Object.values(ProjectType).map((type) => {
      let icon: string | undefined;
      switch (type) {
        case ProjectType.WEBSITE:
          icon = 'globe';
          break;
        case ProjectType.SOFTWARE:
          icon = 'desktop';
          break;
        case ProjectType.CLI:
          icon = 'align-center';
          break;
        case ProjectType.EXTENSION:
          icon = 'expand';
          break;
        default:
          break;
      }
      return {
        label: t(`type.${type.toLowerCase()}`),
        value: type,
        icon,
      };
    }),
  ];

  const sortOptions: SelectOption[] = [
    { label: t('filters.newest'), value: 'newest', icon: 'clock' },
    { label: t('filters.oldest'), value: 'oldest', icon: 'clock' },
    { label: 'A-Z', value: 'alphabetical', icon: 'sort-alpha-down' },
    { label: 'Z-A', value: 'reverseAlphabetical', icon: 'sort-alpha-down-alt' },
  ];

  return (
    <div className="border-text/10 my-5 flex flex-col justify-between space-y-5 rounded border p-3 lg:flex-row lg:space-y-0">
      <Input placeholder="Search projects..." icon="search" className="w-full lg:w-1/3" onChange={setNameAction} />
      <div className="flex flex-col items-center space-y-2 align-middle lg:flex-row lg:space-y-0 lg:space-x-3">
        <Select options={targetOptions} setOption={setTargetAction} />
        <Select options={statusOptions} setOption={setStatusAction} />
        <Select options={typeOptions} setOption={setTypeAction} />
        <Select options={sortOptions} setOption={setSortAction} />
      </div>
    </div>
  );
};

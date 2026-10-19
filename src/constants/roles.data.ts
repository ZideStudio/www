import { MemberGender, MemberRole } from '@models/member.model';

type RoleLabels = {
  labelEn: string;
  labelFr: Record<MemberGender, string>;
};

export const ROLES: Record<MemberRole, RoleLabels> = {
  [MemberRole.FOUNDER]: {
    labelEn: 'Zide Founder',
    labelFr: {
      [MemberGender.MALE]: 'Fondateur Zide',
      [MemberGender.FEMALE]: 'Fondatrice Zide',
    },
  },
  [MemberRole.FULL_STACK_DEVELOPER]: {
    labelEn: 'Full-Stack Developer',
    labelFr: {
      [MemberGender.MALE]: 'Développeur Full-Stack',
      [MemberGender.FEMALE]: 'Développeuse Full-Stack',
    },
  },
  [MemberRole.FRONTEND_DEVELOPER]: {
    labelEn: 'Front-end Developer',
    labelFr: {
      [MemberGender.MALE]: 'Développeur Front-end',
      [MemberGender.FEMALE]: 'Développeuse Front-end',
    },
  },
};

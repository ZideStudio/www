import { MemberGender, MemberRole } from '@models/member.model';

type RoleLabels = {
  labelEn: string;
  labelFr: Record<MemberGender, string>;
};

export const ROLES: Record<MemberRole, RoleLabels> = {
  [MemberRole.FOUNDER]: {
    labelEn: 'Zide Founder',
    labelFr: {
      [MemberGender.MALE]: 'Fondateur de Zide',
      [MemberGender.FEMALE]: 'Fondatrice de Zide',
    },
  },
  [MemberRole.BACKEND_DEVELOPER]: {
    labelEn: 'Backend Developer',
    labelFr: {
      [MemberGender.MALE]: 'Développeur Backend',
      [MemberGender.FEMALE]: 'Développeuse Backend',
    },
  },
  [MemberRole.FRONTEND_DEVELOPER]: {
    labelEn: 'Front-end Developer',
    labelFr: {
      [MemberGender.MALE]: 'Développeur Front-end',
      [MemberGender.FEMALE]: 'Développeuse Front-end',
    },
  },
  [MemberRole.PRODUCT_MANAGER]: {
    labelEn: 'Product Manager',
    labelFr: {
      [MemberGender.MALE]: 'Product Manager',
      [MemberGender.FEMALE]: 'Product Manager',
    },
  },
  [MemberRole.COMMUNICATION_DESIGNER]: {
    labelEn: 'Communication & Design Consultant',
    labelFr: {
      [MemberGender.MALE]: 'Consultant Communication & Design',
      [MemberGender.FEMALE]: 'Consultante Communication & Design',
    },
  },
};

import type { Member } from '@models/member.model';
import { MemberGender, MemberRole } from '@models/member.model';

export const MEMBERS: Member[] = [
  {
    id: 1,
    name: 'Jules LADEIRO',
    gender: MemberGender.MALE,
    roles: [MemberRole.FOUNDER, MemberRole.FULL_STACK_DEVELOPER],
    githubUrl: 'https://github.com/Nekeo',
    pictureUrl: 'https://avatars.githubusercontent.com/u/38363471',
  },
  {
    id: 2,
    name: 'Guillaume KESTEMAN',
    gender: MemberGender.MALE,
    roles: [MemberRole.FULL_STACK_DEVELOPER],
    pictureUrl: 'https://avatars.githubusercontent.com/u/81412571?v=4',
    githubUrl: 'https://github.com/GuillaumeKESTEMAN',
  },
  {
    id: 3,
    name: 'Elisa ROGGE',
    gender: MemberGender.FEMALE,
    roles: [MemberRole.FRONTEND_DEVELOPER],
    pictureUrl: 'https://avatars.githubusercontent.com/u/90752990?v=4',
    githubUrl: 'https://github.com/ElisaROGGE',
  },
  {
    id: 4,
    name: 'Hugo VAYR',
    gender: MemberGender.MALE,
    roles: [MemberRole.FULL_STACK_DEVELOPER],
    pictureUrl: 'https://avatars.githubusercontent.com/u/77483277?v=4',
    githubUrl: 'https://github.com/sartek430',
  },
];

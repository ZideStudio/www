import type { Member } from '@models/member.model';
import { MemberGender, MemberRole } from '@models/member.model';

export const MEMBERS: Member[] = [
  {
    id: 1,
    name: 'Jules LADEIRO',
    gender: MemberGender.MALE,
    roles: [MemberRole.FOUNDER, MemberRole.PRODUCT_MANAGER],
    socialUrl: 'https://github.com/Nekeo',
    pictureUrl: 'https://avatars.githubusercontent.com/u/38363471',
  },
  {
    id: 2,
    name: 'Guillaume KESTEMAN',
    gender: MemberGender.MALE,
    roles: [MemberRole.FRONTEND_DEVELOPER, MemberRole.BACKEND_DEVELOPER],
    pictureUrl: 'https://avatars.githubusercontent.com/u/81412571?v=4',
    socialUrl: 'https://github.com/GuillaumeKESTEMAN',
  },
  {
    id: 3,
    name: 'Elisa ROGGE',
    gender: MemberGender.FEMALE,
    roles: [MemberRole.FRONTEND_DEVELOPER],
    pictureUrl: 'https://avatars.githubusercontent.com/u/90752990?v=4',
    socialUrl: 'https://github.com/ElisaROGGE',
  },
  {
    id: 4,
    name: 'Hugo VAYR',
    gender: MemberGender.MALE,
    roles: [MemberRole.BACKEND_DEVELOPER, MemberRole.FRONTEND_DEVELOPER],
    pictureUrl: 'https://avatars.githubusercontent.com/u/77483277?v=4',
    socialUrl: 'https://github.com/sartek430',
  },
  {
    id: 5,
    name: 'Rémi BROCART',
    gender: MemberGender.MALE,
    roles: [MemberRole.COMMUNICATION_DESIGNER],
    pictureUrl:
      'https://media.licdn.com/dms/image/v2/D4E03AQFQQA6-pmu2fg/profile-displayphoto-crop_800_800/B4EZ7AK_cJKoAI-/0/1781340569010?e=1794441600&v=beta&t=P7eoMfGGi4HH8UojeFH9GmqI5Pb3MWpu8kkPaY2YZnc',
    socialUrl: 'https://www.linkedin.com/in/remibrocart',
  },
];

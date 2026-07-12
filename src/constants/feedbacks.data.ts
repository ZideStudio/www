import memberService from '@/services/member';
import type { MemberFeedback } from '@models/member.model';

export const MEMBER_FEEDBACKS: MemberFeedback[] = [
  {
    member: memberService.getById(1),
    messageEn:
      'Hey, my name’s Jules! I’m a long-time developer, I love creating all kinds of apps in my spare time, with no pressure or deadlines. Just for the joy of sharing my ideas with everyone!',
    messageFr:
      "Hey, je m'appelle Jules ! Créer des applications de tout type pendant mon temps libre me plait. Cela sans pression ni deadlines, juste par plaisir de partager mes idées avec tous !",
  },
  {
    member: memberService.getById(2),
    messageEn:
      "Hi, my name is Elisa! I'm a front-end developer who likes to design small projects that reflect my hobbies and interests, mixing technology and creativity.",
    messageFr:
      "Salut ! Je m'appelle Elisa ! Développeuse orientée front-end, j’aime concevoir de petits projets qui reflètent mes loisirs et mes centres d’intérêts, en mêlant technique et créativité.",
  },
  {
    member: memberService.getById(3),
    messageEn:
      'Hello, my name is Guillaume and I’m a front-end developer. I’m really interested in best practices, optimisation, accessibility and so on. This allows me to push myself in my projects, both personal and professional!',
    messageFr:
      "Hello, Je m'appelle Guillaume et suis un développeur front-end. Je m'intéresse beaucoup aux bonnes pratiques, optimisations, accessibilité et autre. Cela me permet de me challenger dans mes projets, autant en perso qu'en pro !",
  },
  {
    member: memberService.getById(4),
    messageEn:
      "Hi, I'm Hugo! I'm a full-stack developer who loves to keep learning and take on the challenge of innovative projects. I'm always on the lookout for new discoveries, and that's what I love most about this job.",
    messageFr:
      "Hello moi c'est Hugo ! Développeur full-stack, j'aime apprendre en continue et me challenger sur des projets innovants. Je suis toujours en quête de nouvelles découvertes et c'est ce que j'aime le plus dans ce métier.",
  },
  {
    member: memberService.getById(0),
    messageEn: 'Maybe you?<br/>If you are a developer and would like to contribute to Zide projects or share your own, please feel free to join us on Discord!',
    messageFr:
      "Peut être vous ?<br/>Si vous êtes développeur et que vous souhaitez contribuer aux projets de Zide ou partager les vôtres, n'hésitez pas à nous rejoindre sur Discord !",
  },
];

import memberService from '@/services/member';
import type { MemberFeedback } from '@models/member.model';

export const MEMBER_FEEDBACKS: MemberFeedback[] = [
  {
    member: memberService.getById(1),
    messageEn:
      'Hei, my name’s Jules! I love creating all kinds of apps in my spare time. All with no pressure or deadlines, just for the joy of sharing my ideas with everyone!',
    messageFr:
      "Hei, je m'appelle Jules ! J'adore créer des applications de tout type pendant mon temps libre. Tout ça sans pression ni deadlines, juste par plaisir de partager mes idées à tous !",
  },
  {
    member: memberService.getById(2),
    messageEn:
      'Hello, my name is Guillaume and I’m a front-end developer. I’m really interested in best practices, optimisation, accessibility and so on. This allows me to push myself in my projects, both personal and professional!',
    messageFr:
      "Hello, Je m'appelle Guillaume et suis un développeur front-end. Je m'intéresse beaucoup aux bonnes pratiques, optimisations, accessibilité et autre. Cela me permet de me challenger dans mes projets, autant en perso qu'en pro !",
  },
  {
    member: memberService.getById(3),
    messageEn:
      "Hi, my name is Elisa! I'm a front-end developer who likes to design small projects that reflect my hobbies and interests, mixing technology and creativity.",
    messageFr:
      "Salut ! Je m'appelle Elisa ! Développeuse orientée front-end, j’aime concevoir de petits projets qui reflètent mes loisirs et mes centres d’intérêts, en mêlant technique et créativité.",
  },
  {
    member: memberService.getById(4),
    messageEn:
      "Hi, I'm Hugo! I'm a full-stack developer who loves to keep learning and take on the challenge of innovative projects. I'm always on the lookout for new discoveries, and that's what I love most about this job.",
    messageFr:
      "Hello moi c'est Hugo ! Développeur full-stack, j'aime apprendre en continue et me challenger sur des projets innovants. Je suis toujours en quête de nouvelles découvertes et c'est ce que j'aime le plus dans ce métier.",
  },
  {
    member: memberService.getById(5),
    messageEn:
      "Hi, my name is Rémi! I'm a Graphic Designer & Social Media Manager, I create visuals and bring them to life. Making beautiful things is great. Making beautiful things that engage a community and serve your goals is the heart of my job!",
    messageFr:
      "Salut moi c'est Rémi, Graphic Designer & Social Media Manager, je crée des visuels et je les fais vivre. Faire du beau, c'est bien. Faire du beau qui engage une communauté et sert vos objectifs, c'est le cœur de mon métier !",
  },
];

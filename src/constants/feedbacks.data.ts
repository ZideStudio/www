import memberService from '@/services/member';
import type { MemberFeedback } from '@models/member.model';

export const MEMBER_FEEDBACKS: MemberFeedback[] = [
  {
    member: memberService.getById(1),
    messageEn:
      'Hey, I am Jules!<br/>As a passionate developer, I create all kinds of applications in my spare time, without pressure or deadlines.<br/>Just for the pleasure of coding and sharing my projects with everyone!',
    messageFr:
      "Hey, je m'appelle Jules!<br/>Développeur passionné, je crée des applications de tout type pendant mon temps libre, sans pression, sans deadlines.<br/>Juste par plaisir de coder et de partager mes projets à tous!",
  },
  {
    member: memberService.getById(2),
    messageEn:
      "Hi, my name is Elisa! I'm a front-end developer who likes to design small projects that reflect my hobbies and interests, mixing technology and creativity.",
    messageFr:
      "Salut ! Je m'appelle Elisa ! Développeuse orientée front-end, j’aime concevoir de petits projets qui reflètent mes loisirs et mes centres d’intérêts, en mêlant technique et créativité.",
  },
  {
    member: memberService.getById(0),
    messageEn: 'Maybe you?<br/>If you are a developer and would like to contribute to Zide projects or share your own, please feel free to join us on Discord!',
    messageFr:
      "Peut être vous ?<br/>Si vous êtes développeur et que vous souhaitez contribuer aux projets de Zide ou partager les vôtres, n'hésitez pas à nous rejoindre sur Discord !",
  },
];

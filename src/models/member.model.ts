export enum MemberRole {
  FOUNDER = 'FOUNDER',
  FULL_STACK_DEVELOPER = 'FULL_STACK_DEVELOPER',
  FRONTEND_DEVELOPER = 'FRONTEND_DEVELOPER',
}

export enum MemberGender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
}

export type Member = {
  id: number;
  name: string;
  gender: MemberGender;
  roles: MemberRole[];
  githubUrl?: string;
  pictureUrl: string;
};

export type MemberFeedback = {
  member: Member;
  messageEn: string;
  messageFr: string;
};

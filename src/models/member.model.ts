export enum MemberRole {
  FOUNDER = 'FOUNDER',
  FRONTEND_DEVELOPER = 'FRONTEND_DEVELOPER',
  BACKEND_DEVELOPER = 'BACKEND_DEVELOPER',
  PRODUCT_MANAGER = 'PRODUCT_MANAGER',
  COMMUNICATION_DESIGNER = 'COMMUNICATION_DESIGNER',
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
  socialUrl?: string;
  pictureUrl: string;
};

export type MemberFeedback = {
  member: Member;
  messageEn: string;
  messageFr: string;
};

export type Member = {
  id: number;
  name: string;
  roleEn: string;
  roleFr: string;
  githubUrl?: string;
  pictureUrl: string;
};

export type MemberFeedback = {
  member: Member;
  messageEn: string;
  messageFr: string;
};

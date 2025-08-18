import { MEMBERS } from '@constants/members.data';
import type { Member } from '@models/member.model';

class MemberService {
  getById(id: number): Member {
    return MEMBERS.find((member) => member.id === id) ?? MEMBERS[0];
  }
}

const memberService = new MemberService();

export default memberService;

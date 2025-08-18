import type { Member } from '@models/member.model';

export const AvatarGroup = ({ members }: { members: Member[] }) => {
  const openGithub = (author: Member) => {
    if (!author.githubUrl) return;
    window.open(author.githubUrl, '_blank');
  };

  return (
    <div className="flex -space-x-2">
      {members.map((member) => (
        <div key={member.id} className="group relative inline-block cursor-pointer" onClick={() => openGithub(member)} onKeyUp={() => openGithub(member)}>
          <span className="bg-secondary text-text absolute top-full left-1/2 mt-2 -translate-x-1/2 transform rounded-lg px-2.5 py-1.5 text-xs whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {member.name}
          </span>
          <img
            key={member.id}
            className="ring-text/50 relative inline-block size-11 rounded-full ring-2 hover:z-10"
            src={member.pictureUrl}
            alt={member.name}
          />
        </div>
      ))}
    </div>
  );
};

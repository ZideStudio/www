import type { Member } from '@models/member.model';

type AvatarGroupProps = {
  members: Member[];
  tooltipPosition?: 'top' | 'bottom';
  size?: 'small' | 'large';
  displayLimit?: number;
};

export const AvatarGroup = ({ members, size = 'large', tooltipPosition = 'bottom', displayLimit = 5 }: AvatarGroupProps) => {
  const openGithub = (author: Member) => {
    if (!author.githubUrl) return;
    window.open(author.githubUrl, '_blank');
  };

  const tooltipClasses =
    tooltipPosition === 'top'
      ? 'bg-secondary text-text absolute bottom-full left-1/2 mb-2 -translate-x-1/2 transform rounded-lg px-2.5 py-1.5 text-xs whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-50'
      : 'bg-secondary text-text absolute top-full left-1/2 mt-2 -translate-x-1/2 transform rounded-lg px-2.5 py-1.5 text-xs whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-50';

  const visibleMembers = members.slice(0, displayLimit);
  const remainingCount = members.length - displayLimit;

  return (
    <div className="flex -space-x-2">
      {visibleMembers.map((member) => (
        <div key={member.id} className="group relative inline-block cursor-pointer" onClick={() => openGithub(member)} onKeyUp={() => openGithub(member)}>
          <span className={tooltipClasses}>{member.name}</span>
          <img
            key={member.id}
            className={`ring-text/50 relative inline-block ${size === 'large' ? 'size-11' : 'size-7'} rounded-full ring-2 hover:z-10`}
            src={member.pictureUrl}
            alt={member.name}
          />
        </div>
      ))}
      {remainingCount > 0 && (
        <div className="group relative inline-block">
          <span className={tooltipClasses}>+{remainingCount} more</span>
          <div
            className={`ring-text/50 bg-secondary text-text relative flex ${size === 'large' ? 'size-11' : 'size-7'} items-center justify-center rounded-full text-xs font-medium ring-2 hover:z-10`}
          >
            +{remainingCount}
          </div>
        </div>
      )}
    </div>
  );
};

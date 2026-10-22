export const HOME_CONTENT_ID = 'home-content';

export const HOME_BANNER_WORDS = ['website', 'application', 'free_time', 'volunteers', 'simplicity', 'efficiency'] as const;

export const HOME_ABOUT_POINTS = [
  { key: 'volunteers', icon: 'users' },
  { key: 'free_time', icon: 'clock' },
  { key: 'useful', icon: 'bolt' },
  { key: 'language', icon: 'language' },
] as const;

export const HOME_EXPLORE_LINKS = [
  { key: 'about', icon: 'info-circle', href: '/about' },
  { key: 'team', icon: 'users', href: '/team' },
  { key: 'projects', icon: 'th-large', href: '/projects' },
  { key: 'contact', icon: 'envelope', href: '/contact' },
] as const;

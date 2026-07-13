export type ScreenKey =
  | 'home'
  | 'gallery'
  | 'project-detail'
  | 'systems'
  | 'finishes'
  | 'benefits'
  | 'reviews'
  | 'company'
  | 'quote'
  | 'presentation';

export interface ApprovedScreen {
  key: ScreenKey;
  path: string;
  title: string;
  description: string;
  driveFileId: string;
  imageUrl: string;
}

const driveImage = (id: string) =>
  `https://drive.google.com/thumbnail?id=${encodeURIComponent(id)}&sz=w1600`;

export const SCREENS: Record<ScreenKey, ApprovedScreen> = {
  home: {
    key: 'home',
    path: '/',
    title: 'National Concrete Polishing Contractor App',
    description: 'Polished Concrete. Proven Results.',
    driveFileId: '1ldjF0sUiEqCZxQHV1flwYqxIwzrXFtFo',
    imageUrl: driveImage('1ldjF0sUiEqCZxQHV1flwYqxIwzrXFtFo'),
  },
  benefits: {
    key: 'benefits',
    path: '/benefits',
    title: 'Benefits & Comparison | NCP',
    description: 'Compare polished concrete with common flooring alternatives.',
    driveFileId: '1bh946RQHpDfR0XDMxZfNFeFhw8VtMx7g',
    imageUrl: driveImage('1bh946RQHpDfR0XDMxZfNFeFhw8VtMx7g'),
  },
  'project-detail': {
    key: 'project-detail',
    path: '/gallery/project-detail',
    title: 'Project Detail | NCP',
    description: 'Review a National Concrete Polishing project presentation.',
    driveFileId: '1-_EvQovUdNfCzYVB4a3oYeMyDnzvrEIy',
    imageUrl: driveImage('1-_EvQovUdNfCzYVB4a3oYeMyDnzvrEIy'),
  },
  systems: {
    key: 'systems',
    path: '/systems',
    title: 'Floor Systems | NCP',
    description: 'Explore polished concrete and resinous flooring systems.',
    driveFileId: '1yeMxJTZuYO8_FDs3-695H92_EK6I8U6c',
    imageUrl: driveImage('1yeMxJTZuYO8_FDs3-695H92_EK6I8U6c'),
  },
  reviews: {
    key: 'reviews',
    path: '/reviews',
    title: 'Reviews & Testimonials | NCP',
    description: 'Review the National Concrete Polishing testimonial presentation.',
    driveFileId: '1nHMOdrWQxD6rW-W3bPsftR1k1kO3vfF0',
    imageUrl: driveImage('1nHMOdrWQxD6rW-W3bPsftR1k1kO3vfF0'),
  },
  finishes: {
    key: 'finishes',
    path: '/finishes',
    title: 'Colors & Finishes | NCP',
    description: 'Explore finish and color presentation options.',
    driveFileId: '1pscz7y1N1IeDpn4KpS_8nD4Gi1VFFjU-',
    imageUrl: driveImage('1pscz7y1N1IeDpn4KpS_8nD4Gi1VFFjU-'),
  },
  presentation: {
    key: 'presentation',
    path: '/presentation',
    title: 'Contractor Presentation Mode | NCP',
    description: 'Customer-facing contractor presentation mode.',
    driveFileId: '1lauEohih8ZtOPdbCDod4t3cxdQHE5nwU',
    imageUrl: driveImage('1lauEohih8ZtOPdbCDod4t3cxdQHE5nwU'),
  },
  quote: {
    key: 'quote',
    path: '/quote',
    title: 'Request a Quote | NCP',
    description: 'Request an estimate from National Concrete Polishing.',
    driveFileId: '18o6ysL7beincQsK7dpc377vDdNDBlehy',
    imageUrl: driveImage('18o6ysL7beincQsK7dpc377vDdNDBlehy'),
  },
  company: {
    key: 'company',
    path: '/company',
    title: 'Company Profile | NCP',
    description: 'National Concrete Polishing company presentation.',
    driveFileId: '1lS1mYc5M--0pVpCZshtHB8aMysOi40O-',
    imageUrl: driveImage('1lS1mYc5M--0pVpCZshtHB8aMysOi40O-'),
  },
  gallery: {
    key: 'gallery',
    path: '/gallery',
    title: 'Project Gallery | NCP',
    description: 'Browse National Concrete Polishing project presentation examples.',
    driveFileId: '1_hGAS3WJt53errBuTFUq50bfwD9wwXou',
    imageUrl: driveImage('1_hGAS3WJt53errBuTFUq50bfwD9wwXou'),
  },
};

export const MENU_ITEMS: Array<{ key: ScreenKey; label: string; note: string }> = [
  { key: 'gallery', label: 'Project Gallery', note: 'Portfolio and case studies' },
  { key: 'systems', label: 'Floor Systems', note: 'Polished concrete and coatings' },
  { key: 'finishes', label: 'Colors & Finishes', note: 'Finish presentation' },
  { key: 'benefits', label: 'Benefits', note: 'Flooring comparison' },
  { key: 'reviews', label: 'Reviews', note: 'Testimonial presentation' },
  { key: 'company', label: 'Company Profile', note: 'Contact and capabilities' },
  { key: 'presentation', label: 'Presentation Mode', note: 'Customer-ready walkthrough' },
  { key: 'quote', label: 'Request a Quote', note: 'Send project information' },
];

export function screenFromSlug(slug?: string[]): ApprovedScreen | null {
  const value = (slug ?? []).join('/');
  if (!value) return SCREENS.home;
  if (value === 'gallery') return SCREENS.gallery;
  if (value === 'gallery/project-detail') return SCREENS['project-detail'];
  const direct = Object.values(SCREENS).find((screen) => screen.path.slice(1) === value);
  return direct ?? null;
}

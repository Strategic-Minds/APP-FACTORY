export interface Screen { path: string; title: string; image: string }
const drive = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w1600`;
export const screens: Record<string, Screen> = {
  '': { path: '/', title: 'National Concrete Polishing', image: drive('1ldjF0sUiEqCZxQHV1flwYqxIwzrXFtFo') },
  benefits: { path: '/benefits', title: 'Benefits & Comparison', image: drive('1bh946RQHpDfR0XDMxZfNFeFhw8VtMx7g') },
  'gallery/project-detail': { path: '/gallery/project-detail', title: 'Project Detail', image: drive('1-_EvQovUdNfCzYVB4a3oYeMyDnzvrEIy') },
  systems: { path: '/systems', title: 'Floor Systems', image: drive('1yeMxJTZuYO8_FDs3-695H92_EK6I8U6c') },
  reviews: { path: '/reviews', title: 'Reviews & Testimonials', image: drive('1nHMOdrWQxD6rW-W3bPsftR1k1kO3vfF0') },
  finishes: { path: '/finishes', title: 'Colors & Finishes', image: drive('1pscz7y1N1IeDpn4KpS_8nD4Gi1VFFjU-') },
  presentation: { path: '/presentation', title: 'Contractor Presentation Mode', image: drive('1lauEohih8ZtOPdbCDod4t3cxdQHE5nwU') },
  quote: { path: '/quote', title: 'Request a Quote', image: drive('18o6ysL7beincQsK7dpc377vDdNDBlehy') },
  company: { path: '/company', title: 'Company Profile', image: drive('1lS1mYc5M--0pVpCZshtHB8aMysOi40O-') },
  gallery: { path: '/gallery', title: 'Project Gallery', image: drive('1_hGAS3WJt53errBuTFUq50bfwD9wwXou') },
};
export const menu = Object.entries(screens).filter(([key]) => key && key !== 'gallery/project-detail');

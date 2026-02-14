import type { NavigationItem } from '../types';

export const navigationItems: NavigationItem[] = [
  { path: '/', label: 'Home' },
  { path: '/releases', label: 'Releases' },
  { path: '/movies', label: 'Movies' },
  { path: '/theaters', label: 'Theaters' }
];

export const appConfig = {
  name: 'EventEase',
  brandColor: '#eb4e62'
};

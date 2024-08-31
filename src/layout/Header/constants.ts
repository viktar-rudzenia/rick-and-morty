import { AllRoutesEnum } from '@/utils/constants';

export const navigationBarLinks = {
  [AllRoutesEnum.HOME]: {
    id: 1,
    name: 'Home',
    href: AllRoutesEnum.HOME,
  },
  [AllRoutesEnum.CHARACTERS]: {
    id: 2,
    name: 'Characters',
    href: AllRoutesEnum.CHARACTERS,
  },
  [AllRoutesEnum.LOCATIONS]: {
    id: 3,
    name: 'Locations',
    href: AllRoutesEnum.LOCATIONS,
  },
  [AllRoutesEnum.EPISODES]: {
    id: 4,
    name: 'Episodes',
    href: AllRoutesEnum.EPISODES,
  },
};

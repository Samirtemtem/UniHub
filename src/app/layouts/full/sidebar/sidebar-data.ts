import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  {
    displayName: 'Users',
    iconName: 'users',
    route: '/dashboard/users',
  },
  {
    displayName: 'Roles',
    iconName: 'discount-check-filled',
    route: '/dashboard/roles',
  },
  {
    displayName: 'Universités',
    iconName: 'school',
    route: '/dashboard/universities/admin',
  },
  {
    displayName: 'Spécialités',
    iconName: 'books',
    route: '/dashboard/specialites/admin',
  },

  {
    displayName: 'Restaurant',
    iconName: 'grill-fork',
    route: '/dashboard/restaurants/admin',
  },
  // {
  //   displayName: 'Reservations',
  //   iconName: 'checkup-list',
  //   route: '/',
  // },

  {
    displayName: 'Events',
    iconName: 'calendar',
    route: '/dashboard/evenement/admin',
  },
  {
    displayName: 'News',
    iconName: 'news',
    route: '/dashboard/news',
  },
  // {
  //   navCap: 'Ui Components',
  // },
  // {
  //   displayName: 'Badge',
  //   iconName: 'rosette',
  //   route: '/ui-components/badge',
  // },
  // {
  //   displayName: 'Chips',
  //   iconName: 'poker-chip',
  //   route: '/ui-components/chips',
  // },
  // {
  //   displayName: 'Lists',
  //   iconName: 'list',
  //   route: '/ui-components/lists',
  // },
  // {
  //   displayName: 'Menu',
  //   iconName: 'layout-navbar-expand',
  //   route: '/ui-components/menu',
  // },
  // {
  //   displayName: 'Tooltips',
  //   iconName: 'tooltip',
  //   route: '/ui-components/tooltips',
  // },
  // {
  //   navCap: 'Auth',
  // },
  // {
  //   displayName: 'Login',
  //   iconName: 'lock',
  //   route: '/authentication/login',
  // },
  // {
  //   displayName: 'Register',
  //   iconName: 'user-plus',
  //   route: '/authentication/register',
  // },
  // {
  //   navCap: 'Extra',
  // },
  // {
  //   displayName: 'Icons',
  //   iconName: 'mood-smile',
  //   route: '/extra/icons',
  // },
  // {
  //   displayName: 'Sample Page',
  //   iconName: 'aperture',
  //   route: '/extra/sample-page',
  // },
];

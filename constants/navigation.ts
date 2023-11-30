import colors from "../styles/theme";

export const navigationMenu = [
  {
    id: 1,
    name: 'Home',
    link: 'Home',
    logoInactive: require('../assets/images/Home-Icon-Grey.png'),
    logoActive: require('../assets/images/Home-Icon-Maroon.png'),
  },
  {
    id: 2,
    name: 'Explore',
    link: 'Explore',
    logoInactive: require('../assets/images/Explore-Icon-Grey.png'),
    logoActive: require('../assets/images/Explore-Icon-Maroon.png'),
  },
  {
    id: 3,
    name: 'Scan',
    link: 'Scan',
    logoInactive: require('../assets/images/Scan-Icon-Grey.png'),
    logoActive: require('../assets/images/Scan-Icon-Maroon.png'),
  },
  {
    id: 4,
    name: 'Rewards',
    link: 'Rewards',
    logoInactive: require('../assets/images/Rewards-Icon-Grey.png'),
    logoActive: require('../assets/images/Rewards-Icon-Maroon.png'),
  },
  {
    id: 5,
    name: 'Accounts',
    link: 'Accounts',
    logoInactive: require('../assets/images/My-Profile-Icon-Grey.png'),
    logoActive: require('../assets/images/My-Profile-Icon-Maroon.png'),
  }
]
export const statusBarColor =  {
  Home: colors?.white,
  Activities: colors?.bgRed,
  Scan: colors?.bgRed,
}
interface Content {
  id: number;
  itemText: string;
}

export const diamondCardBenefits: Content[] = [
  { 
    id: 1,
    itemText: 'VIP express check-in desk'
  },
  { 
    id: 2,
    itemText: 'Exclusive member rates from preferred partners'
  },
  { 
    id: 3,
    itemText: 'Priority welcome gift upon check in'
  },
];

interface Carousel {
  id: number;
  image: string;
  title: string;
}

export const carouselData: Carousel[] = [
  {
    id: 1,
    image: require('../assets/images/training.png'),
    title: 'Personal Training'
  },
  {
    id: 2,
    image: require('../assets/images/brunch.png'),
    title: 'Sunday Brunch'
  },
  {
    id: 3,
    image: require('../assets/images/brunch.png'),
    title: 'Swimming'
  },
  {
    id: 4,
    image: require('../assets/images/brunch.png'),
    title: 'Meditation'
  },
  {
    id: 5,
    image: require('../assets/images/brunch.png'),
    title: 'Sauna'
  }
]

export const carouselData2: Carousel[] = [
  {
    id: 1,
    image: require('../assets/images/restaurant1.png'),
    title: 'Thorn Tree Cafe'
  },
  {
    id: 2,
    image: require('../assets/images/restaurant2.png'),
    title: 'Thai Chi Restaurant'
  },
  {
    id: 3,
    image: require('../assets/images/restaurant1.png'),
    title: 'Exchange Restaurant'
  },
  {
    id: 4,
    image: require('../assets/images/restaurant2.png'),
    title: 'Thorn Tree Cafe'
  },
  {
    id: 5,
    image: require('../assets/images/restaurant1.png'),
    title: 'Thai Chi Restaurant'
  }
]
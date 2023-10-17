import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { ImageProps } from "react-native";
import { Tab } from "../components/Navigation/Top";
import { RoomCard } from "../components/Card/roomcard";
import colors from '../styles/theme';

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

export const tabsData: Tab[] = [
  {
    id: 1,
    name: 'Hotels',
    screen: 'Hotels'
  },
  {
    id: 2,
    name: 'Restaurants',
    screen: 'Restaurants'
  },
  {
    id: 3,
    name: 'Tulia Spa',
    screen: 'Spa'
  },
  {
    id: 4,
    name: 'Concierge',
    screen: 'Concierge'
  },
]

export const profileTabsData: Tab[] = [
  {
    id: 1,
    name: 'Points History',
    screen: 'Points'
  },
  {
    id: 1,
    name: 'My Details',
    screen: 'Details'
  },
  {
    id: 1,
    name: 'Preferences',
    screen: 'Preferences'
  },
]

export interface Hotel {
  id?: number;
  price?: string | undefined;
  name?: string | undefined;
  spa?: string | undefined;
  image: ImageProps | Readonly<ImageProps>;
  points?: string | undefined;
  imageWidth?: number | undefined;
  imageHeight?: number | undefined;
  borderRadius?: number | undefined;
  pointsColor?: string | undefined;
  pointsFontSize?: number | undefined;
  navigateTo?: string | undefined;
  button?: string | undefined;
  namePaddingBottom?: number | undefined;
}

export const hotels: Hotel[] = [
  {
    id: 1,
    price: 'From US $150 per night',
    name: 'Sarova Stanley Nairobi',
    spa: 'Tulia Spa | The Stanley',
    image: require('../assets/images/Sarova_Stanley_Exterior_1.webp'),
    points: 'Earn up to 2,500 points',
  },
  {
    id: 2,
    price: 'From US $150 per night',
    name: 'Sarova Panafric Nairobi',
    spa: 'Health Club | The Stanley',
    image: require('../assets/images/Sarova_Panafric_exterior_1.webp'),
    points: 'Earn up to 2,500 points',
  },
  {
    id: 3,
    price: 'From US $150 per night',
    name: 'Sarova Woodlands Hotel',
    spa: 'Tulia Spa | The Stanley',
    image: require('../assets/images/Sarova_Woodlands_Exterior_5.webp'),
    points: 'Earn up to 2,500 points',
  },
  {
    id: 4,
    price: 'From US $150 per night',
    name: 'Sarova Whitesands Beach Resort',
    spa: 'Tulia Spa | The Stanley',
    image: require('../assets/images/Sarova_Whitesands_Exteriors_11.webp'),
    points: 'Earn up to 2,500 points',
  },
  {
    id: 5,
    price: 'From US $150 per night',
    name: 'Sarova Lion Hill Game Lodge',
    spa: 'Tulia Spa | The Stanley',
    image: require('../assets/images/Sarova_Lion_Hill_Exteriors_11.webp'),
    points: 'Earn up to 2,500 points',
  },
  {
    id: 6,
    price: 'From US $150 per night',
    name: 'Sarova Mara Game Camp',
    spa: 'Tulia Spa | The Stanley',
    image: require('../assets/images/Sarova_Mara_Game_Camp_Lobby.webp'),
    points: 'Earn up to 2,500 points',
  },
  {
    id: 7,
    price: 'From US $150 per night',
    name: 'Sarova Shaba Game Lodge',
    spa: 'Tulia Spa | The Stanley',
    image: require('../assets/images/Sarova_Shaba_Game_Lodge_Exterior_10.webp'),
    points: 'Earn up to 2,500 points',
  },
  {
    id: 8,
    price: 'From US $150 per night',
    name: 'Sarova Imperial, Kisumu',
    spa: 'Tulia Spa | The Stanley',
    image: require('../assets/images/Sarova_Imperial_Exteriors_4.webp'),
    points: 'Earn up to 2,500 points',
  },
]

export const CarouselImageData: ImageProps[] = [
  require('../assets/images/Sarova_Stanley_Exterior_1.webp'),
  require('../assets/images/Sarova_Stanley_1902_Club_Lounge_6_(1).webp'),
  require('../assets/images/Sarova_Stanley_The_Exchange_bar_6.webp'),
  require('../assets/images/Sarova_Stanley_Thorn_Tree_Cafe_11.webp'),
  require('../assets/images/Sarova_Stanley_Thai_Chi_restaurant_8.webp'),
  require('../assets/images/Sarova_Stanley_Pool_Deck_Restaurant_4.webp'),
]

export const roomsData:RoomCard[] =[
   {
    id: 1,
    title: 'Stanley Themed Suites',
    desc: 'Sarova Stanley Suites offer the most distinctive experience. Sarova Stanley Suites offer the most distinctive experience',
    price: 'From US $150 per night',
    image: require('../assets/images/Sarova_Stanley_Lamu_Suite_1.webp'),
   },
   {
    id: 2,
    title: 'Stanley Club Rooms',
    desc: 'Club rooms offer a very comfortable stay featuring.Club rooms offer a very comfortable stay featuring.',
    price: 'From US $150 per night',
    image: require('../assets/images/Sarova_Stanley_Twin_Club_Room_2.webp'),
  },
  {
    id: 3,
    title: 'Stanley Deluxe Rooms',
    desc: 'Deluxe rooms offer a very comfortable stay featuring.Club rooms offer a very comfortable stay featuring.',
    price: 'From US $150 per night',
    image: require('../assets/images/Sarova_Stanley_Karen_Blixen_Suite_2.webp'),
  },
  {
    id: 4,
    title: 'Rooms',
    desc: 'Rooms offer a very comfortable stay featuring.Club rooms offer a very comfortable stay featuring.',
    price: 'From US $150 per night',
    image: require('../assets/images/Sarova_Stanley_Room_13.webp'),
 },
//  {
//   id: 5,
//   title: 'Rooms',
//   desc: 'Rooms offer a very comfortable stay featuring.Club rooms offer a very comfortable stay featuring.',
//   price: 'From US $150 per night',
//   image: require('../assets/images/Sarova_Stanley_Room_13.webp'),
// },
//   {
//   id: 6,
//   title: 'Stanley Themed Suites',
//   desc: 'Sarova Stanley Suites offer the most distinctive experience. Sarova Stanley Suites offer the most distinctive experience',
//   price: 'From US $150 per night',
//   image: require('../assets/images/Sarova_Stanley_Lamu_Suite_1.webp'),
//  },
//  {
//   id: 7,
//   title: 'Stanley Club Rooms',
//   desc: 'Club rooms offer a very comfortable stay featuring.Club rooms offer a very comfortable stay featuring.',
//   price: 'From US $150 per night',
//   image: require('../assets/images/Sarova_Stanley_Twin_Club_Room_2.webp'),
// },
// {
//   id: 8,
//   title: 'Stanley Deluxe Rooms',
//   desc: 'Deluxe rooms offer a very comfortable stay featuring.Club rooms offer a very comfortable stay featuring.',
//   price: 'From US $150 per night',
//   image: require('../assets/images/Sarova_Stanley_Karen_Blixen_Suite_2.webp'),
// },
]

export const roomCarouselData: ImageProps[] = [
  require('../assets/images/Sarova_Stanley_Lamu_Suite_1.webp'),
  require('../assets/images/Sarova_Stanley_Twin_Club_Room_2.webp'),
  require('../assets/images/Sarova_Stanley_Karen_Blixen_Suite_2.webp'),
  require('../assets/images/Sarova_Stanley_Room_13.webp'),
]

interface RoomFeature {
  id: number;
  icon: React.ReactNode;
  desc: string;
}
export const roomFeatures: RoomFeature[] = [
  {
    id: 1,
    icon:  (
      <FontAwesome 
        name='users' 
        size={28} 
        color={colors?.darkGray} 
        // style={{ marginBottom: 10, marginTop: -15, color: '#71716F', }} 
      />
    ),
    desc: '2 People'
  },
  {
    id: 2,
    icon: (
      <FontAwesome 
        name='bed' 
        size={29} 
        color={colors?.darkGray} 
        // style={{ marginBottom: 10, marginTop: -15, color: '#71716F', }} 
      />
    ),
    desc: 'Queen size & 2 Twin Bedding'
  },
  {
    id: 3,
    icon: (
      <FontAwesome 
        name='eye' 
        size={29} 
        color={colors?.darkGray} 
        // style={{ marginBottom: 10, marginTop: -15, color: '#71716F', }} 
      />
    ),
    desc: 'City Views'
  },
]
export interface Card {
  id?: number;
  src: ImageProps | Readonly<ImageProps>;
}

export const cards: Card[] = [
  {
    id: 1,
    src: require('../assets/images/VISA_logo.png')
  },
  {
    id: 2,
    src: require('../assets/images/American-Express.png')
  },
  {
    id: 3,
    src: require('../assets/images/Mastercard.webp')
  },
  {
    id: 4,
    src: require('../assets/images/paypal-logo-.webp')
  },
  {
    id: 5,
    src: require('../assets/images/visa.png')
  },
  {
    id: 6,
    src: require('../assets/images/mpesa.png')
  }
]


interface SpaTypes {
  id: number;
  type: string;
  time: string;
  price: string;
  points: string;
}

export interface Spa {
  id: number;
  name: string;
  spa: SpaTypes[]
}

export const spas = [
  {
    id: 1,
    name: 'TULIA JOURNEYS ',
    spa: [
      {
        id: 1,
        type: 'Hot Stone Therapy',
        time: '1 hour 30 minutes',
        price: 'Kshs 4,300.00',
        amount: 4300,
        points: 'Earn 430 points'
      },
      {
        id: 2,
        type: 'Classic Swedish Body',
        time: '1 hour',
        price: ' Kshs 3,700.00',
        amount: 3700,
        points: 'Earn 370 points'
      },
      {
        id: 3,
        type: 'Absolute Tulia Ritual',
        time: ' 1 hour',
        price: ' Kshs 7,200.00 Earn',
        amount: 7200,
        points: '720 points'
      },
    ]
  },
  {
    id: 2,
    name: 'BODY SKIN REJUVENATION',
    spa: [
      {
        id: 1,
        type: 'Hot Stone Therapy',
        time: '1 hour 30 minutes',
        price: 'Kshs 4,300.00',
        amount: 4300,
        points: 'Earn 430 points'
      },
    ]
  },
  {
    id: 3,
    name: 'BEAUTY TREATMENT',
    spa: [
      {
        id: 1,
        type: 'Hot Stone Therapy',
        time: '1 hour 30 minutes',
        price: 'Kshs 4,300.00',
        amount: 4300,
        points: 'Earn 430 points'
      },
    ]
  },
  {
    id: 4,
    name: 'WAXING',
    spa: [
      {
        id: 1,
        type: 'Hot Stone Therapy',
        time: '1 hour 30 minutes',
        price: 'Kshs 4,300.00',
        amount: 4300,
        points: 'Earn 430 points'
      },
    ]
  },
  {
    id: 5,
    name: 'TULIA JOURNEYS ',
    spa: [
      {
        id: 1,
        type: 'Hot Stone Therapy',
        time: '1 hour 30 minutes',
        price: 'Kshs 4,300.00',
        amount: 4300,
        points: 'Earn 430 points'
      },
      {
        id: 2,
        type: 'Classic Swedish Body',
        time: '1 hour',
        price: ' Kshs 3,700.00',
        amount: 3700,
        points: 'Earn 370 points'
      },
      {
        id: 3,
        type: 'Absolute Tulia Ritual',
        time: ' 1 hour',
        price: ' Kshs 7,200.00 Earn',
        amount: 4720,
        points: '720 points'
      },
    ]
  },
  {
    id: 6,
    name: 'BODY SKIN REJUVENATION',
    spa: [
      {
        id: 1,
        type: 'Hot Stone Therapy',
        time: '1 hour 30 minutes',
        price: 'Kshs 4,300.00',
        amount: 4300,
        points: 'Earn 430 points'
      },
    ]
  },
  {
    id: 7,
    name: 'BEAUTY TREATMENT',
    spa: [
      {
        id: 1,
        type: 'Hot Stone Therapy',
        time: '1 hour 30 minutes',
        price: 'Kshs 4,300.00',
        amount: 4300,
        points: 'Earn 430 points'
      },
    ]
  },
  {
    id: 6,
    name: 'BODY SKIN REJUVENATION',
    spa: [
      {
        id: 1,
        type: 'Hot Stone Therapy',
        time: '1 hour 30 minutes',
        price: 'Kshs 4,300.00',
        amount: 4300,
        points: 'Earn 430 points'
      },
    ]
  },
  {
    id: 7,
    name: 'BEAUTY TREATMENT',
    spa: [
      {
        id: 1,
        type: 'Hot Stone Therapy',
        time: '1 hour 30 minutes',
        price: 'Kshs 4,300.00',
        amount: 4300,
        points: 'Earn 430 points'
      },
    ]
  },
  {
    id: 7,
    name: 'BODY SKIN REJUVENATION',
    spa: [
      {
        id: 1,
        type: 'Hot Stone Therapy',
        time: '1 hour 30 minutes',
        price: 'Kshs 4,300.00',
        amount: 4300,
        points: 'Earn 430 points'
      },
    ]
  },
  {
    id: 8,
    name: 'BEAUTY TREATMENT',
    spa: [
      {
        id: 1,
        type: 'Hot Stone Therapy',
        time: '1 hour 30 minutes',
        price: 'Kshs 4,300.00',
        amount: 4300,
        points: 'Earn 430 points'
      },
    ]
  },
]

export const concierge: Hotel[] = [
  {
    id: 1,
    price: 'Complimentary Service',
    name: 'Transfers',
    button: 'Contact',
    image: require('../assets/images/Sarova_Whitesands_Fleet.webp'),
  },
  {
    id: 2,
    name: 'Transfers',
    price: 'Complimentary Service',
    button: 'Contact',
    image: require('../assets/images/Sarova_Stanley_Lobby_Area.webp'),
  },
  {
    id: 3,
    name: 'Transfers',
    price: 'Complimentary Service',
    button: 'Contact',
    image: require('../assets/images/Sarova_Stanley_Concierge.webp'),
  },
  {
    id: 4,
    name: 'Transfers',
    price: 'Complimentary Service',
    button: 'Contact',
    image: require('../assets/images/Sarova_Panafric_Reception.webp'),
  },
]
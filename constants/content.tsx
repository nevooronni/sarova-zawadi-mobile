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
  titleDesc?: string;
  typeDesc?: string;
  time?: string;
  defaultRoute?: string;
}

export const carouselData: Carousel[] = [
  {
    id: 1,
    image: require('../assets/images/gym.jpg'),
    title: 'Personal Training',
    titleDesc: 'Feel the Burn',
    time: 'Sarova Panafric, Jan 26th 2019, 8am to 10am.',
    defaultRoute: 'Home',
    typeDesc: `Aerobic exercises is physical exercise of how to high intensity that depends primary on the aerobic energy generating process."Aerobic" means "relationg to, involving, or requiring free oxygen", and refers to the use of oxygen to adequately meet energy demands during exercise via aerobic metabolism.`
  },
  {
    id: 2,
    image: require('../assets/images/brunch.jpg'),
    title: 'Sunday Brunch',
    titleDesc: 'Brunch',
    time: 'Sarova Panafric, Jan 26th 2019, 8am to 10am.',
    defaultRoute: 'Home',
    typeDesc: `Aerobic exercises is physical exercise of how to high intensity that depends primary on the aerobic energy generating process."Aerobic" means "relationg to, involving, or requiring free oxygen", and refers to the use of oxygen to adequately meet energy demands during exercise via aerobic metabolism.`
  },
  {
    id: 3,
    image: require('../assets/images/swimming.jpg'),
    title: 'Swimming',
    titleDesc: 'Relax in the pool',
    time: 'Sarova Panafric, Jan 26th 2019, 8am to 10am.',
    defaultRoute: 'Home',
    typeDesc: `Aerobic exercises is physical exercise of how to high intensity that depends primary on the aerobic energy generating process."Aerobic" means "relationg to, involving, or requiring free oxygen", and refers to the use of oxygen to adequately meet energy demands during exercise via aerobic metabolism.`
  },
  {
    id: 4,
    image: require('../assets/images/meditation.jpg'),
    title: 'Meditation',
    titleDesc: 'Feel the Meditation',
    time: 'Sarova Panafric, Jan 26th 2019, 8am to 10am.',
    defaultRoute: 'Home',
    typeDesc: `Aerobic exercises is physical exercise of how to high intensity that depends primary on the aerobic energy generating process."Aerobic" means "relationg to, involving, or requiring free oxygen", and refers to the use of oxygen to adequately meet energy demands during exercise via aerobic metabolism.`
  },
  {
    id: 5,
    image: require('../assets/images/sauna.jpg'),
    title: 'Sauna',
    titleDesc: 'Relax in the Sauna',
    time: 'Sarova Panafric, Jan 26th 2019, 8am to 10am.',
    defaultRoute: 'Home',
    typeDesc: `Aerobic exercises is physical exercise of how to high intensity that depends primary on the aerobic energy generating process."Aerobic" means "relationg to, involving, or requiring free oxygen", and refers to the use of oxygen to adequately meet energy demands during exercise via aerobic metabolism.`
  }
];

export const promotionOffers: Carousel[] = [
  {
    id: 1,
    image: require('../assets/images/Sarova-Imperial-Valentines.jpg'),
    title: 'Sarova Valentines',
    titleDesc: 'A Love Brewed by the Victoria Lakeshore',
    defaultRoute: 'Home',
    time: 'Sarova Imperial 5th February 2024',
    typeDesc:  `Cozy up in a private lovers’ nest and enjoy a delectable 6-course dinner with a bottle of red wine or non-alcoholic bubbly and
    a soothing serenade by our saxophonist. Lavish buffet dinner for families, friends and love birds with a welcome glass of wine or non-alcoholic bubbly.`
  },
  {
    id: 2,
    image: require('../assets/images/Sarova-Maiyan-Valentines.jpg'),
    title: 'Maiyan Valentines',
    titleDesc: 'The "Emeloni" experience',
    defaultRoute: 'Home',
    time: 'Sarova Maiyan 14th February 2024',
    typeDesc: `This Valentine’s weekend & every weekend in February, celebrate your love with an unforgettable rendezvous amidst the ethereal beauty of our luxury resort. Valentine’s day lunch or dinner with a bottle of wine & set menu`
  },
  {
    id: 3,
    image: require('../assets/images/Sarova-Stanley-Romance-in-the-city.jpg'),
    title: 'Romance in the city',
    titleDesc: 'Romantic Night',
    defaultRoute: 'Home',
    time: 'Sarova Stanley 14th February 2024',
    typeDesc: ` A decadent evening with sweet surprises unfolding at every moment. An Unforgettable 5-course menu. 10% OFF on rum of choice by the bottle KES 15,000 Per Couple Entertainment – Jazz & Soul Band A Sumptuous 4-course menu. 10% OFF on rum of choice by the bottle KES 6,500 Per Person. Valet parking readily available`
  },
  {
    id: 4,
    image: require('../assets/images/Sarova-Woodlands-Valentines-Day.jpg'),
    title: 'Woodlands Valentines Day',
    titleDesc: 'Flames of Love',
    defaultRoute: 'Home',
    time: 'Sarova Woodlands 14th February 2024',
    typeDesc: `Flames of Love Surrender to romance with a premium experience under a star-lit sky. Cinnamon Restaurant & Courtyard Sample delicious cuisine from our extensive buffet with interactive live cooking. Welcome glass of wine Entertainment by: NEXAL MUSIC KES 10,000 Per Couple. The Pool Side A 6-course menu with each course showcasing passion in every bite. Jazzy Vibes by:DENNIS THE SAXOPHONIST KES 22,000 Per Couple 14% OFF on Accommodation`
  },
  {
    id: 5,
    image: require('../assets/images/Shaba-Savannah-Love-Affair.jpg'),
    title: 'Savannah Love Affair',
    titleDesc: 'A savannah of Love Affair',
    defaultRoute: 'Home',
    time: 'Sarova Savannah 14th February 2024',
    typeDesc: ` An unparalleled escape exclusively for you and your soulmate. Special dinner for 2 by the poolside at KES 3,000 Per Person supplement rate. Enjoy 10% OFF on wine and 15% OFF on champagne by the bottle. Stay the night & enjoy 14% OFF`
  },
  {
    id: 6,
    image: require('../assets/images/Thai-Chi-Love-Affair.jpg'),
    title: 'Thai Chi Love Affair',
    titleDesc: 'Its a Thai Love Affair',
    defaultRoute: 'Home',
    time: 'Thai Chi Sarova 14th February 2024',
    typeDesc: `It’s a Love Affair An exquisite 6-course dinner experience featuring Thai & Pan Asian flavors in an intimate & enchanting setting. Our offer includes: Bottomless prosecco | A bottle of still or sparkling water | Live serenade KES 20,000 Per Couple`
  }
];

export const carouselData2: Carousel[] = [
  {
    id: 1,
    image: require('../assets/images/sarova_dinner.jpeg'),
    title: 'Thorn Tree Cafe'
  },
  {
    id: 2,
    image: require('../assets/images/restaurant2.png'),
    title: 'Thai Chi Restaurant'
  },
  {
    id: 3,
    image: require('../assets/images/sarova_dinner.jpeg'),
    title: 'Exchange Restaurant'
  },
  {
    id: 4,
    image: require('../assets/images/restaurant2.png'),
    title: 'Thorn Tree Cafe'
  },
  {
    id: 5,
    image: require('../assets/images/sarova_dinner.jpeg'),
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
  desc?: string | undefined;
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
    price: 'From per night',
    name: 'Sarova Stanley Nairobi',
    spa: 'Tulia Spa | The Stanley',
    image: require('../assets/images/Sarova_Stanley_Exterior_1.webp'),
    points: 'Earn up to 2,500 points',
    desc: `Sarova Stanley Nairobi Guest rooms at Sarova Stanley offer a blend of Victorian elegance and comfort, combined with all the practical executive amenities of the Lorem ipsum test lorem ipsum text lorem ipsum text`
  },
  {
    id: 2,
    price: 'From per night',
    name: 'Sarova Panafric Nairobi',
    spa: 'Health Club | The Stanley',
    image: require('../assets/images/Sarova_Panafric_exterior_1.webp'),
    points: 'Earn up to 2,500 points',
    desc: `Sarova Panafric Nairobi Guest rooms at Sarova Stanley offer a blend of Victorian elegance and comfort, combined with all the practical executive amenities of the Lorem ipsum test lorem ipsum text lorem ipsum text`
  },
  {
    id: 3,
    price: 'From per night',
    name: 'Sarova Woodlands Hotel',
    spa: 'Tulia Spa | Sarova Woodlands',
    image: require('../assets/images/Sarova_Woodlands_Exterior_5.webp'),
    points: 'Earn up to 2,500 points',
    desc: `Sarova Woodlands Hotel Guest rooms at Sarova Stanley offer a blend of Victorian elegance and comfort, combined with all the practical executive amenities of the Lorem ipsum test lorem ipsum text lorem ipsum text`
  },
  {
    id: 4,
    price: 'From per night',
    name: 'Sarova Whitesands Beach Resort',
    spa: 'Tulia Spa | Sarova Whitesands',
    image: require('../assets/images/Sarova_Whitesands_Exteriors_11.webp'),
    points: 'Earn up to 2,500 points',
    desc: `Sarova Whitesands Beach Resort Guest rooms at Sarova Stanley offer a blend of Victorian elegance and comfort, combined with all the practical executive amenities of the Lorem ipsum test lorem ipsum text lorem ipsum text`
  },
  {
    id: 5,
    price: 'From per night',
    name: 'Sarova Lion Hill Game Lodge',
    spa: 'Tulia Spa | Sarova Lion Hill Game Lodge',
    image: require('../assets/images/Sarova_Lion_Hill_Exteriors_11.webp'),
    points: 'Earn up to 2,500 points',
    desc: `Sarova Lion Hill Beach Resort Guest rooms at Sarova Stanley offer a blend of Victorian elegance and comfort, combined with all the practical executive amenities of the Lorem ipsum test lorem ipsum text lorem ipsum text`

  },
  {
    id: 6,
    price: 'From per night',
    name: 'Sarova Mara Game Camp',
    spa: 'Tulia Spa | Sarova Mara Game Camp',
    image: require('../assets/images/Sarova_Mara_Game_Camp_Lobby.webp'),
    points: 'Earn up to 2,500 points',
    desc: `Sarova Mara Game Camp Guest rooms at Sarova Stanley offer a blend of Victorian elegance and comfort, combined with all the practical executive amenities of the Lorem ipsum test lorem ipsum text lorem ipsum text`
  },
  {
    id: 7,
    price: 'From per night',
    name: 'Sarova Shaba Game Lodge',
    spa: 'Tulia Spa | Sarova Shaba',
    image: require('../assets/images/Sarova_Shaba_Game_Lodge_Exterior_10.webp'),
    points: 'Earn up to 2,500 points',
    desc: `Sarova Shaba Game Lodge Guest rooms at Sarova Stanley offer a blend of Victorian elegance and comfort, combined with all the practical executive amenities of the Lorem ipsum test lorem ipsum text lorem ipsum text`
  },
  {
    id: 8,
    price: 'From per night',
    name: 'Sarova Imperial, Kisumu',
    spa: 'Tulia Spa | Sarova Imperial',
    image: require('../assets/images/Sarova_Imperial_Exteriors_4.webp'),
    points: 'Earn up to 2,500 points',
    desc: `Sarova Imperial Guest rooms at Sarova Stanley offer a blend of Victorian elegance and comfort, combined with all the practical executive amenities of the Lorem ipsum test lorem ipsum text lorem ipsum text`
  },
]

export const CarouselImageData: ImageProps[] = [
  require('../assets/images/Sarova-Stanley-Thorn-Tree-Cafe-3.jpeg'),
  require('../assets/images/Thorn-Cafe-2.jpeg'),
  require('../assets/images/Thorn-Tree-Cafe-10.jpeg'),
  require('../assets/images/Sarova-Stanley-Thorn-Tree-Cafe-5.jpeg'),
]

export const CarouselImageData2: ImageProps[] = [
  require('../assets/images/Sarova_Stanley_The_Exchange_bar_6.webp'),
  require('../assets/images/Sarova-Stanley-The-Exchange-bar-3.jpeg'),
  require('../assets/images/Exchange-bar-7.jpeg'),
  require('../assets/images/Exchange-bar-10.jpeg'),
  require('../assets/images/Exchange-bar-13.jpeg'),
]

export const CarouselImageData3: ImageProps[] = [
  require('../assets/images/Sarova_Stanley_Thai_Chi_restaurant_7.webp'),
  require('../assets/images/Thai-Chi-restaurant-8.jpeg'),
  require('../assets/images/Thai-Chi-restaurant-6.jpeg'),
  require('../assets/images/Thai-Chi-restaurant-3.jpeg'),
  require('../assets/images/Thai-Chi-restaurant-23.jpeg'),
]

export const CarouselImageData4: ImageProps[] = [
  require('../assets/images/Sarova_Stanley_Pool_Deck_Restaurant_4.webp'),
  require('../assets/images/Pool-Deck-Restaurant-1.jpeg'),
  require('../assets/images/Pool-Deck-Restaurant-3.jpeg'),
]

export const CarouselImageData5: ImageProps[] = [
  require('../assets/images/Sarova-Stanley-In-Room-dining.jpeg'),
]

export const CarouselImageData6: ImageProps[] = [
  require('../assets/images/Food-2.jpeg'),
  require('../assets/images/Food-4.jpeg'),
  require('../assets/images/Food-6.jpeg'),
  require('../assets/images/Food-7.jpeg'),
  require('../assets/images/Food-8.jpeg'),
  require('../assets/images/Drinks-5.jpeg'),
  require('../assets/images/Drinks-6.jpeg'),
  require('../assets/images/Drinks-7.jpeg'),
  require('../assets/images/Drinks-8.jpeg'),
]

export const CarouselImageData7: ImageProps[] = [
  require('../assets/images/Flame-Tree-Bar.jpeg'),
]

export const CarouselImageData8: ImageProps[] = [
  require('../assets/images/PoolDeckdining10.jpeg'),
]

export const CarouselImageData9: ImageProps[] = [
  require('../assets/images/Deck-Pool-Lounge-Bar-3.jpeg'),
  require('../assets/images/Deck-Pool-Lounge-Bar-1.jpeg'),
  require('../assets/images//Deck-Pool-Lounge-Bar-4.jpeg'),
]

export const CarouselImageData10: ImageProps[] = [
  require('../assets/images/Deck-Cocktail-3.jpeg'),
  require('../assets/images/Deck-Cocktail-2.jpeg'),
  require('../assets/images/Deck-Cocktail-01.jpeg'),
]

export const CarouselImageData11: ImageProps[] = [
  require('../assets/images/Cinnamon-Restaurant-15.jpeg'),
  require('../assets/images/Cinnamon-Restaurant-10.jpeg'),
  require('../assets/images/Cinnamon-Restaurant-12.jpeg'),
  require('../assets/images/Cinnamon-Restaurant-17.jpeg'),
]

export const CarouselImageData12: ImageProps[] = [
  require('../assets/images/Leather-Bar14.jpeg'),
  require('../assets/images/Leather-Bar17.jpeg'),
  require('../assets/images/Leather-Bar24.jpeg'),
  require('../assets/images/Leather-Bar25.jpeg'),
  require('../assets/images/Leather-Bar35.jpeg'),
]

export const CarouselImageData13: ImageProps[] = [
  require('../assets/images/Romantic-dining-3.jpeg'),
]

export const CarouselImageData14: ImageProps[] = [
  require('../assets/images/WD-1.jpeg'),
  require('../assets/images/WD-4.jpeg'),
]

export const CarouselImageData15: ImageProps[] = [
  require('../assets/images/WOODLANDS-BRUNCH-52.jpeg'),
  require('../assets/images/WOODLANDS-BRUNCH-55.jpeg'),
  require('../assets/images/WOODLANDS-BRUNCH-45.jpeg'),
  require('../assets/images/WOODLANDS-BRUNCH-47.jpeg'),
]

export const CarouselImageData16: ImageProps[] = [
  require('../assets/images/WS-5.jpeg'),
  require('../assets/images/WS-6.jpeg'),
  require('../assets/images/WS-13.jpeg'),
  require('../assets/images/WS-4.jpeg'),
]

export const CarouselImageData17: ImageProps[] = [
  require('../assets/images/MN-2.jpeg'),
  require('../assets/images/MN-1.jpeg'),
  require('../assets/images/MN-11.jpeg'),
  require('../assets/images/MN-3.jpeg'),
]

export const CarouselImageData18: ImageProps[] = [
  require('../assets/images/LS-6.jpeg'),
  require('../assets/images/LS-3.jpeg'),
  require('../assets/images/LC-1.jpeg'),
  require('../assets/images/WOODLANDS-BRUNCH-47.jpeg'),
]

export const CarouselImageData19: ImageProps[] = [
  require('../assets/images/CBB-3.jpeg'),
  require('../assets/images/CBB-4.jpeg'),
  require('../assets/images/CBB-6.jpeg'),
  require('../assets/images/CBB-5.jpeg'),
]

export const CarouselImageData20: ImageProps[] = [
  require('../assets/images/pb-22.jpeg'),
  require('../assets/images/PB-33.jpeg'),
  require('../assets/images/PB-11.jpeg'),
  require('../assets/images/PB-66.jpeg'),
]

export const CarouselImageData21: ImageProps[] = [
  require('../assets/images/SWB-6.jpeg'),
  require('../assets/images/SWB-8.jpeg'),
  require('../assets/images/PS-1.jpeg'),
  require('../assets/images/PS-2.jpeg'),
]

export const CarouselImageData22: ImageProps[] = [
  require('../assets/images/FR-4.jpeg'),
  require('../assets/images/FR-10.jpeg'),
  require('../assets/images/FR-14.jpeg'),
  require('../assets/images/FR-17.jpeg'),
]

export const CarouselImageData23: ImageProps[] = [
  require('../assets/images/PD-12.jpeg'),
  require('../assets/images/PD-16.jpeg'),
  require('../assets/images/PD-21.jpeg'),
  require('../assets/images/PD-22.jpeg'),
]

export const CarouselImageData24: ImageProps[] = [
  require('../assets/images/SWB-6.jpeg'),
  require('../assets/images/SWB-8.jpeg'),
]

export const CarouselImageData25: ImageProps[] = [
  require('../assets/images/PG-16.jpeg'),
  require('../assets/images/PG-9.jpeg'),
]

export const CarouselImageData26: ImageProps[] = [
  require('../assets/images/LH-3.jpeg'),
  require('../assets/images/LH-2.jpeg'),
]

export const CarouselImageData27: ImageProps[] = [
  require('../assets/images/Sundowner-10.jpeg'),
  require('../assets/images/Sundowner-5.jpeg'),
  require('../assets/images/Sundowner-11.jpeg'),
]

export const CarouselImageData28: ImageProps[] = [
  require('../assets/images/PDD-77.jpeg'),
  require('../assets/images/PDD-99.jpeg'),
  require('../assets/images/PDD-12.jpeg'),
  require('../assets/images/PDD-13.jpeg'),
]

export const CarouselImageData29: ImageProps[] = [
  require('../assets/images/IR-2.jpeg'),
  require('../assets/images/IR-3.jpeg'),
  require('../assets/images/IR-5.jpeg'),
  require('../assets/images/IR-6.jpeg'),
]

export const CarouselImageData30: ImageProps[] = [
  require('../assets/images/OB-1.jpeg'),
  require('../assets/images/OB-3.jpeg'),
  require('../assets/images/OB-4.jpeg'),
  require('../assets/images/OB-2.jpeg'),
]

export const CarouselImageData31: ImageProps[] = [
  require('../assets/images/SBBB-1.jpeg'),
  require('../assets/images/SLD-1.jpeg'),
  require('../assets/images/SLD-2.jpeg'),
]

export const CarouselImageData32: ImageProps[] = [
  require('../assets/images/SSR-2.jpeg'),
  require('../assets/images/SSR-5.jpeg'),
  require('../assets/images/SSR-10.jpeg'),
]

export const CarouselImageData33: ImageProps[] = [
  require('../assets/images/SGL-14.jpeg'),
  require('../assets/images/SGL-24.jpeg'),
  require('../assets/images/SGL-23.jpeg'),
]

export const CarouselImageData34: ImageProps[] = [
  require('../assets/images/LBD-6.jpeg'),
  require('../assets/images/LBD-7.jpeg'),
]

export const CarouselImageData35: ImageProps[] = [
  require('../assets/images/SRD-6.jpeg'),
  require('../assets/images/SRD-4.jpeg'),
  require('../assets/images/SRD-11.jpg'),
]

export const CarouselImageData36: ImageProps[] = [
  require('../assets/images/SSS-8.jpeg'),
  require('../assets/images/SSS-7.jpeg'),
  require('../assets/images/SSS-6.jpeg'),
]

export const CarouselImageData37: ImageProps[] = [
  require('../assets/images/LS0-1.jpeg'),
  require('../assets/images/LS0-4.jpeg'),
]

export const CarouselImageData38: ImageProps[] = [
  require('../assets/images/PDL-11.jpeg'),
  require('../assets/images/PDL-66.jpeg'),
  require('../assets/images/PDL-88.jpeg'),
]

export const CarouselImageData39: ImageProps[] = [
  require('../assets/images/CCB-3.jpeg'),
  require('../assets/images/CCB-1.jpeg'),
]

export const CarouselImageData40: ImageProps[] = [
  require('../assets/images/CY-1.jpeg'),
  require('../assets/images/CY-2.jpeg'),
  require('../assets/images/CY-5.jpeg'),
]

export const CarouselImageData41: ImageProps[] = [
  require('../assets/images/CFS-3.jpeg'),
  require('../assets/images/CFS-4.jpeg'),
  require('../assets/images/CFS-6.jpeg'),
]

export const CarouselImageData42: ImageProps[] = [
  require('../assets/images/PRB-1.jpeg'),
  require('../assets/images/PRB-2.jpeg'),
  require('../assets/images/PRB-3.jpeg'),
]

export const PanafricCarouselImageData: ImageProps[] = [
  require('../assets/images/Baraza-conference-room.jpeg'),
  require('../assets/images/Eva-Rooms-wing.jpeg'),
  require('../assets/images/The-Deck-Pool-Lounge-Bar-4.jpeg'),
  require('../assets/images/Sarova-Panafric-Swimming-Pool-2.jpeg'),
  require('../assets/images/Pool-Deck-restaurant-2.jpeg'),
]

export const WhitesandsCarouselImageData: ImageProps[] = [
  require('../assets/images/Sarova-Whitesands-Lobby-4.jpeg'),
  require('../assets/images/Sarova-Whitesands-Lobby-7.jpeg'),
  require('../assets/images/Sarova-Whitesands-Fun-Stay-14.jpeg'),
  require('../assets/images/Sarova-Whitesands-Pool-13.jpeg'),
  require('../assets/images/Sarova-Whitesands-Pool-14.jpeg'),
  require('../assets/images/Sarova-Whitesands-Pool-18.jpeg'),
]

export const WoodlandsCarouselImageData: ImageProps[] = [
  require('../assets/images/Sarova-Woodlands-Cinnamon-Restaurant.jpeg'),
  require('../assets/images/SAROVA-WOODLANDS-BRUNCH-47.jpeg'),
  require('../assets/images/Sarova-Woodlands-Romantic-dining.jpeg'),
  require('../assets/images/Leather-Bar35.jpeg'),
  require('../assets/images/Birthday-Lunch-1.jpeg'),
  require('../assets/images/Sarova-Woodlands-Romantic-dining.jpeg'),
]

export const SarovaHillCarouselImageData: ImageProps[] = [
  require('../assets/images/SarovaLionHillGameLodgeFlamingo-Restaurant-5.jpeg'),
  require('../assets/images/SarovaLionHillGameLodgeFlamingoRestaurant.jpeg'),
  require('../assets/images/SarovaLionHillPrivateGardendining4.jpeg'),
  require('../assets/images/PoolDeckdining2.jpeg'),
  require('../assets/images/PoolDeckdining9.jpeg'),
  require('../assets/images//PoolDeckdining10.jpeg'),
]

export const SarovaMaraCarouselImageData: ImageProps[] = [
  require('../assets/images/SarovaMaraGameCampIsokonrestaurant1.jpeg'),
  require('../assets/images/SarovaMaraGameCampIsokonrestaurant2.jpeg'),
  require('../assets/images/SarovaMaraGameCampIsokonrestaurant4.jpeg'),
  require('../assets/images/SarovaMaraGameCampIsokonRestaurant7.jpeg'),
  require('../assets/images/SarovaMaraBomadining3.jpeg'),
  require('../assets/images/SarovaMaraGameCampIsokonrestaurant6.jpeg'),
]


export const SarovaShabaCarouselImageData: ImageProps[] = [
  require('../assets/images/SarovaShabaGameLodgeExterior12.jpeg'),
  require('../assets/images/SarovaShabaGameLodgeExterior8.jpeg'),
  require('../assets/images/SarovaShabaScenicviews26.jpeg'),
  require('../assets/images/SarovaShabaGameLodgeSwimmingPool4.jpeg'),
  require('../assets/images/SarovaShabaGameLodgeSwimmingPool5.jpeg'),
  require('../assets/images/SarovaShabaGameLodgeChemichemibar1.jpeg'),
]


export const SarovaImperialCarouselImageData: ImageProps[] = [
  require('../assets/images/SarovaImperialLobby3.jpeg'),
  require('../assets/images/SarovaImperialCourtyard3.jpeg'),
  require('../assets/images/ThePalmsCoffeeshop6.jpeg'),
  require('../assets/images/SarovaImperialThePerchRooftoparLounge5.jpeg'),
  require('../assets/images/SarovaImperialVIPLounge5.jpeg'),
  require('../assets/images/SarovaImperial_Meetingroom1.jpeg'),
]

export const roomsData:RoomCard[] =[
   {
    id: 1,
    title: 'Stanley Themed Suites',
    desc: 'Sarova Stanley Suites offer the most distinctive experience. Sarova Stanley Suites offer the most distinctive experience',
    price: 'From per night',
    image: require('../assets/images/Sarova_Stanley_Lamu_Suite_1.webp'),
   },
   {
    id: 2,
    title: 'Stanley Club Rooms',
    desc: 'Club rooms offer a very comfortable stay featuring.Club rooms offer a very comfortable stay featuring.',
    price: 'From per night',
    image: require('../assets/images/Sarova_Stanley_Twin_Club_Room_2.webp'),
  },
  {
    id: 3,
    title: 'Stanley Deluxe Rooms',
    desc: 'Deluxe rooms offer a very comfortable stay featuring.Club rooms offer a very comfortable stay featuring.',
    price: 'From per night',
    image: require('../assets/images/Sarova_Stanley_Karen_Blixen_Suite_2.webp'),
  },
  {
    id: 4,
    title: 'Rooms',
    desc: 'Rooms offer a very comfortable stay featuring.Club rooms offer a very comfortable stay featuring.',
    price: 'From per night',
    image: require('../assets/images/Sarova_Stanley_Room_13.webp'),
 },
]

export const roomsData2:RoomCard[] =[
  {
   id: 1,
   title: 'Room',
   desc: 'Room offer the most distinctive experience. Sarova Stanley Suites offer the most distinctive experience',
   price: 'From per night',
   image: require('../assets/images/SarorovaPanafricRoom1.jpeg'),
  },
  {
    id: 2,
    title: 'Deluxe Rooms',
    desc: 'Deluxe rooms offer a very comfortable stay featuring.Club rooms offer a very comfortable stay featuring.',
    price: 'From per night',
    image: require('../assets/images/PanafricDeluxeRoom_1.jpeg'),
  },
  {
   id: 3,
   title: 'Executive Rooms',
   desc: 'Executive rooms offer a very comfortable stay featuring.Club rooms offer a very comfortable stay featuring.',
   price: 'From per night',
   image: require('../assets/images/SarovaPanafricExecutiveRoom1.jpeg'),
 },
 {
   id: 4,
   title: 'Premier Executive Rooms',
   desc: 'Premier Executive Rooms offer a very comfortable stay featuring.Club rooms offer a very comfortable stay featuring.',
   price: 'From per night',
   image: require('../assets/images/SarovaPanafricPremierExecutive1.jpeg'),
  },
  {
    id: 5,
    title: 'Signature Suites',
    desc: 'Signature Suites Rooms offer a very comfortable stay featuring.Club rooms offer a very comfortable stay featuring.',
    price: 'From per night',
    image: require('../assets/images/SarovaPanafricSignatureSuite_1.jpeg'),
  },
  {
    id: 6,
    title: 'Studio Suites',
    desc: 'Studio Suites Rooms offer a very comfortable stay featuring.Club rooms offer a very comfortable stay featuring.',
    price: 'From per night',
    image: require('../assets/images/SarovaPanafricSignatureSuite_2.jpeg'),
  },
  {
    id: 7,
    title: 'Mwalimu Suites',
    desc: 'Mwalimu Suites Rooms offer a very comfortable stay featuring.Club rooms offer a very comfortable stay featuring.',
    price: 'From per night',
    image: require('../assets/images/SarovaPanafricMwalimuSuite2.jpeg'),
  },
]

export const roomsData3:RoomCard[] =[
  {
   id: 1,
   title: 'Woodlands Rooms',
   desc: 'Woodlands Rooms offer the most distinctive experience. Sarova Stanley Suites offer the most distinctive experience',
   price: 'From per night',
   image: require('../assets/images/SarovaWoodlandsWoodlandsroom1.jpeg'),
  },
  {
    id: 2,
    title: 'Woodlands Studio Suite',
    desc: 'Studio Suite rooms offer a very comfortable stay featuring.Club rooms offer a very comfortable stay featuring.',
    price: 'From per night',
    image: require('../assets/images/WoodlandsStudioSuite3.jpeg'),
  },
  {
   id: 3,
   title: 'Executive Suite',
   desc: 'Executive Suite rooms offer a very comfortable stay featuring.Club rooms offer a very comfortable stay featuring.',
   price: 'From per night',
   image: require('../assets/images/WoodlandsExecutiveSuite19.jpeg'),
 },
 {
   id: 4,
   title: 'State Suite',
   desc: 'Premier Executive Rooms offer a very comfortable stay featuring.Club rooms offer a very comfortable stay featuring.',
   price: 'From per night',
   image: require('../assets/images/SarovaWoodlandsStatesuite30.jpeg'),
  },
]

export const roomsData4:RoomCard[] = [
  {
   id: 1,
   title: 'Garden Facing',
   desc: 'Garden Facing Rooms offer the most distinctive experience. Sarova Stanley Suites offer the most distinctive experience',
   price: 'From per night',
   image: require('../assets/images/SarovaWhitesandsGardenfacing1.jpeg'),
  },
  {
    id: 2,
    title: 'Pool Facing',
    desc: 'Pool Facing rooms offer a very comfortable stay featuring.Club rooms offer a very comfortable stay featuring.',
    price: 'From per night',
    image: require('../assets/images/SarovaWhitesandsPalmroom4.jpeg'),
  },
  {
   id: 3,
   title: 'Sea Facing',
   desc: 'Sea Facing rooms offer a very comfortable stay featuring.Club rooms offer a very comfortable stay featuring.',
   price: 'From per night',
   image: require('../assets/images/SarovaWhitesandsSeaFacingroom2.jpeg'),
 },
 {
   id: 4,
   title: 'Sea Facing Rooms',
   desc: 'Premier Sea Facing - Family Rooms offer a very comfortable stay featuring.Club rooms offer a very comfortable stay featuring.',
   price: 'From per night',
   image: require('../assets/images/SarovaWhitesandsPremierSeaFacingRoom14.jpeg'),
  },
  {
  id: 5,
  title: 'Sea Facing Family Rooms',
  desc: 'Premier Sea Facing - Family Rooms offer a very comfortable stay featuring.Club rooms offer a very comfortable stay featuring.',
  price: 'From per night',
  image: require('../assets/images/SarovaWhitesandsPremierSeaFacingFamilyRoom1.jpeg'),
  },
  {
  id: 6,
  title: 'Studio Suite',
  desc: 'Studio Suite offer a very comfortable stay featuring.Club rooms offer a very comfortable stay featuring.',
  price: 'From per night',
  image: require('../assets/images/SarovaWhitesandsStudiosuite7.jpeg'),
  },
  {
    id: 7,
    title: 'One Bedroom Suite',
    desc: 'One Bedroom Suite Rooms offer a very comfortable stay featuring.Club rooms offer a very comfortable stay featuring.',
    price: 'From per night',
    image: require('../assets/images/SarovaWhitesandsExecutivesuite1.jpeg'),
  },
  {
    id: 8,
    title: 'Presidential Suite',
    desc: 'Presidential Suite Rooms offer a very comfortable stay featuring.Club rooms offer a very comfortable stay featuring.',
    price: 'From per night',
    image: require('../assets/images/SarovaWhitesandsPresidentialSuite4.jpeg'),
  },
]

export const roomsData5:RoomCard[] = [
  {
   id: 1,
   title: 'Standard',
   desc: 'Standard Rooms offer the most distinctive experience. Sarova Stanley Suites offer the most distinctive experience',
   price: 'From per night',
   image: require('../assets/images/SarovaLionHill Standardroom2.jpeg'),
  },
  {
    id: 2,
    title: 'Ziwa Suite',
    desc: 'Ziwa Suite rooms offer a very comfortable stay featuring.Club rooms offer a very comfortable stay featuring.',
    price: 'From per night',
    image: require('../assets/images/SarovaLionHillGameLodgeZiwaSuite11.jpeg'),
  },
  {
   id: 3,
   title: 'Faru Suite',
   desc: 'Faru Suite rooms offer a very comfortable stay featuring.Club rooms offer a very comfortable stay featuring.',
   price: 'From per night',
   image: require('../assets/images/SarovaLionHillGameLodgeFaruSuite15.jpeg'),
 },
]

export const roomsData6:RoomCard[] = [
  {
   id: 1,
   title: 'Mara Deluxe Tents',
   desc: 'Mara Deluxe Tents offer the most distinctive experience. Sarova Stanley Suites offer the most distinctive experience',
   price: 'From per night',
   image: require('../assets/images/SarovaMaraGameCampDeluxeTent1.jpeg'),
  },
  {
    id: 2,
    title: 'Mara Club Tents',
    desc: 'Mara Club Tents offer a very comfortable stay featuring.Club rooms offer a very comfortable stay featuring.',
    price: 'From per night',
    image: require('../assets/images/SarovaMaraGameCampClubTent3.jpeg'),
  },
  {
   id: 3,
   title: 'Mara Family Tents',
   desc: 'Mara Family Tents offer a very comfortable stay featuring.Club rooms offer a very comfortable stay featuring.',
   price: 'From per night',
   image: require('../assets/images/SarovaMaraGameCampFamilyTent1.jpeg'),
 },
]

export const roomsData7:RoomCard[] = [
  {
   id: 1,
   title: 'Standard room',
   desc: 'Standard room offer the most distinctive experience. Sarova Stanley Suites offer the most distinctive experience',
   price: 'From per night',
   image: require('../assets/images/SarovaShabaStandardroom4.jpeg'),
  },
  {
    id: 2,
    title: 'Born Free Suite',
    desc: 'Born Free Suite offer a very comfortable stay featuring.Club rooms offer a very comfortable stay featuring.',
    price: 'From per night',
    image: require('../assets/images/SarovaShabaBornFreeSuite3.jpeg'),
  },
]

export const roomsData8:RoomCard[] = [
  {
   id: 1,
   title: 'Deluxe Room',
   desc: 'Deluxe Room offer the most distinctive experience. Sarova Stanley Suites offer the most distinctive experience',
   price: 'From per night',
   image: require('../assets/images/SarovaImperialDeluxeRoom1.jpeg'),
  },
  {
    id: 2,
    title: 'Deluxe Twin Room',
    desc: 'Deluxe Twin Room offer a very comfortable stay featuring.Club rooms offer a very comfortable stay featuring.',
    price: 'From per night',
    image: require('../assets/images/SarovaImperialDeluxeTwinRoom1.jpeg'),
  },
  {
   id: 3,
   title: 'Deluxe View Room',
   desc: 'Deluxe View Room offer a very comfortable stay featuring.Club rooms offer a very comfortable stay featuring.',
   price: 'From per night',
   image: require('../assets/images/SarovaImperialDeluxeRoom22.jpeg'),
 },
 {
  id: 4,
  title: 'Differently-abled Room',
  desc: 'Differently-abled Room offer a very comfortable stay featuring.Club rooms offer a very comfortable stay featuring.',
  price: 'From per night',
  image: require('../assets/images/SarovaImperialDifferently_abledRoom5.jpeg'),
},
{
  id: 5,
  title: 'Premium Suite',
  desc: 'Premium Suite offer a very comfortable stay featuring.Club rooms offer a very comfortable stay featuring.',
  price: 'From per night',
  image: require('../assets/images/SarovaImperialPremiumSuite1.jpeg'),
},
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
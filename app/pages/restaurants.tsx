import React, { useMemo } from 'react'
import { Platform, Text, View } from "react-native";
import Carousel from "../../components/Carousel";
import colors from "../../styles/theme";
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CarouselImageData, CarouselImageData10, CarouselImageData11, CarouselImageData12, CarouselImageData13, CarouselImageData14, CarouselImageData15, CarouselImageData16, CarouselImageData17, CarouselImageData18, CarouselImageData19, CarouselImageData2, CarouselImageData20, CarouselImageData21, CarouselImageData22, CarouselImageData23, CarouselImageData24, CarouselImageData25, CarouselImageData26, CarouselImageData27, CarouselImageData28, CarouselImageData29, CarouselImageData3, CarouselImageData30, CarouselImageData31, CarouselImageData32, CarouselImageData33, CarouselImageData34, CarouselImageData35, CarouselImageData36, CarouselImageData37, CarouselImageData38, CarouselImageData39, CarouselImageData4, CarouselImageData40, CarouselImageData41, CarouselImageData42, CarouselImageData5, CarouselImageData6, CarouselImageData7, CarouselImageData8, CarouselImageData9 } from '../../constants/content';

export default function RestaurantTab() {
  interface HotelRestaurant {
    id: number;
    image: string;
    title: string;
    desc: string;
  }
  const sarovaStanley: any = [
    {
      id: 1,
      image: require('../../assets/images/Sarova-Stanley-Thorn-Tree-Cafe-3.jpeg'),
      title: 'Thorn Tree Cafe',
      data: CarouselImageData
    },
    {
      id: 2,
      image: require('../../assets/images/Sarova_Stanley_Thai_Chi_restaurant_7.webp'),
      title: 'Thai Chi Restaurant',
      data: CarouselImageData3   
    },
    {
      id: 3,
      image: require('../../assets/images/Sarova_Stanley_Pool_Deck_Restaurant_4.webp'),
      title: 'Pool Deck Restaurant',
      data: CarouselImageData4   
    },
    {
      id: 4,
      image: require('../../assets/images/Sarova_Stanley_The_Exchange_bar_6.webp'),
      title: 'The Exchange Bar',
      data: CarouselImageData2
    },
    {
      id: 5,
      image: require('../../assets/images/Sarova-Stanley-In-Room-dining.jpeg'),
      title: 'In Room Dining',
      data: CarouselImageData5   
    },
    {
      id: 6,
      image: require('../../assets/images/Food-6.jpeg'),
      title: 'Food & Beverage',
      data: CarouselImageData6  
    },
  ]

  const sarovaPanafric: any = [
    {
      id: 1,
      image: require('../../assets/images/Flame-Tree-Bar.jpeg'),
      title: 'Flame Tree Bar',
      data: CarouselImageData7
    },
    {
      id: 2,
      image: require('../../assets/images/PoolDeckdining10.jpeg'),
      title: 'Pool Deck Restaurant',
      data: CarouselImageData8   
    },
    {
      id: 3,
      image: require('../../assets/images/Deck-Pool-Lounge-Bar-3.jpeg'),
      title: 'The Deck Cocktail',
      data: CarouselImageData9   
    },
    {
      id: 4,
      image: require('../../assets/images/Deck-Cocktail-3.jpeg'),
      title: 'Deck Pool & Lounger Bar',
      data: CarouselImageData10
    },
  ]

  const sarovaWoodlands: any = [
    {
      id: 1,
      image: require('../../assets/images/Cinnamon-Restaurant-15.jpeg'),
      title: 'Cinamon Restaurant',
      data: CarouselImageData11
    },
    {
      id: 2,
      image: require('../../assets/images/Leather-Bar14.jpeg'),
      title: 'Leather Bar',
      data: CarouselImageData12 
    },
    {
      id: 3,
      image: require('../../assets/images/Romantic-dining-3.jpeg'),
      title: 'Experiential dining',
      data: CarouselImageData13  
    },
    {
      id: 4,
      image: require('../../assets/images/WD-1.jpeg'),
      title: 'Woodlands Cafe',
      data: CarouselImageData14
    },
    {
      id: 5,
      image: require('../../assets/images/WOODLANDS-BRUNCH-55.jpeg'),
      title: 'Brunch',
      data: CarouselImageData15
    },
  ]

  const sarovaWhitesands: any = [
    {
      id: 1,
      image: require('../../assets/images/WS-6.jpeg'),
      title: 'Pavillions Restaurant',
      data: CarouselImageData16
    },
    {
      id: 2,
      image: require('../../assets/images/MN-2.jpeg'),
      title: ' Minazi Cafe',
      data: CarouselImageData17 
    },
    {
      id: 3,
      image: require('../../assets/images/IC-1.jpeg'),
      title: 'Lido Lounge',
      data: CarouselImageData18  
    },
    {
      id: 4,
      image: require('../../assets/images/CBB-1.jpeg'),
      title: 'Cocos bar ',
      data: CarouselImageData19
    },
    {
      id: 5,
      image: require('../../assets/images/PB-55.jpeg'),
      title: 'Pool bar',
      data: CarouselImageData20
    },
    {
      id: 6,
      image: require('../../assets/images/SBB-1.jpeg'),
      title: 'Experiential dining',
      data: CarouselImageData21
    },
  ]

  const sarovaLionHill: any = [
    {
      id: 1,
      image: require('../../assets/images/FR-2.jpeg'),
      title: 'Flamingo Restaurant',
      data: CarouselImageData22
    },
    {
      id: 2,
      image: require('../../assets/images/PD-11.jpeg'),
      title: 'Private dining',
      data: CarouselImageData23 
    },
    {
      id: 3,
      image: require('../../assets/images/SWB-6.jpeg'),
      title: 'Private Garden',
      data: CarouselImageData24  
    },
    {
      id: 4,
      image: require('../../assets/images/PG-9.jpeg'),
      title: 'Organic Garden',
      data: CarouselImageData25
    },
    {
      id: 5,
      image: require('../../assets/images/LH-3.jpeg'),
      title: 'Rift Valley Bar & Lounge ',
      data: CarouselImageData26
    },
    {
      id: 6,
      image: require('../../assets/images/Sundowner-7.jpeg'),
      title: 'Sundowner',
      data: CarouselImageData27
    },
    {
      id: 7,
      image: require('../../assets/images/PDD-11.jpeg'),
      title: 'Pool Deck Dining',
      data: CarouselImageData28
    },
  ]

  const sarovaMaraGame: any = [
    {
      id: 1,
      image: require('../../assets/images/IR-1.jpeg'),
      title: 'Isokon Restaurant',
      data: CarouselImageData29
    },
    {
      id: 2,
      image: require('../../assets/images/OB-2.jpeg'),
      title: 'Isokon Bar',
      data: CarouselImageData30
    },
    {
      id: 3,
      image: require('../../assets/images/SBD-3.jpeg'),
      title: 'Experiential dining',
      data: CarouselImageData31  
    },
  ]

  const sarovaShabaGame: any = [
    {
      id: 1,
      image: require('../../assets/images/SSR-4.jpeg'),
      title: 'Surplei restaurant',
      data: CarouselImageData32
    },
    {
      id: 2,
      image: require('../../assets/images/SGL-16.jpeg'),
      title: 'Sundowner',
      data: CarouselImageData33 
    },
    {
      id: 3,
      image: require('../../assets/images/LBD-2.jpeg'),
      title: 'Boma Dining',
      data: CarouselImageData34  
    },
    {
      id: 4,
      image: require('../../assets/images/SRD-5.jpeg'),
      title: 'Romantic dining',
      data: CarouselImageData35
    },
    {
      id: 5,
      image: require('../../assets/images/SSS-9.jpeg'),
      title: 'Safari breakfast',
      data: CarouselImageData36
    },
    {
      id: 6,
      image: require('../../assets/images/LS0-2.jpeg'),
      title: 'Special dining',
      data: CarouselImageData37
    },
    {
      id: 7,
      image: require('../../assets/images/PDL-22.jpeg'),
      title: 'Private dining',
      data: CarouselImageData38
    },
    {
      id: 8,
      image: require('../../assets/images/CCB-1.jpeg'),
      title: 'Chemi Bar',
      data: CarouselImageData39
    },
  ]

  const sarovaImperial: any = [
    {
      id: 1,
      image: require('../../assets/images/CY-3.jpeg'),
      title: 'Courtyard ',
      data: CarouselImageData40
    },
    {
      id: 2,
      image: require('../../assets/images/CFS-2.jpeg'),
      title: 'The palms coffee shop',
      data: CarouselImageData41
    },
    {
      id: 3,
      image: require('../../assets/images/PRB-5.jpeg'),
      title: 'Perch Rooftop Bar & Lounge',
      data: CarouselImageData42
    },
  ]

  const hotelsData = [
    { id: 1, title: 'Sarova Stanley Restaurants & Bar', data: sarovaStanley },
    { 
      id: 2, 
      title: 'Sarova Panafric Restaurants & Bar', 
      data: sarovaPanafric
    },
    { 
      id: 3, 
      title: 'Woodlands Restaurants & Bar', 
      data: sarovaWoodlands
    },
    { 
      id: 4, 
      title: 'Whitesands Restaurants & Bar', 
      data: sarovaWhitesands
    },
    { 
      id: 5, 
      title: 'Lion Hill Game Reserve Restaurants & Bar', 
      data: sarovaLionHill
    },
    { 
      id: 6, 
      title: 'Mara Game Camp Restaurants & Bar', 
      data: sarovaMaraGame
    },
    { 
      id: 7, 
      title: 'Shaba Game Lodge Restaurants & Bar', 
      data: sarovaShabaGame
    },
    { 
      id: 8, 
      title: 'Sarova Imperial Restaurants & Bar', 
      data: sarovaImperial
    },
  ]


  const navigation = useNavigation()
  const sarovaData = useMemo(() => hotelsData, [hotelsData])

  //@ts-ignore
  const renderSection = ({ item, index }) => {
    return (
     <View key={index} style={{ width: '100%', paddingLeft: 15 }}>
      <Text style={{ color: colors?.mediumGray3, fontSize: 15, fontWeight: 'bold', marginLeft: 12, marginBottom: -10 }}>
        {item?.title}
      </Text>
      <Carousel 
        data={item?.data}
        paddingTop={30} 
        paddingBottom={10} 
        imageWidth={235}
        imageHeight={270}
        paddingHorizontal={10} 
        descWidth={215}
        paddingTopCard={10}
        paddingBottomCard={12}
        paddingHorizontalBottomCard={15}
        bottomTextTitleColor={colors?.bgRed}
        alignSelfBottomCardText='flex-start'
        //@ts-ignore
        onPress={() => 
          navigation.navigate('Restaurant', { 
          id: item?.id,
          data: item?.data,
        })}
      />
    </View>
    );
  };

  //@ts-ignore
  const keyExtractor = (item) => item.id

  const getItemLayout = (_, index: number) => ({
    length: 270, // Total height of each item, including margins
    offset: 270 * index, // Offset to the top of the current item
    index,
  })

  return(
    <View style={{ 
        gap: 0, 
        paddingHorizontal: 0,
        paddingTop: 240,
        paddingBottom: Platform.OS === 'ios' ? 320 : 420, 
      }}
    >
      <FlatList
        data={sarovaData}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ 
          gap: -15,
          width: '100%',
        }}      
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        showsVerticalScrollIndicator={false} 
        renderItem={renderSection}
      />
    </View>
  )
}
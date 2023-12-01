import React, { useMemo } from 'react'
import { Platform, Text, View } from "react-native";
import Carousel from "../../components/Carousel";
import colors from "../../styles/theme";
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function RestaurantTab() {
  interface HotelRestaurant {
    id: number;
    image: string;
    title: string;
    desc: string;
  }
  const sarovaStanley: HotelRestaurant[] = [
    {
      id: 1,
      image: require('../../assets/images/Sarova_Stanley_Thorn_Tree_Cafe_11.webp'),
      title: 'Thorn Tree Cafe',
      desc: 'The Thorn Cafe is a legendary open air, bistro style pavement cafe that is most famous for lorem ipsum do rem mi lorem ipsum do rem mi',
    },
    {
      id: 2,
      image: require('../../assets/images/Sarova_Stanley_Thai_Chi_restaurant_7.webp'),
      title: 'Thai Chi Restaurant',
      desc: 'The Thorn Cafe is a legendary open air, bistro style pavement cafe that is most famous for lorem ipsum do rem mi lorem ipsum do rem mi',
    },
    {
      id: 3,
      image: require('../../assets/images/Sarova_Stanley_Pool_Deck_Restaurant_4.webp'),
      title: 'Pool Deck Restaurant',
      desc: 'The Thorn Cafe is a legendary open air, bistro style pavement cafe that is most famous for lorem ipsum do rem mi lorem ipsum do rem mi',
    },
    {
      id: 4,
      image: require('../../assets/images/Sarova_Stanley_The_Exchange_bar_6.webp'),
      title: 'The Exchange Bar',
      desc: 'The Thorn Cafe is a legendary open air, bistro style pavement cafe that is most famous for lorem ipsum do rem mi lorem ipsum do rem mi',
    },
    {
      id: 5,
      image: require('../../assets/images/Sarova_Stanley_1902_Club_Lounge_6_(1).webp'),
      title: 'In Room Dining',
      desc: 'The Thorn Cafe is a legendary open air, bistro style pavement cafe that is most famous for lorem ipsum do rem mi lorem ipsum do rem mi',
    },
    {
      id: 6,
      image: require('../../assets/images/Sarova_Stanley_Exterior_1.webp'),
      title: 'Food & Beverage',
      desc: 'The Thorn Cafe is a legendary open air, bistro style pavement cafe that is most famous for lorem ipsum do rem mi lorem ipsum do rem mi',
    },
  ]
  const hotelsData = [
    { id: 1, title: 'Sarova Hotels Restaurants', data: sarovaStanley },
    { 
      id: 2, 
      title: 'Sarova Panafric', 
      data: sarovaStanley
    },
  ]
  const navigation = useNavigation()
  const sarovaData = useMemo(() => hotelsData, [hotelsData])

  //@ts-ignore
  const renderSection = ({ item, index }) => {
    return (
     <View key={index} style={{ width: '100%', paddingLeft: 15, }}>
      <Text style={{ color: colors?.mediumGray3, fontSize: 15, fontWeight: 'bold', marginLeft: 12, marginBottom: -10 }}>
        {item?.title}
      </Text>
      <Carousel 
        data={item?.data}
        paddingTop={30} 
        paddingBottom={10} 
        imageWidth={250}
        imageHeight={270}
        paddingHorizontal={10} 
        descWidth={215}
        paddingTopCard={10}
        paddingBottomCard={12}
        paddingHorizontalBottomCard={15}
        bottomTextTitleColor={colors?.bgRed}
        alignSelfBottomCardText='flex-start'
        //@ts-ignore
        onPress={() => navigation.navigate('Restaurant', { id: item?.id })}
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
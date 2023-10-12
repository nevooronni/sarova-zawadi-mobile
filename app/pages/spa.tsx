import React, { useMemo } from 'react'
import { hotels } from '../../constants/content';
import { FlatList } from 'react-native';
import { Platform } from 'react-native';
import colors from '../../styles/theme';
import HotelCard from '../../components/Card/hotelcard';

export default function SpaTab() {
  const hotelsData = useMemo(() => hotels, [hotels]);
  //@ts-ignore
  const keyExtractor = (item) => item.id

  const getItemLayout = (_, index: number) => ({
    length: 350, // Total height of each item, including margins
    offset: 350 * index, // Offset to the top of the current item
    index,
  })

  return(
    <FlatList
      data={hotelsData}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ 
        gap: 20,
        width: '100%',
        paddingTop: 250,
        paddingBottom: Platform.OS === 'ios' ? 250 : 320,
        paddingLeft: 20,
        alignItems: 'center',
        backgroundColor: colors?.white
      }}      
      keyExtractor={keyExtractor}
      getItemLayout={getItemLayout}
      showsVerticalScrollIndicator={false} 
      renderItem={({ item, index }) => {
        return (
          <HotelCard
            key={index}
            id={item?.id}
            name={item?.spa} 
            // price={item?.price}
            points={item?.points}
            image={item?.image}
            imageWidth={Platform.OS === 'ios' ? 330 : 300}
            imageHeight={330}
            borderRadius={20}
            pointsColor={colors?.mediumGray3}
            pointsFontSize={13}
            navigateTo='SpaBooking'
          />
        )
      }}
    />
  )
}

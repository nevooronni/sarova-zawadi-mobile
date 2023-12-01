import React, { useMemo } from 'react'
import { concierge, hotels } from '../../constants/content'
import { FlatList } from 'react-native'
import { Platform } from 'react-native'
import colors from '../../styles/theme'
import HotelCard from '../../components/Card/hotelcard'

export default function Concierge() {
  const conciergeData = useMemo(() => concierge, [concierge]);
  //@ts-ignore
  const keyExtractor = (item) => item.id

  const getItemLayout = (_, index: number) => ({
    length: 350, // Total height of each item, including margins
    offset: 350 * index, // Offset to the top of the current item
    index,
  })

  return(
    <FlatList
      data={conciergeData}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ 
        gap: 20,
        width: '100%',
        paddingTop: 250,
        paddingBottom: Platform.OS === 'ios' ? 320 : 420,
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
            name={item?.name} 
            points={item?.price}
            image={item?.image}
            button={item?.button}
            namePaddingBottom={1}
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

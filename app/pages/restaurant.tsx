import React, { useMemo, useState } from 'react'
import { Text, View, Platform, Pressable } from 'react-native'
import colors from '../../styles/theme'
import TopNavigation from '../../components/Navigation/Top'
import { IosScreenWrapper } from '../../components/ScreenWrapper'
import { CarouselImageData, roomsData } from '../../constants/content'
import { BackgroundCarousel } from '../../components/Carousel'
import { loginStyles } from '../home'
import { useRoute, useNavigation } from '@react-navigation/native';


export default function Restaurant() {
  const route = useRoute() 
   //@ts-ignore
  const routeId = route?.params?.id
  const navigation = useNavigation()
  return (
    <IosScreenWrapper 
      background={colors?.bgRed}
      hidden={Platform.OS === 'ios'}
    >   
      <TopNavigation 
        color={colors?.white} 
        paddingTop={Platform.OS === 'ios' ? 35 : 15}     
        paddingHorizontal={30}
        width='105%'
        goBack
      />
      <BackgroundCarousel data={CarouselImageData} />
      <View style={{ backgroundColor: colors?.white, flex: 1, marginTop: -25, paddingTop: 20 }}>
        <View style={{ backgroundColor: colors?.white, gap: 30, flex: 1, marginTop: -25, paddingTop: 20, paddingBottom: 100, paddingHorizontal: 30 }}>
          <View style={{ alignItems: 'flex-start', gap: 15  }}>
            <Text style={{ color: colors?.bgRed, fontSize: 18, fontWeight: 'bold' }}>Thorn Tree Cafe</Text>
            <Text style={{ color: colors?.mediumGray, fontSize: 12, lineHeight: 19 }}>
              The Thorn Tree Cafe is a legendary open air, bistro style pavement cafe that is most famous for it's message board located at the centre of the restaurant. Legend purpots that the Thorn Tree Cafe - named 
              for a single centrally situated acacia tree - became a makeshift post box for travellers who left mail pinned onto its trunk. 'Tree mail' endures despire email and the Thorn Tree Cafe flourishes as the crossroads of Africa.
              From the time in memorial the cafe has been the perfect meeting place for friends and offers a remarkable dinning expericence in the central business district. It has a deli counter, serves pizzas from a wood-fired oven, fresh juices, beers, the widest range of coffess and a varied menuu which includes popular continental and nouvelle dishes.
            </Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Pressable 
              style={[loginStyles.loginButton, { height: 40, paddingVertical: 10, width: 150 }]}
              //@ts-ignore
              onPress={() => navigation.navigate('RestaurantBooking', { id: routeId })}
            >
              <Text style={loginStyles.loginText}>Make a Reservation</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </IosScreenWrapper>
  )
}

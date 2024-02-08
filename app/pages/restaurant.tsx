import React from 'react'
import { Text, View, Platform, Pressable, ScrollView } from 'react-native'
import colors from '../../styles/theme'
import TopNavigation from '../../components/Navigation/Top'
import { IosScreenWrapper } from '../../components/ScreenWrapper'
import { roomsData } from '../../constants/content'
import { BackgroundCarousel } from '../../components/Carousel'
import { loginStyles } from '../home'
import { useRoute, useNavigation } from '@react-navigation/native';
import MainBottomNavbar from '../../components/Navigation/MainBottomNavbar'
import { useAppState } from '../../store'

export default function Restaurant() {
  const state = useAppState()
  const stateRouteId = state?.routeStateId
  const route = useRoute() 
   //@ts-ignore
  const routeId = route?.params?.id
  const title = route?.params?.id && route?.params?.data?.length > 0 
    ? `${route?.params?.data?.[stateRouteId - 1]?.title}` : ''
  const data = route?.params?.data ? `${route?.params?.data}` : ''
  const navigation = useNavigation()
  const carouselImageData = route?.params?.data?.length > 0  && stateRouteId
    ? route?.params?.data?.[stateRouteId - 1]?.data 
    : []
    
  return (
    <IosScreenWrapper 
      background={colors?.bgRed}
      // hidden={Platform.OS === 'ios'}
    >  
      <ScrollView>
        <TopNavigation 
          color={colors?.white} 
          paddingTop={Platform.OS === 'ios' ? 35 : 15}     
          paddingHorizontal={30}
          width='105%'
          goBack
          noMenu
          goBackLink='Explore'
        />
        <BackgroundCarousel data={carouselImageData} />
        <View style={{ backgroundColor: colors?.white, flex: 1, marginTop: -25, paddingTop: 20, paddingBottom: 320 }}>
          <View style={{ backgroundColor: colors?.white, gap: 30, flex: 1, marginTop: -25, paddingTop: 20, paddingBottom: 100, paddingHorizontal: 30 }}>
            <View style={{ alignItems: 'flex-start', gap: 15  }}>
              <Text style={{ color: colors?.bgRed, fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
              <Text style={{ color: colors?.mediumGray, fontSize: 12, lineHeight: 19 }}>
                {`The ${title} is a legendary open air, bistro style pavement cafe that is most famous for it's message board located at the centre of the restaurant. Legend purpots that the ${title} - named for a single centrally situated acacia tree - became a makeshift post box for travellers who left mail pinned onto its trunk. 'Tree mail' endures despire email and the ${title} flourishes as the crossroads of Africa.From the time in memorial the cafe has been the perfect meeting place for friends and offers a remarkable dinning expericence in the central business district. It has a deli counter, serves pizzas from a wood-fired oven, fresh juices, beers, the widest range of coffess and a varied menu which includes popular continental and nouvelle dishes.`}
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
      </ScrollView> 
      <MainBottomNavbar />
    </IosScreenWrapper>
  )
}

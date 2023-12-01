import React, { useState } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { IosScreenWrapper } from '../../components/ScreenWrapper'
import colors from '../../styles/theme'
import { Platform, Pressable, ScrollView, TouchableOpacity, View } from 'react-native'
import TopNavigation from '../../components/Navigation/Top'
import { BackgroundCarousel } from '../../components/Carousel'
import { CarouselImageData, Spa, spas } from '../../constants/content'
import { Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { loginStyles } from '../home'
import BottomNavigation from '../../components/Navigation/Bottom'
import { useAppActions, useAppState } from '../../store'
import SpinnerLoader from '../../components/Loaders/Spinner'

function SpaTypes({ name, list }: Spa) {
  const state = useAppState()
  const { setBookingTotalAmount } = useAppActions()
  const [isOpen, setOpen] = useState<boolean>(false);
  const [radioButton, setRadioButton] = useState<string>('')

  return (
    <View style={{ width: '100%' }}>
      <Pressable 
        onPress={() => setOpen(!isOpen)} 
        style={{ 
          width: '100%', 
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderTopWidth: .5,
          borderBottomWidth: .5,
          paddingVertical: 14,
          borderTopColor: colors?.lightGray3,
          borderBottomColor: colors?.lightGray3
       }}
      >
        <Text style={{ fontWeight: 'bold', fontSize: 12, color: colors?.mediumGray3 }}>{name}</Text>
        <FontAwesome 
          name='chevron-down' 
          size={13} 
          color={colors?.lightGray3}
        />
      </Pressable>
      {isOpen ? 
      <>
        {list?.map((l, i) => (
          <View 
            key={i}
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
              borderBottomWidth: .5,
              borderBottomColor: colors?.lightGray3
            }}
          >
            <View style={{ gap: 2 }}>
              <Text style={{ fontSize: 13, color: colors?.mediumGray3 }}>Hot Stone Therapy</Text>
              <Text style={{ fontSize: 13, color: colors?.mediumGray3 }}>{l?.time}</Text>
            </View>
            <View style={{ gap: 2 }}>
              <Text style={{ fontSize: 13, color: colors?.mediumGray3 }}>{l?.price}</Text>
              <Text style={{ fontSize: 13, color:colors?.bgRed }}>{l?.points}</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setRadioButton(l?.id)
                  setBookingTotalAmount(state?.bookingTotalAmount + l?.amount)
                }}
              >
                <View style={{ 
                    width: 25, 
                    height: 25, 
                    borderRadius: 9999,
                    borderWidth: .5,
                    borderColor: colors?.bgRed,
                    alignItems: 'center', 
                    justifyContent: 'center'
                  }}
                >
                  <View style={{ 
                    width: 20,
                    height: 20, 
                    borderRadius: 9999, 
                    backgroundColor: radioButton === l?.id ? colors?.bgRed : 'transparent'
                  }} />
                </View>
              </TouchableOpacity>
            </View>
          </View> 
        ))}
      </> : null}
    </View>
  )
}
export default function Room() {
  const state = useAppState()
  const [readmore, setReadmore] = useState<boolean>(false)
  const desc = 'Located in apartment room 19, Tulia spa offers a tranquil experience and therapies are done by trained associates who can offer a variety. Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text Lorem ipsum text'
   
  const route = useRoute() 
  //@ts-ignore
  const routeId = route?.params?.id

  return (
    <IosScreenWrapper 
      background={colors?.bgRed}
      // hidden={Platform.OS === 'ios'}
    >  
      <SpinnerLoader isLoading={state.isLoading} color={colors?.red} />
      <TopNavigation 
        color={colors?.white} 
        paddingTop={Platform.OS === 'ios' ? 35 : 15}     
        paddingHorizontal={30}
        width='105%'
        goBack
        noMenu
      /> 
      <BackgroundCarousel data={CarouselImageData} />
      <ScrollView 
        style={{ backgroundColor: colors?.white, flex: 1, marginTop: -25, paddingTop: 20 }}
        showsVerticalScrollIndicator={false} 
      >
         <View style={{ backgroundColor: colors?.white, gap: 16, flex: 1, marginTop: -25, paddingTop: 20, paddingBottom: 450, paddingHorizontal: 30 }}>
          <View style={{ alignItems: 'flex-start' }}>
            <Text style={{ color: colors?.bgRed, fontSize: 19, fontWeight: 'bold' }}>Tulia Spa | Sarova Stanley</Text>
          </View>    
          <View style={{ alignItems: 'flex-start' }}>
            <Pressable onPress={() => setReadmore(false)}>
              <Text style={{ color: colors?.mediumGray, }}>{desc ? readmore ? desc : `${desc?.slice(0,125)}...` : ''}{!readmore 
                ? <Pressable 
                    onPress={() => setReadmore(true)} 
                  >
                    <Text style={{ color: colors?.blue, fontWeight: 'bold', marginBottom: Platform.OS === 'ios' ? -3 : -5 }}>
                      Read more
                    </Text>
                  </Pressable> 
                : null}
              </Text>
            </Pressable>
          </View>
          <View style={{ width: '100%' }}>
          {spas?.map((spa, i) => (
            <SpaTypes
              key={i}
              name={spa?.name}
              list={spa?.spa}
            />
          ))}
          </View>      
        </View>
      </ScrollView>
      <BottomNavigation />
    </IosScreenWrapper>
    )
  }
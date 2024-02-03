import React, { useState } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { IosScreenWrapper } from '../../components/ScreenWrapper'
import colors from '../../styles/theme'
import { Platform, Pressable, ScrollView, View } from 'react-native'
import TopNavigation from '../../components/Navigation/Top'
import { BackgroundCarousel } from '../../components/Carousel'
import { roomCarouselData, roomFeatures } from '../../constants/content'
import { Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { loginStyles } from '../home'

export default function Room() {
  const navigation = useNavigation();
  const [readmore, setReadmore] = useState<boolean>(false)
  const desc = 'The Suite is the official suite of the hotel and is named after the explorer Henry Morton Stanley Lorem ipsum test lorem ipsum text lorem ipsum text Lorem ipsum test lorem ipsum text lorem ipsum text Lorem ipsum test lorem ipsum text lorem ipsum text'

  const route = useRoute() 
  //@ts-ignore
  const routeId = route?.params?.id
  return (
    <IosScreenWrapper 
      background={colors?.bgRed}
      // hidden={Platform.OS === 'ios'}
    >  
      <TopNavigation 
        color={colors?.white} 
        paddingTop={Platform.OS === 'ios' ? 35 : 15}     
        paddingHorizontal={30}
        width='105%'
        goBack
        noMenu
      /> 
      <BackgroundCarousel data={roomCarouselData} />
      <ScrollView style={{ 
          backgroundColor: colors?.white, 
          flex: 1, 
          marginTop: -25, 
          paddingTop: 20 
        }}
        showsVerticalScrollIndicator={false} 
      >
        <View style={{ 
            backgroundColor: colors?.white, gap: 16, 
            flex: 1, 
            marginTop: -25, 
            paddingTop: 20, 
            paddingBottom: 100, 
            paddingHorizontal: 30 
          }}
        >
          <View style={{ alignItems: 'flex-start', gap: 4 }}>
            <Text style={{ color: colors?.bgRed, fontSize: 19, fontWeight: 'bold' }}>
              Themed Suites
            </Text>
            <Text style={{ fontSize: 12, color: colors?.darkGray, fontWeight: 'bold' }}>
              From per night
            </Text>
          </View>
          <View style={{ 
              width: 30, 
              marginVertical: 1,
              borderWidth: .25, 
              borderColor: colors?.lightGray3, 
            }} 
          />
          <View style={{ alignItems: 'flex-start', marginVertical: 0, paddingVertical: 0, }}>
            <Pressable onPress={() => setReadmore(false)}>
              <Text style={{ color: colors?.mediumGray, }}>{desc ? readmore ? desc : `${desc?.slice(0,160)}...` : ''}{!readmore 
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
          <View style={{ 
              marginVertical: 1,
              borderWidth: .25, 
              borderColor: colors?.lightGray3, 
            }} 
          />
          <View style={{ alignItems: 'flex-start' }}>
            <Text style={{ fontSize: 16, color: colors?.darkGray, fontWeight: 'bold' }}>
              Room Features
            </Text>
          </View>
          <View style={{ 
              flexDirection: 'row', 
              alignItems: 'flex-start', 
              justifyContent: 'flex-start',
              paddingVertical: 5,
              gap: 10
            }}
          >
            {roomFeatures?.map((room, index) => (
              <View key={room?.id} style={{ gap: 8 }}>
                {room?.icon}
                <Text 
                  style={{ 
                    color: colors?.mediumGray4, 
                    width: 100,
                    fontSize: 12,
                    alignSelf: 'center',
                    marginLeft: index === 1 ? -23 : 0,
                  }}
                >
                  {room?.desc}
                </Text>
              </View>
            ))}
          </View>
          <View style={{ alignItems: 'flex-start', gap: 5 }}>
            <Text style={{ fontSize: 16, color: colors?.darkGray, fontWeight: 'bold', marginBottom: 5, }}>
              Amenities
            </Text>
            <Text style={{ color: colors?.mediumGray, }}>Two Colour Tv's (satellite connection)</Text>
            <Text style={{ color: colors?.mediumGray, }}>White bathrobe/universal sandals</Text>
            <Text style={{ color: colors?.mediumGray, }}>Two local dailies</Text>
            <Text style={{ color: colors?.mediumGray, }}>Digital Safe deposit boxes</Text>
            <Text style={{ color: colors?.mediumGray, }}>Tropical fruit basket</Text>
          </View>
          <View style={{ 
              marginVertical: 1,
              borderWidth: .25, 
              borderColor: colors?.lightGray3, 
            }} 
          />
          <View style={{ 
            flexDirection: 'row', 
              justifyContent: 'space-between',
              paddingVertical: 0,
              paddingBottom: 270,
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <FontAwesome 
                name='star' 
                size={16} 
                color={colors?.bgRed} 
              />
              <Text style={{ marginLeft: 5, fontSize: 13, color: colors?.darkGray, fontWeight: 'bold' }}>
                Earn up to 1,500 points
              </Text>
            </View>
            <View>
            <Pressable 
              style={[loginStyles.loginButton, 
              { height: 40, width: 125, paddingVertical: 10, 
              }]}
              //@ts-ignore
              // onPress={() => navigation.navigate('Booking', { id: routeId })} 
            >
              <Text style={loginStyles.loginText}>Book Now</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </IosScreenWrapper>
  )
}

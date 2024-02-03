import React from 'react'
import { IosScreenWrapper } from '../../components/ScreenWrapper'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopNavigation from '../../components/Navigation/Top'
import colors from '../../styles/theme'
import { ImageBackground, ImageURISource, Platform, Pressable, ScrollView, StyleSheet, View } from 'react-native'
import { Text } from 'react-native'
import { loginStyles } from '../home'
import { roomCarouselData } from '../../constants/content'
import { Shadow } from 'react-native-shadow-2'
import { useRoute, useNavigation } from '@react-navigation/native';

interface Item {
  title?: string;
  desc: string;
}

interface CheckoutCard {
  routeId: number;
  src: ImageURISource;
  title: string; 
  rooms: string;  
  roomTitle: string;
  checkin: string;  
  checkout: string;  
  adult: string;  
  fees: string;  
  nights: string; 
}

function CheckOutItem ({ title, desc }: Item) {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', }}>
      {title && <Text style={styles?.text}>{`${title}:`}</Text>}
      <Text style={styles?.text2}>{desc}</Text>
    </View>
  )
}

function CheckOutCard({ 
  src,
  title, 
  rooms, 
  roomTitle,
  checkin, 
  checkout, 
  adult, 
  fees, 
  nights,
  routeId, 
}: CheckoutCard) {
  const navigation = useNavigation();
  return(
    <Shadow style={{ margin: 0, width: Platform.OS === 'ios' ? 325 : 300 }} distance={5}>
      <View style={{ 
          margin: 0,
          width: Platform.OS === 'ios' ? 325 : 300, 
          overflow: 'hidden', 
          borderRadius: 25
        }}
      >
        <ImageBackground
          source={src}
          resizeMode="cover"
          style={{ 
            flex: 1,
            padding: 20,  
            height: 150,
            justifyContent: 'space-between'
          }}
        >
          <Pressable 
            style={[loginStyles.loginButton, 
              { height: 40, width: 120, paddingVertical: 10, 
            }]}
              //@ts-ignore
            onPress={() => navigation.navigate('Booking', { id: routeId })} 
          >
            <Text style={[loginStyles.loginText, { fontSize: 13 }]}>Edit Booking</Text>
          </Pressable>
          <Text style={{ color: colors?.white, fontSize: 13, fontWeight: 'bold' }}>
            {title}
          </Text>
        </ImageBackground> 
        <View style={{ backgroundColor: colors?.white, paddingVertical: 15, paddingHorizontal: 25 }}>
          <View  style={{ gap: 5, alignItems: 'flex-start' }}>
            <CheckOutItem title={rooms} desc={roomTitle} />
            <CheckOutItem title='Check In' desc={checkin} />
            <CheckOutItem title='Check Out' desc={checkout} />
            <CheckOutItem desc='24hrs Stay' />
          </View>
          <View style={{ paddingVertical: 15, gap: 5, }}>
            <Text style={{ color: colors?.bgRed, fontWeight: 'bold' }}>Price Summary</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
              <Text style={styles?.text}>Room 1:</Text>
              <Text style={styles?.text2}>1 Adult</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles?.text2}>24 Nights</Text>
              <Text style={styles?.text2}>$ 420</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={styles?.text2}>Taxes & Fees</Text>
              <Text style={styles?.text2}>$ 105</Text>
            </View>
            <View style={{ 
                flexDirection: 'row', 
                justifyContent: 'flex-end', 
                borderTopWidth: .5, 
                borderTopColor: colors?.lightGray3, 
                marginTop: 5, 
                paddingTop: 10, 
              }}
            >
              <Text style={styles?.text2}>Stay Total: </Text>
              <Text style={[styles?.text2, { fontWeight: 'bold' }]}>US$ 800</Text>
            </View>
          </View>
        </View>
      </View>
    </Shadow>
  )
}

export default function SecureCheckout() {
  const route = useRoute() 
  //@ts-ignore
  const routeId = route?.params?.id
  const navigation = useNavigation();
  const backgroundImage = roomCarouselData?.[0]
  return (
    <IosScreenWrapper background={colors?.white}>
      <SafeAreaView>
        <TopNavigation 
          backgroundColor={colors?.white}
          color={colors?.mediumGray} 
          paddingHorizontal={30}
          width='105%'
          goBack
          noMenu
        />
        <ScrollView 
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            <View style={{ width: '100%', alignItems: 'flex-start' }}>
              <Text style={{ color: colors?.bgRed, fontSize: 20 }}>
                Secure Checkout
              </Text>
            </View>
            <CheckOutCard
              title='Stanley Themed Suites Booking'
              src={backgroundImage}
              rooms='1 Room' 
              roomTitle='Stanley Themed Suite'
              checkin='Tuesday 6th Nov 2023' 
              checkout='Tuesday 29th Nov, 2023'
              adult='1 adult'
              fees='$105'
              nights='24 nights'
              routeId={routeId}
            />
            <View style={{ paddingLeft: 10 }}>
              <Text style={styles?.text2}>
                Hello Abi, you currently have 5,000 points in your account. You can pay for this stay by redeeming 3,000 points.
              </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingLeft: 10, maxWidth: 325 }}>
              <Pressable 
              style={[loginStyles.loginButton, 
                { height: 45, width: 130, paddingVertical: 13, 
              }]}
                //@ts-ignore
                onPress={() => navigation.navigate('Booking', { id: routeId })} 
              >
                <Text style={[loginStyles.loginText,  { fontSize: 13 }]}>Pay With Points</Text>
              </Pressable>
              <Pressable 
                style={[loginStyles.loginButton, 
                  { height: 45, width: 130, paddingVertical: 13, 
                }]}
                  //@ts-ignore
                onPress={() => navigation.navigate('SecureCheckoutPayment', { id: routeId })} 
              >
                <Text style={[loginStyles.loginText,  { fontSize: 13 }]}>Online Payments</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </IosScreenWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 30,
    paddingTop: 50,
    paddingHorizontal: 35,
    paddingBottom: 355,
    backgroundColor: colors?.white,
    height: '100%',
    alignItems: 'flex-start'
  },
  text: {
   fontWeight: 'bold', marginRight: 5, color: colors?.darkGray, 
   fontSize: 12
  },
  text2: {
    color: colors?.mediumGray,
    fontSize: 13,
    maxWidth: 325
  }
})

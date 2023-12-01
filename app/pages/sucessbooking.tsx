import React from 'react'
import { Dimensions, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import colors from '../../styles/theme'
import TopNavigation from '../../components/Navigation/Top'
import { Image } from 'expo-image';
import { imageUrl } from '../../constants/image'
import { successModalStyles } from '../../components/Modal'
import { FontAwesome } from '@expo/vector-icons'
import Carousel from '../../components/Carousel'
import { carouselData2 } from '../../constants/content'
import { IosScreenWrapper } from '../../components/ScreenWrapper'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native'
import { loginStyles } from '../home'

function FixedCenterComponent() {
  return (
    <View style={styles.container}>
      {/* Fixed center component */}
      <View style={styles.fixedCenterComponent}>
        <Text style={styles.centerText}>Fixed Center</Text>
      </View>
    </View>
  );
}

export default function SuccessBooking() {
  // const state = useAppState()
  // const userName = state?.userFullName ? state?.userFullName : ''
  // const successMessage = state?.bookingSuccessMessage
  const route = useRoute() 
  //@ts-ignore
  const message1 = route?.params?.message1
  //@ts-ignore
  const message2 = route?.params?.message2
  //@ts-ignore
  const checkIn = route?.params?.checkIn
  const successMessage = 'Feel the burn session.'
  const userName = 'Abi Applessed' 
  const bookingMessage1 = message1 || 'You have successfully'
  const bookingMessage2 = message2 || `booked a ${successMessage}`

  return (
    <IosScreenWrapper background={colors?.white}>
      <SafeAreaView>
        <TopNavigation 
          color={colors?.mediumGray} 
          backgroundColor={colors?.white}
          paddingTop={-20}
          paddingHorizontal={20}
          width='102%'
          goBack
          noMenu
        />
        <ScrollView>
          <View style={styles.container}>
            <View style={{ width: '100%', gap: 19, paddingTop: 30, paddingBottom: 0, paddingHorizontal: 30, alignItems: 'center' }}>
              <Image
                source={imageUrl}
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 65,
                  marginTop: 20
                }}
              />
              <Text style={{ color: colors?.red, fontSize: 22, fontWeight: 'bold' }}>
                {userName}
              </Text>
            </View>
            <View style={[successModalStyles.container2, { borderBottomWidth: 0, paddingBottom: 0 }]}>
              <FontAwesome 
                name='thumbs-up' 
                size={30} 
                color={colors?.shadeGreen2} 
                style={{ marginVertical: 20 }} 
              />
              <Text style={{ color: colors?.shadeGreen2, fontSize: 16 }}>
                {bookingMessage1}
              </Text>
              <Text style={{ color: colors?.shadeGreen2, fontSize: 16 }}>
              {bookingMessage2}
              </Text>
            </View>
            <View style={{ borderTopWidth: 0, alignItems: 'center', paddingTop: 18, paddingBottom: 35, gap: 20 }}>
              <Text style={{ color: colors?.red, fontSize: 17 }}>
                Thank You!
              </Text>
              {checkIn && <Pressable 
                  style={[loginStyles.loginButton, 
                    { height: 45, width: 125, paddingVertical: 13, 
                  }]}

                >
                <Text style={[loginStyles.loginText,  { fontSize: 13 }]}>Online Check-in</Text>
              </Pressable>}
            </View>
            <View style={{ borderBottomWidth: .5, borderBottomColor: colors?.lightGray, width: '90%', alignSelf: 'center' }} />
            <View style={{ paddingTop: 20, paddingBottom: 50, }}>
              <Text style={{ fontSize: 15, color: colors?.mediumGray4, marginLeft: 30 }}>
                Earn more points while at:
              </Text>
              <Carousel 
                data={carouselData2} 
                paddingTop={20} 
                paddingBottom={10} 
                paddingHorizontal={30} 
                imageWidth={150} 
                imageHeight={160}
                borderRadius={15}
                fontSize={12}
                paddingTopCard={10}
                paddingBottomCard={20}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </IosScreenWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 35,
    backgroundColor: colors?.white,
    height: 1100
  },
  fixedCenterComponent: {
    position: 'absolute',
    top: Dimensions.get('window').height / 2 - 30, // Center vertically
    left: Dimensions.get('window').width / 2 - 60, // Center horizontally
    width: 120,
    height: 60,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1, // Ensure it's above other content
  },
  centerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})

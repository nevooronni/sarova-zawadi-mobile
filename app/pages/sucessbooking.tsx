import React from 'react'
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import colors from '../../styles/theme'
import TopNavigation from '../../components/Navigation/Top'
import { useAppState } from '../../store'
import { Image } from 'expo-image';
import { imageUrl } from '../../constants/image'
import { successModalStyles } from '../../components/Modal'
import { FontAwesome } from '@expo/vector-icons'
import Carousel from '../../components/Carousel'
import { carouselData2 } from '../../constants/content'

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
  const successMessage = 'Feel the burn session.'
  const userName = 'Abi Applessed' 
  const bookingMessage1 = 'You have successfully'
  const bookingMessage2 = `booked a ${successMessage}`

  return (
    <View style={{ flex: 1, margin: 0, padding: 0 }}>
      <TopNavigation 
        color={colors?.mediumGray} 
        paddingHorizontal={30}
        width='105%'
        goBack
      />
      <ScrollView>
        <View style={styles.container}>
          <View style={{ width: '100%', gap: 19, paddingVertical: 30, paddingHorizontal: 30, alignItems: 'center' }}>
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
          <View style={[successModalStyles.container2, { borderBottomWidth: 0 }]}>
            <FontAwesome 
              name='thumbs-up' 
              size={38} 
              color={colors?.shadeGreen2} 
              style={{ marginVertical: 20 }} 
            />
            <Text style={{ color: colors?.shadeGreen2, fontSize: 20 }}>
              {bookingMessage1}
            </Text>
            <Text style={{ color: colors?.shadeGreen2, fontSize: 20 }}>
             {bookingMessage2}
            </Text>
          </View>
          <View style={{ borderTopWidth: 0, alignItems: 'center', paddingTop: 10, paddingBottom: 35 }}>
            <Text style={{ color: colors?.red, fontSize: 20 }}>
              Thank You!
            </Text>
          </View>
          <View style={{ borderBottomWidth: .5, borderBottomColor: colors?.lightGray, width: '90%', alignSelf: 'center' }} />
          <View style={{ paddingVertical: 20 }}>
            <Text style={{ fontSize: 20, color: colors?.mediumGray4, marginLeft: 30 }}>
              Earn more points while at:
            </Text>
            <Carousel 
              data={carouselData2} 
              paddingTop={30} 
              paddingBottom={10} 
              paddingHorizontal={30} 
              imageWidth={160} 
              imageHeight={170}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 35,
    backgroundColor: colors?.white,
    height: '100%',
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
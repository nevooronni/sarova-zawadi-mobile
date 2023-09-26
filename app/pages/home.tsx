import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import colors from '../../styles/theme';
import { useAppState } from '../../store';
import TopNavigation from '../../components/Navigation/Top';
import { loginStyles } from '../home';
import Carousel from '../../components/Carousel';
import { useRouter } from 'expo-router';
import { imageUrl } from '../../constants/image';
import { carouselData } from '../../constants/content';
import { IosScreenWrapper } from '../../components/ScreenWrapper'

export default function Home({ route, navigation }){
  // console.log("🚀 ~ file: home.tsx:15 ~ Home ~ navigation:", route.name)
  // const state = useAppState()
  // const welcomeMessage = state?.userFullName ? `Welcome home ${state.userFullName}` : ''
  const welcomeMessage = `Welcome home Abi`
  const membershipPoints = `Zawadi Emarald Member - you have 5,000 points`
  const membershipNumber = `Membership Number - 5674000576`
  
  return (
    <IosScreenWrapper background={colors?.white}>
    <SafeAreaView>
      <TopNavigation 
        color={colors?.mediumGray} 
        paddingHorizontal={30}
        width='105%'
      />
      <ScrollView>
      <View style={styles.container}>
        <View style={{ gap: 6, paddingVertical: 30, paddingHorizontal: 30 }}>
          <Image
            source={imageUrl}
            style={{
              height: 80,
              width: 80,
              borderRadius: 65,
              marginBottom: 10
            }}
          />
          <Text style={{ color: colors?.red, fontSize: 28, fontWeight: 'bold' }}>
            {welcomeMessage}
          </Text>
          <Text style={{ color: colors?.shadeGreen, fontSize: 13, fontWeight: 'normal' }}>
            {membershipPoints}
          </Text>
          <Text style={{ color: colors?.shadeGreen, fontSize: 13, fontWeight: 'normal' }}>
            {membershipNumber}
          </Text>
        </View>
        <View style={{ gap: 6, paddingHorizontal: 30 }}>
          <Text style={{ color: colors?.mediumGray, fontSize: 18, fontWeight: 'bold' }}>
            Recommended Activities For You
          </Text>
        </View>
        <Carousel 
          data={carouselData} 
          paddingTop={30} 
          paddingBottom={10} 
          paddingHorizontal={30} 
        />
        <View style={{ gap: 18, paddingHorizontal: 30, paddingVertical: 0 }}>
          <TouchableOpacity
              style={[loginStyles.loginButton, { width: '90%' }]}
              onPress={() => navigation.navigate('Scan', { screen: 'Scan' })}
              >
            <Text style={loginStyles.loginText}>Scan Code To Earn Points</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={[loginStyles.loginButton, , { width: '90%' }]}
              onPress={() => navigation.navigate('Explore', { screen: 'Explore' })}
              >
            <Text style={loginStyles.loginText}>Explore</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
    </IosScreenWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 55,
    backgroundColor: colors?.white,
    height: '100%'
  },
})
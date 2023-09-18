import React from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import colors from '../../styles/theme';
import { useAppState } from '../../store';
import Drawer from '../../components/Drawers';
import TopNavigation from '../../components/Navigation/Top';
import { loginStyles } from '../home';
import Carousel from '../../components/Carousel';

export function Home({ navigation }){
  const state = useAppState()
  const imageUrl = require('../../assets/images/avatar.png')
  // const welcomeMessage = state?.userFullName ? `Welcome home ${state.userFullName}` : ''
  const welcomeMessage = `Welcome home Abi`
  const membershipPoints = `Zawadi Emarald Member - you have 5,000 points`
  const membershipNumber = `Membership Number - 5674000576`
  const data = [
    {
      id: 1,
      image: require('../../assets/images/training.png'),
      title: 'Personal Training'
    },
    {
      id: 2,
      image: require('../../assets/images/brunch.png'),
      title: 'Sunday Brunch'
    },
    {
      id: 3,
      image: require('../../assets/images/brunch.png'),
      title: 'Sunday Brunch'
    },
    {
      id: 4,
      image: require('../../assets/images/brunch.png'),
      title: 'Sunday Brunch'
    },
    {
      id: 5,
      image: require('../../assets/images/brunch.png'),
      title: 'Sunday Brunch'
    }
  ]
  return (
    <SafeAreaView >
      <ScrollView>
      <View style={styles.container}>
        <TopNavigation 
          color={colors?.mediumGray} 
          paddingHorizontal={30}
        />
        <View style={{ gap: 6, paddingVertical: 30, paddingHorizontal: 30 }}>
          <Image
            source={imageUrl}
            style={{
              height: 110,
              width: 110,
              borderRadius: 65
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
          <Text style={{ color: colors?.mediumGray, fontSize: 20, fontWeight: 'bold' }}>
            Recommended Activities For You
          </Text>
        </View>
        <Carousel data={data} paddingVertical={30} paddingHorizontal={30} />
        <View style={{ gap: 18, paddingHorizontal: 30, paddingVertical: 10 }}>
          <TouchableOpacity
              style={[loginStyles.loginButton, { width: '90%' }]}
              onPress={() => navigation.openDrawer()}
              >
            <Text style={loginStyles.loginText}>Scan QR Code To Earn Points</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={[loginStyles.loginButton, , { width: '90%' }]}
              onPress={() => navigation.openDrawer()}
              >
            <Text style={loginStyles.loginText}>Explore</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default function Landing():JSX.Element {
  return (
    <Drawer/>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors?.white,
    paddingVertical: 5,
    height: '100%'
  },
})



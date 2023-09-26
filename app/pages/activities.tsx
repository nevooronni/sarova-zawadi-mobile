import React, { useState } from 'react'
import { ImageBackground, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import TopNavigation from '../../components/Navigation/Top'
import colors from '../../styles/theme'
import { loginStyles } from '../home';
import { SimpleLineIcons } from '@expo/vector-icons';
import SpinnerLoader from '../../components/Loaders/Spinner';
import { useAppActions, useAppState } from '../../store'
import { useNavigation } from '@react-navigation/native';
import { IosScreenWrapper } from '../../components/ScreenWrapper';

export default function Activities() {
  const state = useAppState()
  const { setIsLoading } = useAppActions()
  const navigation = useNavigation();
  const backgroundImage = require('../../assets/images/training_bg.png');

  const handleBookNow = () => {
    setIsLoading(true)
    setTimeout(() => { 
      setIsLoading(false)
      //@ts-ignore
      navigation.navigate('SuccessBooking')
    }, 2000)
  }

  return (
    <IosScreenWrapper background={colors?.bgGray}>
      <SpinnerLoader isLoading={state.isLoading} color={colors?.red} />
        <TopNavigation 
          color={colors?.white} 
          paddingHorizontal={30}
          width='110%'
          goBack
        />
        <ImageBackground
          source={backgroundImage}
          resizeMode="stretch"
          style={styles.container}
        />
        
        <View style={{ height: '100%', margin: 0, padding: 0, backgroundColor: colors?.white }}>
            <View style={{ 
              gap: 7,
              marginTop: -50,
              justifyContent: 'flex-start', 
              alignItems: 'flex-start', 
              paddingVertical: 10,
              paddingHorizontal: 30 ,
              backgroundColor: colors?.white,
              // height: '100%'
            }}>
              <Text style={{ fontSize: 14, color: colors?.darkGray }}>Personal Training</Text>
              <Text style={{ fontSize: 20, color: colors?.bgRed, fontWeight: 'bold' }}>Feel The Burn </Text>
              <Text style={{ fontSize: 15, color: colors?.bgRed}}>Sarova Panafric, Jan 26th 2019, 8am to 10am.</Text>
              <View style={{ marginVertical: 5, borderBottomWidth: .5, borderBottomColor: colors?.mediumGray, width: 35 }} />
              <Text style={{ fontSize: 15, color: colors?.mediumGray }}>
                Aerobic exercises is physical exercise of how to high intensity that depends primary on the aerobic energy generating process.
                "Aerobic" means "relationg to, involving, or requiring free oxygen", and refers to the use of oxygen to adequately meet energy 
                demands during exercise via aerobic metabolism.
              </Text>
              <View style={styles.container2}> 
                <Pressable
                  onPress={handleBookNow}
                  style={[loginStyles.loginButton, { width: 110, borderRadius: 8 }]}
                >
                  <Text style={loginStyles.loginText}>Book Now</Text>
                </Pressable>
              </View>
            </View>
            <View style={[styles.container2, {height: 150, backgroundColor: colors?.lightGray2, paddingTop: 20, paddingBottom: 50 }]}>
              <SimpleLineIcons.Button 
                name='share' 
                size={14} 
                color={colors?.white} 
                backgroundColor={colors?.darkGray2}
                underlayColor='transparent'
                borderRadius={8}
                style={{ padding: 10, width: 100, justifyContent: 'center', borderRadius: 15 }}
                //@ts-ignore
                // onPress={() => navigation.openDrawer()}
              >
                Share
              </SimpleLineIcons.Button>
            </View> 
        </View> 
    </IosScreenWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 25,
    backgroundColor: '#484f62',
  },
  container2: {
    width: '100%', justifyContent: 'flex-start', alignItems: 'center', paddingTop: 20, paddingBottom: 10
  },
})


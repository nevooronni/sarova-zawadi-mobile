import React, { useState } from 'react'
import { ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import TopNavigation from '../../components/Navigation/Top'
import colors from '../../styles/theme'
import { loginStyles } from '../home';
import { SimpleLineIcons } from '@expo/vector-icons';
import SpinnerLoader from '../../components/Loaders/Spinner';
import { useAppActions, useAppState } from '../../store'
import { useNavigation } from '@react-navigation/native';

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
    <View style={{ flex: 1, margin: 0, padding: 0 }}>
     <SpinnerLoader isLoading={state.isLoading} color={colors?.red} />
      <ScrollView contentContainerStyle={{ flex:1, margin: 0, padding: 0, backgroundColor: colors?.white, }}>
        <ImageBackground
          source={backgroundImage}
          resizeMode="stretch"
          style={styles.container}
        >
          <TopNavigation 
            color={colors?.white} 
            paddingHorizontal={30}
            width='110%'
            goBack
          />
        </ImageBackground> 
        <View style={{ 
          gap: 7,
          marginTop: -170,
          justifyContent: 'flex-start', 
          alignItems: 'flex-start', 
          paddingVertical: 10,
          paddingHorizontal: 30 
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
        <View style={[styles.container2, { backgroundColor: colors?.lightGray2, paddingTop: 20, paddingBottom: 50 }]}>
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
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '70%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 25,
    backgroundColor: colors?.white,
  },
  container2: {
    width: '100%', justifyContent: 'center', alignItems: 'center', paddingTop: 20, paddingBottom: 10
  },
  image: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '20%',
    // resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  }
})


import React from 'react'
import { Platform, Text, View, TouchableOpacity, Image } from 'react-native'
import { IosScreenWrapper } from '../../components/ScreenWrapper'
import colors from '../../styles/theme'
import TopNavigation from '../../components/Navigation/Top'
import { useNavigation } from '@react-navigation/native'

export default function MyStays() {
  const navigation = useNavigation();
  return (
    <IosScreenWrapper 
      background={colors?.white}
      hidden={Platform.OS === 'ios'}
    >   
      <TopNavigation 
        color={colors?.mediumGray} 
        paddingTop={Platform.OS === 'ios' ? 35 : 15}     
        paddingHorizontal={30}
        width='105%'
        goBack
      />
      <View style={{ 
          paddingTop: 120, 
          borderWidth: .5, 
          borderColor: colors?.lightGray3,
          alignItems: 'flex-start',
          paddingBottom: 20, 
          paddingHorizontal: 35
        }}
      >
        <Text style={{ color: colors?.bgRed, fontSize: 20 }}>
          My Stays
        </Text>
      </View>
      <View style={{ padding: 35, width: '100%' }}>
        <Text style={{ color: colors?.bgRed, textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>Haven't booked a stay yet?</Text>
        <Text style={{ color: colors?.bgRed, textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>And so the adventure begins...</Text>
        <Text style={{ color: colors?.mediumGray3, textAlign: 'center', fontSize: 18, marginTop: 20 }}>Experience all that Sarova</Text>
        <Text style={{ color: colors?.mediumGray3, textAlign: 'center', fontSize: 18 }}>has to offer today</Text>
      </View>
      <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', paddingBottom: 20 }}>
        <Image
          style={{ height: 160, width: 320 }}
          
          source={require('../../assets/images/binouculours.png')}
        />
      </View>
      <View style={{ alignItems: 'center', width: '100%' }}>
        <TouchableOpacity 
          style={{ alignItems: 'center', backgroundColor: colors?.bgRed, padding: 15, borderRadius: 8, width: 120 }}
          //@ts-ignore
          onPress={() => navigation.navigate('Explore')} 
        >
          <Text style={{ color: colors?.white }}>Explore</Text>
        </TouchableOpacity>
      </View>
    </IosScreenWrapper>
  )
}

import React from 'react'
import { IosScreenWrapper } from '../../components/ScreenWrapper'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopNavigation from '../../components/Navigation/Top'
import colors from '../../styles/theme'
import { ScrollView, StyleSheet, Text } from 'react-native'
import { View } from 'react-native'
import { Image } from 'react-native'
import { imageUrl } from '../../constants/image'
import { Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { successModalStyles } from '../../components/Modal'
import UnorderedList from '../../components/List'
import { diamondCardBenefits } from '../../constants/content'
import { useNavigation } from '@react-navigation/native'
import MainBottomNavbar from '../../components/Navigation/MainBottomNavbar'

export default function MyProfile() {
  const navigation = useNavigation();
  const userName = 'Abi Applessed' 
  const membership = 'Zawadi Emarald Member*'
  return (
    <IosScreenWrapper background={colors?.white}>
      <SafeAreaView>
        {/* <TopNavigation 
          color={colors?.mediumGray} 
          backgroundColor={colors?.white}
          paddingTop={-20}
          paddingHorizontal={20}
          width='102%'
          goBack
          noMenu
        /> */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={{ width: '100%', gap: 17, paddingTop: 30, paddingBottom: 0, paddingHorizontal: 30, alignItems: 'center' }}>
              <Image
                source={imageUrl}
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 65,
                  marginTop: 20
                }}
              />
              <Text style={{ color: colors?.shadeGreen, fontSize: 22, fontWeight: 'bold' }}>
                {userName}
              </Text>
              <Text style={{ color: colors?.mediumGray3, fontSize: 20, }}>
                {membership}
              </Text>
            </View>
            <View style={{ alignItems: 'center', paddingVertical: 20, borderWidth: .5, borderColor: colors?.shadeGreen, borderRadius: 8, width: 300, marginVertical: 20 }}>
              <Text style={{ color: colors?.mediumGray3, fontSize: 16, }}>
                You have  <Text style={{ color: colors?.shadeGreen, fontWeight: 'bold' }}>5,000 </Text> reward Points
              </Text>
            </View>
            <View style={{ alignItems: 'center', marginVertical: 15, gap: 38, borderBottomWidth: .5, borderBottomColor: colors?.lightGray, paddingBottom: 18 }}>
              <TouchableOpacity style={{ 
                  backgroundColor: colors?.shadeGreen, 
                  borderRadius: 8, 
                  width: 160,
                  alignItems: 'center', 
                  justifyContent: 'center',
                  paddingVertical: 15
                }}
                onPress={() => navigation.navigate('ProfileDetails')}
              >
                <Text style={{ fontWeight: 'bold', color: colors?.white }}>Profile Details</Text>
              </TouchableOpacity>
              <Text style={{ color: colors?.mediumGray3, fontSize: 13, }}>
                *Joined: 11 July 2018 - Valid Up Till: 11th July 2019
              </Text>
            </View>
            <View style={successModalStyles.container3}>
              <Text style={{ color: colors?.mediumGray, fontSize: 13, fontWeight: 'bold', textAlign: 'left' }}>COLLECT MORE POINTS TO UNLOCK</Text>
              <Text style={{ color: colors?.mediumGray, fontSize: 13, fontWeight: 'bold', textAlign: 'left', marginBottom: 10 }}>THESE AND MORE DIAMOND CARD BENEFITS:</Text>
              <UnorderedList items={diamondCardBenefits} />
            </View>
            <View style={{ alignItems: 'center', marginVertical: 15, }}>
              <TouchableOpacity
                style={{ 
                  backgroundColor: colors?.black, 
                  borderRadius: 8, 
                  width: 130,
                  alignItems: 'center', 
                  justifyContent: 'center',
                  paddingVertical: 15
                }}
              >
                <Text style={{ fontWeight: 'bold', color: colors?.white }}>About Diamond</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <MainBottomNavbar />
    </IosScreenWrapper>
  )
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    paddingBottom: 35,
    backgroundColor: colors?.white,
    height: 1150,
    alignItems: 'center',
  }
})

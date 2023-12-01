import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View } from '../../components/Themed'
import { SimpleLineIcons } from '@expo/vector-icons'
import colors from '../../styles/theme'
import { Image } from 'expo-image'
import { Text, Platform } from 'react-native'
import TopNavigation from '../../components/Navigation/Top'
import { IosScreenWrapper } from '../../components/ScreenWrapper'
import MainBottomNavbar from '../../components/Navigation/MainBottomNavbar'
import { useNavigation } from 'expo-router'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useRouter } from "expo-router";
import { useAppActions, useAppState } from '../../store'
import SpinnerLoader from '../../components/Loaders/Spinner'

export default function Accounts() {
  const router = useRouter()
  const state = useAppState()
  const navigation = useNavigation()
  const { setIsLoading, setFullName, setEmail } = useAppActions()

  const tabs = [
    {
      id: 1,
      name: 'My Profile',
      link: 'MyProfile',
      show: true,
    },
    {
      id: 2,
      name: 'My Stays',
      link: 'MyStays',
      show: true,
    },
    {
      id: 3,
      name: 'Tell A Friend',
      link: 'TellAFriend',
      show: true,
    },
    {
      id: 4,
      name: 'FAQs',
      link: 'Accounts',
      show: true,
    },
    {
      id: 5,
      name: 'Settings',
      link: 'Accounts',
      show: true,
    },
    {
      id: 6,
      name: 'Sign Out',
      link: '',
      show: true,
    }
  ];

  function logoutUser() {
    setIsLoading(true)
    setFullName('')
    setEmail('')

    setTimeout(() => {
      setIsLoading(false)
      router.replace('/auth/login')
    }, 3000)
  }

  return (
    <IosScreenWrapper background={colors?.white}>
    <SafeAreaView style={{ backgroundColor: colors?.white }}>
      <SpinnerLoader
        isLoading={state.isLoading}
        color={colors?.red}
      />
      <TopNavigation 
        color={colors?.lightGray} 
        paddingHorizontal={20}
        width='105%'
        // backgroundColor={colors?.white}
        goBack
        noMenu
      />
      <View style={{ paddingHorizontal: 15, paddingTop: 25, backgroundColor: colors?.white }}>
      </View>
      <View
        style={{
          height: 200,
          width: '100%',
          justifyContent: "flex-start",
          alignItems: "flex-start",
          borderBottomColor: colors?.white,
          borderBottomWidth: 0.6,
          paddingHorizontal: 35,
          paddingTop: 20,
          gap: 10, 
          backgroundColor: Platform.OS !== 'ios' && colors?.white,
        }}
      >
        <Image
          source={require('../../assets/images/avatar.png')}
          style={{
            height: 110,
            width: 110,
            borderRadius: 65
          }}
        />
        <Text
          style={{
            fontSize: 17,
            marginVertical: 6,
            color: colors?.mediumGray
          }}
        >Abbi Appleseed</Text>
      </View>
        {tabs?.map(tab => (
          <TouchableOpacity
            key={tab?.id} 
            style={{
              width: '100%',
              paddingVertical: 20,
              paddingHorizontal: 35,
              borderTopColor: tab?.id !== 1 ? 'transparent' :  colors?.lightGray, 
              borderBottomColor: colors?.lightGray, 
              borderTopWidth: .5, 
              borderBottomWidth: .5, 
            }}
            onPress={() => tabs?.length === tab?.id 
              ? logoutUser() 
              : navigation.navigate(tab?.link)
            }
          >
            <Text style={{ color: colors?.mediumGray }}>
              {tab?.name}
            </Text>
          </TouchableOpacity>
        ))}
    </SafeAreaView>
    <MainBottomNavbar />
    </IosScreenWrapper>
  )
}

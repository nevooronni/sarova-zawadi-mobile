import React from 'react'
import { ImageBackground, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View, Platform } from 'react-native'
import TopNavigation from '../../components/Navigation/Top'
import colors from '../../styles/theme'
import { loginStyles } from '../home';
import { SimpleLineIcons } from '@expo/vector-icons';
import SpinnerLoader from '../../components/Loaders/Spinner';
import { useAppActions, useAppState } from '../../store'
import { useNavigation, useRoute } from '@react-navigation/native';
import { IosScreenWrapper } from '../../components/ScreenWrapper';
import MainBottomNavbar from '../../components/Navigation/MainBottomNavbar';

export default function Activities() {
  const state = useAppState()
  const { setIsLoading } = useAppActions()
  const navigation = useNavigation();
  const route = useRoute(); 
  const routeData = route?.params;
  const backgroundImage = routeData?.image;

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
      <ScrollView>
      <SafeAreaView>
        <SpinnerLoader isLoading={state.isLoading} color={colors?.red} />
        <TopNavigation 
          color={colors?.white} 
          paddingHorizontal={30}
          width='110%'
          goBack
          noMenu
        />
        <ImageBackground
          source={backgroundImage}
          // resizeMode="stretch"
          style={styles.container}
        />
        
        <View style={{ height: '100%', margin: 0, padding: 0, backgroundColor: colors?.white, paddingBottom: Platform.OS === 'ios' ? 300 : 350, }}>
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
              <Text style={{ fontSize: 14, color: colors?.darkGray }}>{routeData?.title}</Text>
              <Text style={{ fontSize: 20, color: colors?.bgRed, fontWeight: 'bold' }}>{routeData?.titleDesc}</Text>
              <Text style={{ fontSize: 15, color: colors?.bgRed}}>{routeData?.time}</Text>
              <View style={{ marginVertical: 5, borderBottomWidth: .5, borderBottomColor: colors?.mediumGray, width: 35 }} />
              <Text style={{ fontSize: 15, color: colors?.mediumGray }}>
                {routeData?.typeDesc}
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
      </SafeAreaView>
        </ScrollView>
      <MainBottomNavbar />
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


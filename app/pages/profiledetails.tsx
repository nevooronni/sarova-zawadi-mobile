import React, { useState } from 'react'
import { IosScreenWrapper } from '../../components/ScreenWrapper'
import { SafeAreaView } from 'react-native-safe-area-context'
import TopNavigation from '../../components/Navigation/Top'
import colors from '../../styles/theme'
import { Image, ScrollView, StyleSheet } from 'react-native'
import { View } from 'react-native'
import { Text } from 'react-native'
import { imageUrl } from '../../constants/image'
import { profileTabsData, tabsData } from '../../constants/content'
import PointsHistory from './pointshistory'
import MyDetails from './mydetails'
import Preferences from './preferences'
import MainBottomNavbar from '../../components/Navigation/MainBottomNavbar'

export default function ProfileDetails() {
  const [active, setActive] = useState<string>('Points History')
  const [clicked, setClicked] = useState<boolean>(false)
  const [searchPhrase, setSearchPhrase] = useState<string>('')
  const userName = 'Abi Applessed' 
  const membershipPoints = `Zawadi Emarald Member - you have 5,000 points`
  const membershipNumber = `Membership Number - 5674000576`
  function setHandleClicked(value: boolean) {
    setClicked(value)
  }
  function setHandleSearchPhrase(value: string) {
    setSearchPhrase(value)
  }
  function setHandleActiveTab(value: string){
    setActive(value)
  }

  return (
    <IosScreenWrapper background={colors?.white}>
    <SafeAreaView>
      <TopNavigation 
        // backgroundColor={colors?.white}
        color={colors?.mediumGray} 
        paddingHorizontal={30}
        width='105%'
        goBack
        noMenu
      />
      <ScrollView>
      <View style={styles.container}>
        <View style={{ gap: 6, paddingVertical: 30, paddingHorizontal: 30, alignItems: 'center', }}>
          <Image
            source={imageUrl}
            style={{
              height: 80,
              width: 80,
              borderRadius: 65,
              marginBottom: 10
            }}
          />
          <Text style={{ color: colors?.shadeGreen, fontSize: 28, fontWeight: 'bold' }}>
            {userName}
          </Text>
          <Text style={{ color: colors?.shadeGreen, fontSize: 13, fontWeight: 'bold' }}>
            {membershipPoints}
          </Text>
          <Text style={{ color: colors?.shadeGreen, fontSize: 13, fontWeight: 'bold' }}>
            {membershipNumber}
          </Text>
          <TopNavigation 
            color={colors?.mediumGray} 
            paddingHorizontal={0}
            backgroundColor={colors?.white}
            width='100%'
            setClicked={setHandleClicked}
            tabsData={profileTabsData}
            clicked={clicked}
            activeTab={active}
            tabsColor={colors?.shadeGreen}
            setActiveTab={setHandleActiveTab}
            tabPaddingBottom={5}
            tabsPosition='relative'
            tabsTop={15}
            showTabs
            noNavbar
          />
          {active === 'Points History' ? <PointsHistory /> : null}
          {active === 'My Details' ? <MyDetails /> : null}
          {active === 'Preferences' ? <Preferences /> : null}
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
    paddingTop: 10,
    paddingBottom: 65,
    backgroundColor: colors?.white,
    height: '100%'
  },
})
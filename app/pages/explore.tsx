import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { IosScreenWrapper } from '../../components/ScreenWrapper'
import colors from '../../styles/theme'
import TopNavigation from '../../components/Navigation/Top'

export default function Explore() {
  const [active, setActive] = useState<string>('Hotels')
  const [clicked, setClicked] = useState<boolean>(false)
  const [searchPhrase, setSearchPhrase] = useState<string>('')
  function setHandleActiveTab(value: string){
    setActive(value)
  }
  function setHandleSearchPhrase(value: string) {
    setSearchPhrase(value)

  }
  function setHandleClicked(value: boolean) {
    setClicked(value)

  }
  const tabsData = [
    {
      id: 1,
      name: 'Hotels',
      screen: 'Hotels'
    },
    {
      id: 2,
      name: 'Restaurants',
      screen: 'Restaurants'
    },
    {
      id: 3,
      name: 'Tulia Spa',
      screen: 'Spa'
    },
    {
      id: 4,
      name: 'Concierge',
      screen: 'Concierge'
    },
  ]
  return (
    <SafeAreaView>
      <TopNavigation 
        color={colors?.mediumGray} 
        paddingHorizontal={30}
        backgroundColor={colors?.white}
        width='105%'
        placeholder='Hotels, Game Lodges, Resorts ...'
        setSearchPhrase={setHandleSearchPhrase}
        setClicked={setHandleClicked}
        searchPhrase={searchPhrase}
        tabsData={tabsData}
        clicked={clicked}
        activeTab={active}
        setActiveTab={setHandleActiveTab}
        showSearchBar
        showTabs
        goBack
      />
      <ScrollView>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
  },
})

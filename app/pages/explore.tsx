import React, { useState } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import colors from '../../styles/theme'
import TopNavigation from '../../components/Navigation/Top'
import { hotels, tabsData } from '../../constants/content'
import { HotelCard } from '../../components/Card'
import { Platform } from 'react-native';

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
      <ScrollView 
        style={{ backgroundColor: colors?.white }} 
        contentContainerStyle={{ 
          gap: 20,
          width: '100%',
          paddingTop: 250,
          paddingLeft: 20,
          alignItems: 'center',
        }}
      >
        {hotels?.map((hotel, i) => (
          <HotelCard
            key={i}
            name={hotel.name} 
            price={hotel.price}
            points={hotel.points}
            image={hotel.image}
            imageWidth={Platform.OS === 'ios' ? 340 : 305}
            imageHeight={330}
            borderRadius={20}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

import React, { useState } from 'react'
import { FlatList, SafeAreaView, ScrollView } from 'react-native'
import colors from '../../styles/theme'
import TopNavigation from '../../components/Navigation/Top'
import { hotels, tabsData } from '../../constants/content'
import { Platform } from 'react-native';
import { IosScreenWrapper } from '../../components/ScreenWrapper'
import HotelCard from '../../components/Card/hotelcard'

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
    <IosScreenWrapper background={colors?.white}>

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
        <FlatList
          removeClippedSubviews
          maxToRenderPerBatch={2}
          initialNumToRender={2}
          data={hotels}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ 
            // paddingTop: paddingTop, 
            // paddingBottom: paddingBottom,
            // paddingHorizontal: paddingHorizontal, 
            // paddingVertical: paddingVertical,
            gap: 20,
            width: '100%',
            paddingTop: 250,
            paddingBottom: Platform.OS === 'ios' ? 250 : 320,
            paddingLeft: 20,
            alignItems: 'center',
            backgroundColor: colors?.white
          }}      
          renderItem={({ item, index }) => {
            return (
              <HotelCard
                key={index}
                name={item?.name} 
                price={item?.price}
                points={item?.points}
                image={item?.image}
                imageWidth={Platform.OS === 'ios' ? 340 : 305}
                imageHeight={330}
                borderRadius={20}
              />
            )
          }}
        />
      </SafeAreaView>
    </IosScreenWrapper>
  )
}

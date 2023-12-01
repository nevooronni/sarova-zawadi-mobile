import React, { useState, useMemo } from 'react'
import { FlatList, SafeAreaView, Platform } from 'react-native'
import colors from '../../styles/theme'
import TopNavigation from '../../components/Navigation/Top'
import { hotels, tabsData } from '../../constants/content'
import { IosScreenWrapper } from '../../components/ScreenWrapper'
import HotelCard from '../../components/Card/hotelcard'
import RestaurantTab from './restaurants'
import SpaTab from './spa'
import ConciergeTab from './concierge'
import { ScrollView } from 'react-native-gesture-handler'
import MainBottomNavbar from '../../components/Navigation/MainBottomNavbar'

function HotelTab() {
  const hotelsData = useMemo(() => hotels, [hotels]);
  //@ts-ignore
  const keyExtractor = (item) => item.id

  const getItemLayout = (_, index: number) => ({
    length: 350, // Total height of each item, including margins
    offset: 350 * index, // Offset to the top of the current item
    index,
  })

  return(
    <FlatList
      data={hotelsData}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ 
        gap: 20,
        width: '100%',
        paddingTop: 250,
        paddingBottom: Platform.OS === 'ios' ? 350 : 420,
        paddingLeft: 20,
        alignItems: 'center',
        backgroundColor: colors?.white
      }}      
      keyExtractor={keyExtractor}
      getItemLayout={getItemLayout}
      showsVerticalScrollIndicator={false} 
      renderItem={({ item, index }) => {
        return (
          <HotelCard
            key={index}
            id={item?.id}
            name={item?.name} 
            price={item?.price}
            points={item?.points}
            image={item?.image}
            imageWidth={Platform.OS === 'ios' ? 330 : 300}
            imageHeight={330}
            borderRadius={20}
          />
        )
      }}
    />
  )
}

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
          noMenu
        />
        {active === 'Hotels' ? <HotelTab/> : null}
        {active === 'Restaurants' ? <RestaurantTab /> : null}
        {active === 'Tulia Spa' ? <SpaTab /> : null}
        {active === 'Concierge' ? <ConciergeTab /> : null}        
      </SafeAreaView>
      <MainBottomNavbar />
    </IosScreenWrapper>
  )
}

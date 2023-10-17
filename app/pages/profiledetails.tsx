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

interface History {
  id: number;
  date1: string;
  date2: string;
  title: string;
  type: string;
  points: string;
  positive?: boolean;
}

function PointsHistory (){
  const historyData: History[] = [
    {
      id: 1,
      date1: '03rd',
      date2: 'JAN 2018',
      title: 'Sarova Stanley',
      type: 'Accomodation',
      points: '-3000',
    },
    {
      id: 2,
      date1: '03rd',
      date2: 'JAN 2018',
      title: 'Sarova Panafric',
      type: 'F & B Lunch at Thorn Tree',
      points: '200',
      positive: true,
    },
    {
      id: 3,
      date1: '11th',
      date2: 'NAR 2018',
      title: 'Sarova Stanley',
      type: 'Spa Treatment',
      points: '300',
      positive: true,
    },
    {
      id: 4,
      date1: '13th',
      date2: 'MAR 2018',
      title: 'Sarova Maasai Mara',
      type: 'Redeemed for Spa Treatment',
      points: '-300',
    },

    {
      id: 5,
      date1: '13th',
      date2: 'MAR 2018',
      title: 'Sarova Maasai Mara',
      type: 'Redeemed Accommodation',
      points: '-2000',
    },
    {
      id: 6,
      date1: '11th',
      date2: 'NAR 2018',
      title: 'Sarova Stanley',
      type: 'Spa Treatment',
      points: '300',
      positive: true,
    },
  ]
  const History = ({ date1, date2, title, type, points, positive }: History) =>{
    return (
      <View style={{ 
            flexDirection: 'row', 
            justifyContent: 'space-between',
            borderTopWidth: .5, 
            borderTopColor: colors?.lightGray3,
            paddingVertical: 15,
          }}
        >
        <View style={{ justifyContent: 'flex-end' }}>
          <Text style={{ color: colors?.mediumGray, fontSize: 13 }}>{date1}</Text>
          <Text style={{ color: colors?.mediumGray, fontSize: 13 }}>{date2}</Text>
        </View>
        <View style={{ alignItems: 'flex-start', width: 170, paddingLeft: 6 }}>
          <Text style={{ color: colors?.mediumGray, fontSize: 17 }}>{title}</Text>
          <Text style={{ color: colors?.mediumGray, fontSize: 13 }}>{type}</Text>
        </View>
        <View>
           <Text style={{ color: positive ? colors?.shadeGreen : colors?.bgRed, fontSize: 15 }}>{points}</Text>
          <Text style={{ color:  positive ? colors?.shadeGreen : colors?.bgRed }}>Points</Text>
        </View>
      </View>
    )
  }
  return (
    <ScrollView>
      <View style={{ width: '100%', paddingHorizontal: 0, paddingTop: 15, paddingBottom: 260 }}>
        <View style={{ paddingVertical: 15 }}>
          <Text style={{ color: colors?.mediumGray }}>You only need 2,000 more points to become a <Text style={{ fontWeight: 'bold' }}>Diamond</Text> member</Text>
        </View>
        <View style={{ width: '100%' }}>
          {historyData?.map(history => (
            <History 
              key={history?.id}
              id={history?.id}
              date1={history?.date1}
              date2={history?.date2}
              title={history?.title}
              type={history?.type}
              positive={history?.positive}
              points={history?.points}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  )
}
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
  console.log("🚀 ~ file: profiledetails.tsx:63 ~ ProfileDetails ~ profileTabsData:", profileTabsData)

  return (
    <IosScreenWrapper background={colors?.white}>
    <SafeAreaView>
      <TopNavigation 
        // backgroundColor={colors?.white}
        color={colors?.mediumGray} 
        paddingHorizontal={30}
        width='105%'
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
        {/* </View>
        <TopNavigation 
          color={colors?.mediumGray} 
          paddingHorizontal={30}
          backgroundColor={colors?.white}
          width='105%'
          setClicked={setHandleClicked}
          tabsData={profileTabsData}
          clicked={clicked}
          activeTab={active}
          setActiveTab={setHandleActiveTab}
          showTabs
        /> */}
        {/* <TopNavigation 
          color={colors?.mediumGray} 
          paddingHorizontal={10}
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
        /> */}
        {active === 'Points History' ? <PointsHistory /> : null}
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
  </IosScreenWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 55,
    backgroundColor: colors?.white,
    height: '100%'
  },
})
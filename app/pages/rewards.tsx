import React, { useMemo, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import TopNavigation from '../../components/Navigation/Top'
import colors from '../../styles/theme'
import { IosScreenWrapper } from '../../components/ScreenWrapper'
import { Platform, Text, View, FlatList } from 'react-native'
import Carousel from '../../components/Carousel'
import SuccessModalPopup from '../../components/Modal'
import MainBottomNavbar from '../../components/Navigation/MainBottomNavbar'

export default function Rewards() {
  const navigation = useNavigation();

  interface HotelRestaurant {
    id: number;
    image: string;
    title: string;
    singlePoints?: string | undefined;
    doublePoints?: string | undefined;
    isLocked?: boolean | undefined;
  }
  const sarovaStanley: HotelRestaurant[] = [
    {
      id: 1,
      image: require('../../assets/images/Sarova_Stanley_Exterior_1.webp'),
      title: 'Sarova Stanley',
      singlePoints: 'Single Room for 2,100 points',
      doublePoints: 'Double Room for 2,500 points',
      isLocked: false,   
    },
    {
      id: 2,
      image: require('../../assets/images/Sarova_Mara_Game_Camp_Lobby.webp'),
      title: 'Sarova Mara',
      singlePoints: 'Single Room for 2,100 points',
      doublePoints: 'Double Room for 2,500 points', 
      isLocked: true,   
    },
    {
      id: 3,
      image: require('../../assets/images/Sarova_Panafric_exterior_1.webp'),
      title: 'Sarova Pnafric',
      singlePoints: 'Single Room for 2,100 points',
      doublePoints: 'Double Room for 2,500 points',  
      isLocked: true,     
    },
    {
      id: 4,
      image: require('../../assets/images/Sarova_Whitesands_Exteriors_11.webp'),
      title: 'Sarova Whitesands ',
      singlePoints: 'Single Room for 2,100 points',
      doublePoints: 'Double Room for 2,500 points',
      isLocked: true,   
    },
    {
      id: 5,
      image: require('../../assets/images/Sarova_Imperial_Exteriors_4.webp'),
      title: 'Sarova Imperial',
      singlePoints: 'Single Room for 2,100 points',
      doublePoints: 'Double Room for 2,500 points',
      isLocked: true,   
    },
    {
      id: 6,
      image: require('../../assets/images/Sarova_Woodlands_Exterior_5.webp'),
      title: 'Sarova Woodlands',
      singlePoints: 'Single Room for 2,100 points',
      doublePoints: 'Double Room for 2,500 points',
      isLocked: true,   
    },
  ]
  const hotelsData = [
    { id: 1, title: 'Sarova Hotels, Resorts & Lodges', data: sarovaStanley },
    { 
      id: 2, 
      title: 'Zawadi Member Experiences', 
      data: sarovaStanley
    },
  ]
  const sarovaData = useMemo(() => hotelsData, [hotelsData])
  const [isModalVisible, setModalVisible] = useState<boolean>(false)
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  }
  //@ts-ignore
  const renderSection = ({ item, index }) => {
    return (
     <View key={index} style={{ width: '100%', paddingLeft: 15 }}>
      <SuccessModalPopup isModalVisible={isModalVisible} toggleModal={toggleModal} isPointsModal />
      <Text style={{ color: colors?.mediumGray3, fontSize: 15, fontWeight: 'bold', marginLeft: 12, marginBottom: -10 }}>
        {item?.title}
      </Text>
      <Carousel 
        data={item?.data}
        paddingTop={30} 
        paddingBottom={10} 
        imageWidth={250}
        imageHeight={270}
        paddingHorizontal={10} 
        descWidth={215}
        fontSize={15}
        paddingTopCard={10}
        paddingBottomCard={12}
        paddingHorizontalBottomCard={15}
        bottomTextTitleColor={colors?.mediumGray4}
        alignSelfBottomCardText='flex-start'
        toggleModal={toggleModal}
        //@ts-ignore
        onPress={() => navigation.navigate('Restaurant', { id: item?.id, defaultRoute: 'Rewards' })}
      />
    </View>
    );
  };

  //@ts-ignore
  const keyExtractor = (item) => item.id

  const getItemLayout = (_, index: number) => ({
    length: 270, // Total height of each item, including margins
    offset: 270 * index, // Offset to the top of the current item
    index,
  })

  return (
    <IosScreenWrapper 
      background={colors?.white}
      // hidden={Platform.OS === 'ios'}
    >   
      <TopNavigation 
        color={colors?.mediumGray} 
        paddingTop={Platform.OS === 'ios' ? 35 : 15}     
        paddingHorizontal={30}
        width='105%'
        goBack
        noMenu
      />
      <View style={{ 
          paddingTop: 100, 
          borderWidth: .5, 
          borderColor: colors?.lightGray3,
          alignItems: 'flex-start',
          paddingBottom: 20, 
          paddingHorizontal: 35
        }}
      >
        <Text style={{ color: colors?.bgRed, fontSize: 20 }}>
          Redeem Your Points
        </Text>
      </View>
      <View style={{ 
        gap: 0, 
        paddingHorizontal: 0,
        paddingBottom: Platform.OS === 'ios' ? 450 : 520, 
      }}
      >
        <FlatList
          data={sarovaData}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ 
            gap: -15,
            width: '100%',
            paddingVertical: 30,
          }}      
          keyExtractor={keyExtractor}
          getItemLayout={getItemLayout}
          showsVerticalScrollIndicator={false} 
          renderItem={renderSection}
        />
      </View>
      <MainBottomNavbar />
    </IosScreenWrapper>
  )
}

import React, { useMemo, useState } from 'react'
import { Text, View, Platform, Pressable, SafeAreaView } from 'react-native'
import { useRoute } from '@react-navigation/native'
import colors from '../../styles/theme'
import TopNavigation from '../../components/Navigation/Top'
import { IosScreenWrapper } from '../../components/ScreenWrapper'
import { CarouselImageData, PanafricCarouselImageData, SarovaHillCarouselImageData, SarovaImperialCarouselImageData, SarovaMaraCarouselImageData, SarovaShabaCarouselImageData, WhitesandsCarouselImageData, WoodlandsCarouselImageData, roomsData, roomsData2, roomsData3, roomsData4, roomsData5, roomsData6, roomsData7, roomsData8 } from '../../constants/content'
import { BackgroundCarousel } from '../../components/Carousel'
import { loginStyles } from '../home'
import RoomCard from '../../components/Card/roomcard'
import { ScrollView } from 'react-native-gesture-handler'
import MainBottomNavbar from '../../components/Navigation/MainBottomNavbar';
import SpinnerLoader from '../../components/Loaders/Spinner'

export default function Hotel() {
  const route = useRoute() 
  const routeData = route?.params;
  console.log("🚀 ~ Hotel ~ routeData:", routeData)
  //@ts-ignore
  const { id } = route.params
  const [readmore, setReadmore] = useState<boolean>(false)
  const desc = routeData?.desc;
  //@ts-ignore
  const keyExtractor = (item) => item.id;
  const renderRoomsData = {
    'Sarova Stanley Nairobi': roomsData,
    'Sarova Panafric Nairobi': roomsData2,
    'Sarova Woodlands Hotel': roomsData3,
    'Sarova Whitesands Beach Resort': roomsData4,
    'Sarova Lion Hill Game Lodge': roomsData5,
    'Sarova Mara Game Camp': roomsData6,
    'Sarova Shaba Game Lodge': roomsData7,
    'Sarova Imperial, Kisumu': roomsData8,
  }

  const data = useMemo(() => renderRoomsData?.[routeData?.name], [renderRoomsData?.[routeData?.name]]);
  const getItemLayout = (_, index: number) => ({  
    length: 120, 


    offset: 100 * index, 
    index,
  });

  const renderCarouselImageData = {
    'Sarova Stanley Nairobi': CarouselImageData,
    'Sarova Panafric Nairobi': PanafricCarouselImageData,
    'Sarova Woodlands Hotel': WoodlandsCarouselImageData,
    'Sarova Whitesands Beach Resort': WhitesandsCarouselImageData,
    'Sarova Lion Hill Game Lodge': SarovaHillCarouselImageData,
    'Sarova Mara Game Camp': SarovaMaraCarouselImageData,
    'Sarova Shaba Game Lodge': SarovaShabaCarouselImageData,
    'Sarova Imperial, Kisumu': SarovaImperialCarouselImageData
  }
  const backgroundCarouselImageData = renderCarouselImageData?.[routeData?.name];

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <IosScreenWrapper background={colors?.white}>
        <SafeAreaView>
          <SpinnerLoader
            isLoading={true}
            color={colors?.red}
          />
        </SafeAreaView>
      </IosScreenWrapper>
    )
  }

  return (
    <IosScreenWrapper 
      background={colors?.bgRed}
      // hidden={Platform.OS === 'ios'}
    >   
      <TopNavigation 
        color={colors?.white} 
        paddingTop={Platform.OS === 'ios' ? 35 : 15}     
        paddingHorizontal={30}
        width='105%'
        goBack
        noMenu
      />
      <BackgroundCarousel data={backgroundCarouselImageData} />
        <ScrollView 
          style={{ backgroundColor: colors?.white, flex: 1, marginTop: -25, paddingTop: 20 }}
          showsVerticalScrollIndicator={false} 
        >
          <View style={{ backgroundColor: colors?.white, gap: 16, flex: 1, marginTop: -25, paddingTop: 20, paddingBottom: 100, paddingHorizontal: 30 }}>
            <View style={{ alignItems: 'flex-start' }}>
              <Text style={{ color: colors?.bgRed, fontSize: 19, fontWeight: 'bold' }}>{routeData?.name}</Text>
            </View>
            <View style={{ alignItems: 'flex-start' }}>
            <Pressable onPress={() => setReadmore(false)}>
              <Text style={{ color: colors?.mediumGray, }}>{desc ? readmore ? desc : `${desc?.slice(0,160)}...` : ''}{!readmore 
                ? <Pressable onPress={() => setReadmore(true)}><Text style={{ color: colors?.blue, fontWeight: 'bold', marginBottom: Platform.OS === 'ios' ? -3 : -5 }}>Read more</Text></Pressable> 
                : null}
              </Text>
            </Pressable>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 285 }}>
            <Pressable style={[loginStyles.loginButton, { height: 40, paddingVertical: 10, }]}>
              <Text style={loginStyles.loginText}>Map</Text>
            </Pressable>
            <Pressable style={[loginStyles.loginButton, { height: 40, paddingVertical: 10, }]}>
              <Text style={loginStyles.loginText}>Contact Us</Text>
            </Pressable>
          </View>
          <View style={{ marginVertical: 1, borderWidth: .25, borderColor: colors?.lightGray, }} />
          <View style={{ paddingTop: 0, gap: 10, paddingBottom: Platform.OS === 'ios' ? 280 : 320 }}>
            <Text style={{ color: colors?.darkGray, fontSize: 17, fontWeight: 'bold' }}>Rooms & Suites</Text>
            {data?.map(room => (
              <RoomCard 
                id={room?.id}
                key={room?.id}
                image={room?.image}
                title={room?.title}
                desc={room?.desc}
                price={room?.price}
              />
            ))}
          </View>
        </View>
      </ScrollView>
      <MainBottomNavbar />
    </IosScreenWrapper>
  )
}
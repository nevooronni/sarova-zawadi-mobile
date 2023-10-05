import React, { useMemo, useState } from 'react'
import { Text, View, Platform, Pressable } from 'react-native'
import { useRoute } from '@react-navigation/native'
import colors from '../../styles/theme'
import TopNavigation from '../../components/Navigation/Top'
import { IosScreenWrapper } from '../../components/ScreenWrapper'
import { CarouselImageData, roomsData } from '../../constants/content'
import { BackgroundCarousel } from '../../components/Carousel'
import { loginStyles } from '../home'
import RoomCard from '../../components/Card/roomcard'
import { ScrollView } from 'react-native-gesture-handler'

export default function Hotel() {
  const route = useRoute() 
  //@ts-ignore
  const { id } = route.params
  const [readmore, setReadmore] = useState<boolean>(false)
  const desc = 'Sarova Stanley Nairobi Guest rooms at Sarova Stanley offer a blend of Victorian elegance and comfort, combined with all the practical executive amenities of the Lorem ipsum test lorem ipsum text lorem ipsum text'
  //@ts-ignore
  const keyExtractor = (item) => item.id;
  const data = useMemo(() => roomsData, [roomsData]);
  const getItemLayout = (_, index: number) => ({  
    length: 120, 


    offset: 100 * index, 
    index,
  });

  return (
    <IosScreenWrapper 
      background={colors?.bgRed}
      hidden={Platform.OS === 'ios'}
    >   
      <TopNavigation 
        color={colors?.white} 
        paddingTop={Platform.OS === 'ios' ? 35 : 15}     
        paddingHorizontal={30}
        width='105%'
        goBack
      />
      <BackgroundCarousel data={CarouselImageData} />
        <ScrollView 
          style={{ backgroundColor: colors?.white, flex: 1, marginTop: -25, paddingTop: 20 }}
          showsVerticalScrollIndicator={false} 
        >
          <View style={{ backgroundColor: colors?.white, gap: 16, flex: 1, marginTop: -25, paddingTop: 20, paddingBottom: 100, paddingHorizontal: 30 }}>
            <View style={{ alignItems: 'flex-start' }}>
              <Text style={{ color: colors?.bgRed, fontSize: 19, fontWeight: 'bold' }}>Sarova Stanley Nairobi</Text>
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
          <View style={{ paddingTop: 0, gap: 10, paddingBottom: 260, }}>
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
    </IosScreenWrapper>
  )
}
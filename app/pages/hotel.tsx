import React from 'react'
import { StatusBar, StyleSheet, Dimensions, Text, View, Platform, ImageBackground, SafeAreaView } from 'react-native'
import { useRoute } from '@react-navigation/native'
import colors from '../../styles/theme'
import Carousel from 'react-native-reanimated-carousel'
import AnimatedDotsCarousel from 'react-native-animated-dots-carousel'
import { Image, ImageProps } from 'react-native'
import { CarouselImageData } from '../../constants/content'
import TopNavigation from '../../components/Navigation/Top'
import { IosScreenWrapper } from '../../components/ScreenWrapper'
import Constants from 'expo-constants';

export default function Hotel() {
  const route = useRoute()
  //@ts-ignore
  const { id } = route.params
  const width = Dimensions.get('window').width;
  const [index, setIndex] = React.useState<number>(0);
  const LENGTH = 6;

  const handleIndex = (index: number) => {
    setIndex(index)
  }

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
        <Carousel
          loop
          autoPlay
          pagingEnabled
          width={width}
          height={width / 1.35}
          data={CarouselImageData}
          autoPlayInterval={1500}
          scrollAnimationDuration={1700}
          onProgressChange={(_, absoluteProgress) => {
            handleIndex(Math.round(absoluteProgress));
          }}
          renderItem={({ item }: { item: ImageProps }) => (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
              }}
            >
              <Image
                style={{ width: '100%',  height: '100%' }}
                source={item}
              />
            </View>
          )}
        />
        <View style={{ position: 'relative', top: -30, left: '40%', width: '100%', height: 25, justifyContent: 'center', alignContent: 'center', paddingBottom: 0 }}>
          <AnimatedDotsCarousel
            length={LENGTH}
            currentIndex={index}
            maxIndicators={6}
            interpolateOpacityAndColor={true}
            activeIndicatorConfig={{
              color: colors?.white,
              margin: 3,
              opacity: 1,
              size: 8,
            }}
            inactiveIndicatorConfig={{
              color: colors?.lightGray3,
              margin: 3,
              opacity: 0.5,
              size: 8,
            }}
            decreasingDots={[
              {
                config: { 
                  color: colors?.lightGray3, 
                  margin: 3, 
                  opacity: 0.5, 
                  size: 8 
                },
                quantity: 1,
              },
              {
                config: { 
                  color: colors?.lightGray3, 
                  margin: 3, 
                  opacity: 0.5, 
                  size: 8 
                },
                quantity: 1,
              },
            ]}
          />
        </View>
        <View style={{ backgroundColor: colors?.white, flex: 1, marginTop: -25 }}>

        </View>
    </IosScreenWrapper>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors?.white,
//   },
// });

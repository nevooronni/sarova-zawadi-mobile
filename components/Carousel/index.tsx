import React from 'react'
import { ImageProps, StyleSheet, View, Text, FlatList, Pressable, Dimensions, } from 'react-native';
import colors from '../../styles/theme';
import { Image } from 'expo-image';
import { Shadow } from 'react-native-shadow-2';
import { useNavigation } from '@react-navigation/native';
import ReanimatedCarousel from 'react-native-reanimated-carousel'
import AnimatedDotsCarousel from 'react-native-animated-dots-carousel'
import { blurhash } from '../../constants/image'

export function BackgroundCarousel({ data }: { data: ImageProps[]}){
  const width = Dimensions.get('window').width;
  const [index, setIndex] = React.useState<number>(0);
  const handleIndex = (index: number) => {
    setIndex(index)
  }

  return (
    <>
      <ReanimatedCarousel
        loop
        autoPlay
        pagingEnabled
        width={width}
        height={width / 1.5}
        data={data}
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
              placeholder={blurhash}
            />
          </View>
        )}
      />
      <View style={{ position: 'relative', top: -30, left: '40%', width: '100%', height: 25, justifyContent: 'center', alignContent: 'center', paddingBottom: 0 }}>
          <AnimatedDotsCarousel
            length={data?.length}
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
    </>
  )
}
interface Data {
  id: number;
  image: string;
  title: string;
}

export default function Carousel({ data, isLoading, paddingTop, paddingBottom, paddingHorizontal, paddingVertical, imageWidth, imageHeight, borderRadius, fontSize, paddingTopCard, paddingBottomCard }: {
  data: Data[],
  isLoading?: boolean,
  paddingHorizontal?: number,
  paddingVertical?: number,
  paddingTop?: number,
  paddingBottom?: number,
  imageWidth?: number | undefined,
  imageHeight?: number | undefined,
  borderRadius?: number | undefined,
  fontSize?: number | undefined;
  paddingTopCard?: number | undefined;
  paddingBottomCard?: number | undefined;
}) {
  const navigation = useNavigation();
  return (
    <FlatList
      horizontal
      data={data}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[{ 
        paddingTop: paddingTop, 
        paddingBottom: paddingBottom,
        paddingHorizontal: paddingHorizontal, 
        paddingVertical: paddingVertical 
      }]}      
      renderItem={({ item, index }) => {
        return (
          
          <Pressable
            key={index}
            //@ts-ignore
            onPress={() => navigation.navigate('Activities')}
            style={carouselStyles.pressable}
          >
            <Shadow>
              <View style={{  alignItems: "center", justifyContent: "center", borderRadius: borderRadius || 25, }}>
                <View style={{ backgroundColor: "#eee", borderRadius: borderRadius || 25, overflow: "hidden" }}>
                  <View>
                    <Image
                      style={[carouselStyles.image, 
                        { width: imageWidth ? imageWidth : 220, 
                          height: imageHeight ? imageHeight : 220,
                        } 
                      ]}
                      source={item?.image}
                      transition={1000}
                    />
                  </View>
                  <View style={{ paddingTop: paddingTopCard || 20, paddingBottom: paddingBottomCard || 25, backgroundColor: colors?.white }}>
                    <Text style={[carouselStyles.text, { fontSize: fontSize }]}>
                      {item?.title ? item?.title?.slice(0,20) : '-'}
                    </Text>
                  </View>
                </View>
              </View>
            </Shadow>
          </Pressable>

        )
      }}
    />
  )
}

export const carouselStyles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  pressable:{
    paddingTop: 0,
    paddingBottom: 25,
    marginTop: 0,
    marginRight: 25,
    justifyContent: 'flex-start',
    borderRadius: 25,
  },
  image: {
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    width: 220, 
    height: 220, 
    marginTop: -34,
  },
  text: { 
    alignSelf: 'center',
    color: colors?.lightGray,
    fontWeight: 'bold',
    fontSize: 15
  },
});

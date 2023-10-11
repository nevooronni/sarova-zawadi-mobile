import React, { useState } from 'react'
import { ImageProps, StyleSheet, View, Text, FlatList, Pressable, Dimensions, FlexAlignType, Platform, } from 'react-native';
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
  desc: string;
}

export default function Carousel({ 
  data, 
  onPress,
  descWidth,
  isLoading, 
  paddingTop, 
  paddingBottom, 
  paddingHorizontal, 
  paddingVertical, 
  imageWidth, 
  imageHeight, 
  borderRadius, 
  fontSize, 
  paddingTopCard, 
  paddingBottomCard, 
  alignSelfBottomCardText, 
  bottomTextTitleColor,
  paddingHorizontalBottomCard, 
}: {
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
  alignSelfBottomCardText?: FlexAlignType | undefined;
  bottomTextTitleColor?: string | undefined;
  paddingHorizontalBottomCard: number | undefined;
  descWidth: number | string | undefined;
  onPress?: (() => void | undefined);
}) {
  const navigation = useNavigation();
  const [readmore, setReadmore] = useState<boolean>(false)
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
            onPress={onPress ? () => onPress() : () => navigation.navigate('Activities')}
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
                  <View style={{ paddingTop: paddingTopCard || 20, paddingBottom: paddingBottomCard || 25, paddingHorizontal: paddingHorizontalBottomCard, backgroundColor: colors?.white }}>
                    <Text style={[carouselStyles.text, { fontSize: fontSize, alignSelf: alignSelfBottomCardText || 'center', color: bottomTextTitleColor  || colors?.lightGray }]}>
                      {item?.title ? item?.title?.slice(0,20) : '-'}
                    </Text>
                    {item?.desc && <Pressable onPress={() => setReadmore(false)} style={{ width: '100%', marginTop: 5 }}>
                      <Text style={{ color: colors?.mediumGray4, flexWrap: 'wrap', width: descWidth, fontSize: 12 }}>{item?.desc ? readmore ? item?.desc : `${item?.desc?.slice(0,55)}...` : ''}{!readmore 
                        ? <Pressable 
                            // onPress={() => setReadmore(true)} 
                          >
                            <Text style={{ fontSize: 12, color: colors?.blue, fontWeight: 'bold', marginBottom: Platform.OS === 'ios' ? -3 : -4 }}>
                              Read more
                            </Text>
                          </Pressable> 
                        : null}
                      </Text>
                    </Pressable>}
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

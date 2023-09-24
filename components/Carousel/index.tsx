import React from 'react'
import { StyleSheet, View, Text, FlatList, Pressable } from 'react-native';
import colors from '../../styles/theme';
import { Image } from 'expo-image';
import { Shadow } from 'react-native-shadow-2';
import { useNavigation } from '@react-navigation/native';

interface Data {
  id: number;
  image: string;
  title: string;
}

export default function Carousel({ data, isLoading, paddingTop, paddingBottom, paddingHorizontal, paddingVertical, imageWidth, imageHeight, borderRadius }: {
  data: Data[],
  isLoading?: boolean,
  paddingHorizontal?: number,
  paddingVertical?: number,
  paddingTop?: number,
  paddingBottom?: number,
  imageWidth?: number | undefined,
  imageHeight?: number | undefined,
  borderRadius?: number | undefined
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
                <View style={{ backgroundColor: "#eee", borderRadius: 25, overflow: "hidden" }}>
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
                  <View style={{ paddingTop: 20, paddingBottom: 25, backgroundColor: colors?.white }}>
                    <Text style={carouselStyles.text}>
                      {item?.title ? item?.title?.slice(0,20) : '-'}
                    </Text>
                  </View>
                </View>
              </View>
            </Shadow>
          </Pressable>

        );
      }}
    />
  );
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

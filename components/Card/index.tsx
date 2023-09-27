import { Image } from 'expo-image'
import React from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import colors from '../../styles/theme';
import { carouselStyles } from '../Carousel';
import {Hotel } from '../../constants/content'
import { Shadow } from 'react-native-shadow-2';

interface Card {
  imageWidth?: number;
  imageHeight?: number;
  title: string;
  desc: string;
  borderRadius?: number;
  image: string;
};

export function HotelCard({
  name, 
  price, 
  points,
  image,
  imageWidth, 
  imageHeight,
  borderRadius
}:Hotel):JSX.Element{
  return(
    <Pressable
      //@ts-ignore
      // onPress={() => navigation.navigate('Activities')}
      style={[carouselStyles.pressable, { borderRadius: 25 }]}>
      <Shadow>
        <View style={{  alignItems: "center", justifyContent: "center", borderRadius: 25 }}>
          <View style={{ backgroundColor: "#eee", borderRadius: 25, overflow: "hidden" }}>
            <View>
              <Image
                style={[carouselStyles.image, 
                  { width: imageWidth ? imageWidth : 220, 
                    height: imageHeight ? imageHeight : 220,
                  } 
                ]}
                source={image}
                transition={1000}
              />
            </View>
            <View style={{ paddingTop: 20, paddingBottom: 10, paddingHorizontal: 20, backgroundColor: colors?.white }}>
              <Text style={{ color: colors?.bgRed, fontWeight: 'bold', fontSize: 18 }}>
                {name ? name : '-'}
              </Text>
            </View>
            <View style={{ 
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                paddingTop: 0, 
                paddingBottom: 25, 
                backgroundColor: colors?.white 
              }}
            >
              <Text style={[carouselStyles.text, { color: colors?.darkGray3, fontSize: 12, }]}>
                {price ? price : '-'}
              </Text> 
              <Text style={[carouselStyles.text, { fontSize: 12 }]}>
                |
              </Text>
              <Text style={[carouselStyles.text, { fontSize: 12, color: colors?.bgRed, fontWeight: 'normal' }]}>
                {points ? points : '-'}
              </Text>
            </View>
          </View>
        </View>
      </Shadow>
    </Pressable>
  )
}

export default function Card({ imageWidth, imageHeight, title, desc, borderRadius, image }: Card):JSX.Element {
  return (
    <View style={{  alignItems: "center", justifyContent: "center", borderRadius: borderRadius || 25, }}>
      <View style={{ backgroundColor: "#eee", borderRadius: 25, overflow: "hidden" }}>
        <View>
          <Image
            style={[carouselStyles.image, 
              { width: imageWidth ? imageWidth : 220, 
                height: imageHeight ? imageHeight : 220,
              } 
            ]}
            source={image}
            transition={1000}
          />
        </View>
        <View style={{ gap: 4, paddingHorizontal: 25, paddingTop: 20, paddingBottom: 25, backgroundColor: colors?.white }}>
          <Text style={[carouselStyles.text, { alignSelf: 'flex-start', fontWeight: 'normal' }]}>
            {title ? title?.slice(0,25) : '-'}
          </Text>
          <Text style={cardStyles.desc}>
            {desc ? desc?.slice(0,30) : '-'}
          </Text>
        </View>
      </View>
    </View>
  )
}

const cardStyles = StyleSheet.create({
  desc: {
    ...carouselStyles.text,
    color: colors?.bgRed,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    fontSize: 18
  }
});


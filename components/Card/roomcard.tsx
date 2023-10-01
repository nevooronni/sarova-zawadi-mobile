import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'expo-image'
import { blurhash } from '../../constants/image'
import { ImageProps } from "react-native";
import colors from '../../styles/theme';
import { Shadow } from 'react-native-shadow-2'

export interface RoomCard {
  id?: number;
  title: string;
  desc: string;
  price: string;
  image: ImageProps | Readonly<ImageProps>;
  imageWidth?: number | undefined;
  imageHeight?: number | undefined;
}

export default function RoomCard({ 
  image, 
  title, 
  desc, 
  price,
  imageWidth,
  imageHeight,
}:RoomCard):JSX.Element {
  return (
    <Shadow offset={[0,10]} paintInside={false} style={{ borderRadius: 10 }}>
    <View style={[roomCardStyles?.box, {  height: imageHeight ? imageHeight : 100, }]}
    >
        <View>
          <Image
            style={ 
              { 
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                width: imageWidth ? imageWidth : 120, 
                height: imageHeight ? imageHeight : 100,
              } 
            }
            source={image}
            placeholder={blurhash}
          />
        </View>
        <View style={{ justifyContent: 'center', paddingHorizontal: 15, gap: 5 }}>
          <Text style={{ color: colors?.bgRed, fontWeight: 'bold' }}>{title}</Text>
          <Text style={{ width: 169, color: colors?.mediumGray, fontSize: 12 }}>{desc?.length > 50 ? `${desc?.slice(0,50)}...` : desc}</Text>
          <Text style={{ fontSize: 13, color: colors?.mediumGray, fontWeight: 'normal' }}>{price}</Text>
        </View>
    </View>
      </Shadow>
  )
}

const roomCardStyles = StyleSheet.create({
  box: {
    flexDirection: 'row', 
      borderRadius: 8,
      marginVertical: 10,
      borderColor: colors?.lightGray,  
    // ...Platform.select({
    //   ios: {
    //     shadowColor: 'rgba(0, 0, 0, 0.5)',
    //     shadowOffset: { width: 0, height: 2 },
    //     shadowOpacity: 0.8,
    //     shadowRadius: 4,
    //   },
    //   android: {
    //     elevation: 91, // This adds elevation for shadow on Android
    //   },
    // }),
  }
})

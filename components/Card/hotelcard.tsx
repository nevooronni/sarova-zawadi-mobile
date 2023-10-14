// import { Image } from 'expo-image'
import React from 'react'
import { Pressable, Text, View, Image } from 'react-native'
import { Shadow } from 'react-native-shadow-2'
import { carouselStyles } from '../Carousel'
import colors from '../../styles/theme'
import { Hotel } from '../../constants/content'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function HotelCard({
  id,
  name, 
  price, 
  points,
  image,
  imageWidth, 
  imageHeight,
  borderRadius,
  pointsColor,
  button,
  namePaddingBottom,
  pointsFontSize,
  navigateTo,
}:Hotel):JSX.Element{
  const navigation = useNavigation();
  return(
    <Pressable
      //@ts-ignore
      onPress={() => navigation.navigate(navigateTo || 'Hotel', { id: id })}
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
              />
            </View>
            <View style={{ paddingTop: 20, paddingBottom: namePaddingBottom || 10, paddingHorizontal: 20, backgroundColor: colors?.white }}>
              <Text style={{ color: colors?.bgRed, fontWeight: 'bold', fontSize: 18 }}>
                {name ? name : '-'}
              </Text>
            </View>
            <View 
              style={{ 
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 20,
                paddingTop: 0, 
                paddingBottom: 15, 
                backgroundColor: colors?.white 
              }}
            >
              {price ? <Text style={[carouselStyles.text, { color: colors?.darkGray3, fontSize: 12, }]}>
                {price}
              </Text>  : null}
              {price ? <Text style={[carouselStyles.text, { fontSize: 12 }]}>
                |
              </Text> : null}
              <Text style={[carouselStyles.text, { fontSize: pointsFontSize || 12,  color: pointsColor || colors?.bgRed, fontWeight: 'normal' }]}>
                {points ? points : '-'}
              </Text>
            </View>
          </View>
          {button && 
            <View 
            style={{ 
              marginTop: -10,
                paddingTop: 0,
                paddingBottom: 15, 
                backgroundColor: colors?.white,
                paddingHorizontal: 15, 
                width: '95%',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                borderRadius: 25
              }}
            >
            <TouchableOpacity style={{ paddingVertical: 5, backgroundColor: colors?.bgRed, borderRadius: 8, width: 100, height: 30, alignItems: 'center' }}>
              <Text style={{ color: colors?.white, fontSize: 13 }}>{button}</Text>
            </TouchableOpacity>
          </View>}
        </View>
      </Shadow>
    </Pressable>
  )
}

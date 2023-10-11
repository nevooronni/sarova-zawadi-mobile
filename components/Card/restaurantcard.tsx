import React from 'react'
import { Pressable, Text, View, Image } from 'react-native'
import { Shadow } from 'react-native-shadow-2'
import { carouselStyles } from '../Carousel'
import colors from '../../styles/theme'
import { Hotel } from '../../constants/content'
import { useNavigation } from '@react-navigation/native'

export default function RestaurantCard({
  id,
  name, 
  price, 
  points,
  image,
  imageWidth, 
  imageHeight,
  borderRadius
}:Hotel):JSX.Element{
  const navigation = useNavigation();
  return(
    <Pressable
      //@ts-ignore
      onPress={() => navigation.navigate('Hotel', { id: id })}
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
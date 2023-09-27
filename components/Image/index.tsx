import React from 'react'
import FastImage from 'react-native-fast-image'

interface Style { 
  borderTopRightRadius?: number; 
  brderTopLeftRadius?: number; 
  width?: number; 
  height?: number; 
  marginTop?: number;
}
interface Image {
  src: string;
  style: Style[];
}
export default function LazyLoadExpoImage({
  src,
  style,
}: Image) {
  return (
    <FastImage
      style={style}
      source={{
          uri: src,
          priority: FastImage.priority.normal,
      }}
      resizeMode={FastImage.resizeMode.contain}
    />
  )
}

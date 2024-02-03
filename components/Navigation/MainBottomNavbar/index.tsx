import React, { useEffect, useState } from "react"
import { Platform, StyleSheet, TouchableOpacity, View, Dimensions, Image, PixelRatio } from "react-native"
import { loginStyles } from "../../../app/home"
import { FontAwesome } from "@expo/vector-icons"
import colors from "../../../styles/theme";
import { Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useAppActions, useAppState } from "../../../store";
import SuccessModalPopup from "../../Modal";
import { navigationMenu } from "../../../constants/navigation";
import { initialWindowMetrics } from 'react-native-safe-area-context'

const usableHeight = Platform.OS === 'ios' ? initialWindowMetrics?.frame?.height - initialWindowMetrics?.insets?.top - initialWindowMetrics?.insets?.bottom : initialWindowMetrics?.frame?.height
// console.log("🚀 ~ file: index.tsx:14 ~ usableHeight:", usableHeight)
const screenHeightInPixels = PixelRatio.getPixelSizeForLayoutSize(Dimensions.get('window').height);
// console.log("🚀 ~ file: index.tsx:13 ~ screenHeightInPixels:", screenHeightInPixels)
const screenHeight = Dimensions.get('screen').height;
// console.log("🚀 ~ file: index.tsx:13 ~ screenHeight:", screenHeight)

export default function MainBottomNavbar() {
  const navigation = useNavigation();
  const route = useRoute(); 
  const defaultRoute = route?.params?.defaultRoute;
  const currentRouteName: string = route.name;
  const profileRoutes = ['Activities', 'Restaurant', 'MyProfile', 'ProfileDetails', 'MyStays', 'TellAFriend']
  return (
    <View style={styles.container}>
      <View style={{ 
          width: '100%',
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'space-around' 
        }}
      > 
        {navigationMenu?.map(menu => (
          <TouchableOpacity
            key={menu?.id}
            style={styles?.iconButton}
            onPress={() => navigation.navigate(menu?.link)}
          >
            <Image
              style={styles?.image}
              source={currentRouteName === menu?.name || (profileRoutes?.some(route => route === currentRouteName) && menu?.name === defaultRoute)
                ? menu?.logoActive
                : menu?.logoInactive}
            />
            <Text style={{ fontSize: 11, color: colors?.mediumGray}}>
              {menu?.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute', 
    // bottom: Platform.OS === 'ios' ? (110 * 2.19) : (110 * 2.5), 
    // bottom: Platform.OS === 'ios' ? (110 * 2.19) : 0, 
    // bottom: 0, 
    // bottom: screenHeight,
    bottom: Platform.OS === 'ios' ? 135 : '25%' ,
    left: 0, 
    right: 0,
    zIndex: 1,
    paddingTop: Platform.OS === 'ios' ? 10 : 10,
    paddingBottom: 10,
    paddingHorizontal: 15,
    width: '100%',
    height: Platform.OS === 'ios' ? '20%' : 125,
    backgroundColor: colors?.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderTopWidth: .5,
    borderTopColor: colors?.lightGray3,
  },
  image: {
    height: 23,
    width: 23,
    marginBottom: 6,
  },
  iconButton: {
    // height: 35,
    // width: 35,
    margin: 0,
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: 'transparent'
  }
})

import React, { useEffect, useState } from "react"
import { Platform, StyleSheet, TouchableOpacity, View, Dimensions, Image } from "react-native"
import { loginStyles } from "../../../app/home"
import { FontAwesome } from "@expo/vector-icons"
import colors from "../../../styles/theme";
import { Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useAppActions, useAppState } from "../../../store";
import SuccessModalPopup from "../../Modal";
import { navigationMenu } from "../../../constants/navigation";

const screenHeight = Dimensions.get('window').height;

export default function MainBottomNavbar({ }) {
  const navigation = useNavigation();
  const route = useRoute(); 
  const currentRouteName: string = route.name;

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
              source={currentRouteName === menu?.name 
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
    bottom: Platform.OS === 'ios' ? (110 * 2.19) : (110 * 2.5), 
    left: 0, 
    right: 0,
    zIndex: 1,
    paddingTop: Platform.OS === 'ios' ? 12 : 20,
    paddingBottom: 45,
    paddingHorizontal: 15,
    width: '100%',
    height: 110,
    backgroundColor: colors?.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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

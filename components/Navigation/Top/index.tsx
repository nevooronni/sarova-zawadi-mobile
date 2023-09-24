import React from 'react'
import { DimensionValue, StyleSheet, View } from 'react-native'
import { SimpleLineIcons } from "@expo/vector-icons";
import colors from '../../../styles/theme';
import { useNavigation } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDrawerStatus } from '@react-navigation/drawer';

export default function TopNavigation({ 
  color, 
  paddingHorizontal,
  paddingVertical,
  goBack,
  width,
  backgroundColor,
 }: { 
  color: string,
  paddingHorizontal?: number,
  paddingVertical?: number,
  goBack?: boolean,
  backgroundColor?: string;
  width?: DimensionValue | undefined,
}) {
  const navigation = useNavigation();
  const navStatus = useDrawerStatus();

  return (
      <View style={[styles.container, 
        { 
          width: width,
          paddingHorizontal: paddingHorizontal,
          paddingVertical: paddingVertical,
          backgroundColor: backgroundColor || 'transparent',
          justifyContent: goBack ? 'space-between'  : 'flex-end'
        }]}
      >
        {goBack && <SimpleLineIcons.Button 
          name='arrow-left' 
          size={22} 
          color={color} 
          backgroundColor='transparent'
          underlayColor='transparent'
          //@ts-ignore
          onPress={() => navigation.goBack()}
        />}
        {navStatus === 'closed' ? <SimpleLineIcons.Button 
          name='menu' 
          size={22} 
          color={color} 
          backgroundColor='transparent'
          underlayColor='transparent'
          //@ts-ignore
          onPress={() => navigation.openDrawer()}
        /> : null}
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute', 
    top: 0, 
    left: 0, 
    right: 0,
    zIndex: 1,
    // minWidth: 420,
    paddingTop: 15,
    paddingBottom: 15,
    width: '100%',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
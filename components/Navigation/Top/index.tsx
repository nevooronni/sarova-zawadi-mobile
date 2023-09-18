import React from 'react'
import { StyleSheet, View } from 'react-native'
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
 }: { 
  color: string,
  paddingHorizontal?: number,
  paddingVertical?: number,
  goBack?: string,
}) {
  const navigation = useNavigation();
  const navStatus = useDrawerStatus();

  return (
      <View style={[styles.container, 
        { 
          paddingHorizontal: paddingHorizontal,
          paddingVertical: paddingVertical,
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
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
})
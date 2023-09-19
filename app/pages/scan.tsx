import React, { useState } from 'react'
import { ScrollView, StyleSheet, View, Text, Pressable } from 'react-native'
import TopNavigation from '../../components/Navigation/Top'
import colors from '../../styles/theme'
import * as ImagePicker from 'expo-image-picker'
import { loginStyles } from '../home'
import { Image } from 'expo-image';

export default function Scan():JSX.Element {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
    } else {
      alert('You did not select any image.')
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flex:1,  }}>
        <View style={styles.container}>
          <TopNavigation 
            color={colors?.white} 
            paddingHorizontal={30}
            width='110%'
            goBack
          />
          <Text style={{ color: colors?.white, fontSize: 17, marginTop: 20 }}>Scan Text Code to earn points</Text>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center', backgroundColor: colors?.white, height: 400 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '80%', paddingTop: 20 }}>
            <Pressable
              style={[loginStyles.loginButton, { alignSelf: 'center', marginTop: 5 }]}
              onPress={pickImageAsync}
            >
             <Text style={loginStyles.loginText}>Choose a photo</Text>
            </Pressable>
            <Pressable
              style={[loginStyles.loginButton, { alignSelf: 'center', marginTop: 5 }]}
              onPress={pickImageAsync}
            >
             <Text style={loginStyles.loginText}>Take a photo</Text>
            </Pressable>
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Image
              source={selectedImage}
              style={{
                height:300,
                width: 280,
                borderRadius: 5
              }}
            />
          </View>
        </View>
        <View style={{ 
          backgroundColor: colors?.white, 
          borderTopWidth: .5, 
          paddingVertical: 50,
          borderColor: colors?.mediumGray,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={{ color: colors?.mediumGray, fontSize: 15 }}>Can't scan the code? exit and</Text>
          <Text style={{ color: colors?.mediumGray, fontSize: 15 }}>relauch the app</Text>
          <Pressable
            onPress={() => {}}
          >
            <Text style={{ marginTop: 30, color: colors?.bgRed, fontSize: 15, fontWeight: 'bold' }}>Exit</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 15,
    paddingBottom: 5,
    backgroundColor: colors?.bgRed,
  },
  
})

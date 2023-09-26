import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, View, Text, Pressable, Button } from 'react-native'
import TopNavigation from '../../components/Navigation/Top'
import colors from '../../styles/theme'
import * as ImagePicker from 'expo-image-picker'
import { loginStyles } from '../home'
import { Image } from 'expo-image';
import SuccessModalPopup from '../../components/Modal'
import SpinnerLoader from '../../components/Loaders/Spinner'
import { useAppActions, useAppState } from '../../store'
import { IosScreenWrapper } from '../../components/ScreenWrapper'


export default function Scan():JSX.Element {
  const state = useAppState()
  const { setIsLoading } = useAppActions()
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('media library permission is required to take a photo.');
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('Camera permission is required to take a photo.');
      }
    })();
  }, []);

  useEffect(() => {
    if (selectedImage) {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
        toggleModal()
        setSelectedImage(null)
      }, 3500)
    }
  }, [selectedImage]);

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

  const takePhoto = async () => {
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <IosScreenWrapper background={colors?.bgRed}>
    <View style={{ flex: 1 }}>
      <SpinnerLoader isLoading={state.isLoading} color={colors?.red} />
      <SuccessModalPopup isModalVisible={isModalVisible} toggleModal={toggleModal} />
      <TopNavigation 
        color={colors?.white} 
        paddingHorizontal={20}
        width='105%'
        backgroundColor={colors?.bgRed}
        goBack
      />
      <ScrollView contentContainerStyle={{ flex:1,  }}>
        <View style={styles.container}>
          <Text style={{ color: colors?.white, fontSize: 17, marginTop: 20 }}>Scan Text Code to earn points</Text>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center', backgroundColor: colors?.white, height: 450 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '80%', paddingTop: 20 }}>
            <Pressable
              style={[loginStyles.loginButton, { alignSelf: 'center', marginTop: 5 }]}
              onPress={pickImageAsync}
            >
             <Text style={loginStyles.loginText}>Choose a photo</Text>
            </Pressable>
            <Pressable
              style={[loginStyles.loginButton, { alignSelf: 'center', marginTop: 5 }]}
              onPress={takePhoto}
            >
             <Text style={loginStyles.loginText}>Take a photo</Text>
            </Pressable>
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Image
              source={selectedImage}
              style={{
                height:330,
                width: 280,
                borderRadius: 5
              }}
            />
          </View>
        </View>
        <View style={{ 
          backgroundColor: colors?.white, 
          borderTopWidth: .5, 
          paddingTop: 20,
          paddingBottom: 50,
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
    </IosScreenWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
    paddingBottom: 5,
    backgroundColor: colors?.bgRed,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5, 
  },
  bullet: {
    marginRight: 5, 
    fontSize: 14, 
  },
  itemText: {
    fontSize: 14, 
  },
})

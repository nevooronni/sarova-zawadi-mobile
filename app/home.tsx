import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground, Dimensions, Modal, Pressable, Platform } from 'react-native';
import { Image } from 'expo-image';
import colors from '../styles/theme';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from "expo-router";
// import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
// import { IosScreenWrapper } from '../components/ScreenWrapper';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const backgroundImage = require('../assets/images/sarova_exterior_home.jpeg')

export default function Home():JSX.Element {
  const router = useRouter()
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <View style={loginStyles.backgroundContainer}>
      <ImageBackground
        source={backgroundImage}
        resizeMode='cover'
        style={loginStyles.container}
        // imageStyle={{ resizeMode: 'cover', alignSelf: "flex-start" }}
      > 
        <WhyJoinModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
        {!modalVisible ? 
          <>
            <Image
              source={require('../assets/images/sarova-hotels-logo_white.png')}
              style={{
                height: 90,
                width: 170,
                marginTop: '0%'
              }}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '45%', paddingTop: '45%', paddingHorizontal: 25 }}>
              <TouchableOpacity
                style={loginStyles.joinButton}
                onPress={() => router.replace('/auth/join')}
              >
                <Text style={loginStyles.joinText}>Join</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={loginStyles.loginButton}
                onPress={() => router.replace('/auth/login')}
              >
                <Text style={loginStyles.loginText}>Sign in</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={{ marginTop: Platform.OS === 'ios' ? '10%' : '5%' }}
            >
              <Text style={loginStyles.whyText}>Why Join?</Text>
            </TouchableOpacity> 
          </>
        : null}
      </ImageBackground>
    </View>
  );
}

function WhyJoinModal({ modalVisible, setModalVisible }:
   { 
    modalVisible: boolean;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>
   }):JSX.Element {
    const router = useRouter()
    const iconsSize = 18
    const iconColor = colors?.lightGray
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        // Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}
    >
      <View style={loginStyles.centeredView}>
        <View style={loginStyles.modalView}>
          <FontAwesome 
            name='close' 
            size={iconsSize} 
            color={iconColor} 
            style={{ marginBottom: 10, marginTop: -15, color: colors?.mediumGray, }} 
            // onPress={() => setModalVisible(!modalVisible)}
          />
          <Text style={loginStyles.modalHeader}>Experience More Benefits, </Text>
          <Text style={loginStyles.modalHeader}>Priviledges and Rewards</Text>
          <Text style={loginStyles.modalHeaderDesc}>Members can earn redeem and enjoy exclusive benefits at all our sarova brands country wide.</Text>
          <Text style={loginStyles.modalSubHeader}>Priviledges and Rewards</Text>
          <Text style={loginStyles.modalText}>Members can earn redeem and enjoy exclusive benefits at all our sarova brands country wide.</Text>
          <Text style={loginStyles.modalSubHeader}>Points on the go</Text>
          <Text style={loginStyles.modalText}>Earn points is as simple as staying at any of our Sarova Hotels. Resorts and Game lodges. You can earn points on all eligible offerings</Text>
          <Text style={loginStyles.modalSubHeader}>Time to treat yourself</Text>
          <Text style={loginStyles.modalText}>Use your points for free nights at our hotels, dinner at any of our restaurants, VIP access and more.</Text>
          <Pressable onPress={() => router.replace('/auth/join')} style={[loginStyles.loginButton, { alignSelf: 'center', marginTop: 5 }]}>
            <Text style={loginStyles.loginText}>Join</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

export const loginStyles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: Constants.statusBarHeight,
    backgroundColor: 'red',
  },
  container: {
    flex: 1,
    position: 'absolute',
    // top: -5,
    // top: 0,
    // width: 1340,
    // height: 870,
    // width: 400,
    width: '215%',
    height: 860,
    transform: [{ scaleX: 1 }],
    // backgroundPositionY: 110,
    // backgroundPositionX: 110,
    justifyContent: 'center',
    alignItems: 'center',
  },
  joinButton: {
    backgroundColor: 'white',
    width: 135,
    paddingHorizontal: 5,
    paddingVertical: 14,
    borderRadius: 6,
  },
  loginButton: {
    backgroundColor: colors?.red,
    paddingHorizontal: 5,
    paddingVertical: 14,
    borderRadius: 6,
    width: 135,
  },
  joinText: {
    color: 'red',
    alignSelf: 'center',
    // fontWeight: '500',
    fontSize: 14,
  },
  loginText: {
    color: 'white',
    alignSelf: 'center',
    // fontWeight: '500',
    fontSize: 14,
  },
  whyText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: '500',
    marginTop: 42,
    fontSize: 12,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    // height: '70%',
    width: '86%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 30,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalHeader: {
    textAlign: 'left',
    color: colors?.red,
    fontSize: 19,
    fontWeight: '500',
  },
  modalSubHeader: {
    textAlign: 'left',
    fontSize: 19,
    fontWeight: '500',
    marginTop: 16,
    marginBottom: 5,
  },
  modalHeaderDesc: {
    marginTop: 15,
    fontSize: 12,
    color: colors?.mediumGray,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'left',
    color: '#726c6d',
  },
})



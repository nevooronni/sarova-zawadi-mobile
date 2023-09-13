import React, { useState } from 'react';
import { Text, SafeAreaView, View, Platform, RefreshControl, StyleSheet, Button, TouchableOpacity, ImageBackground, Dimensions, Modal, Pressable } from 'react-native';
import colors from '../styles/theme';
import { FontAwesome } from '@expo/vector-icons';
import { Link, useRouter } from "expo-router";

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const backgroundImage = require('../assets/images/sarova-background.png/')

export default function Home():JSX.Element {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <SafeAreaView>
      <View>
        <WhyJoinModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
        <ImageBackground
          source={backgroundImage}
          resizeMode="stretch"
          style={styles.container}
        > 
          {!modalVisible ? 
            <>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', paddingTop: 520 }}>
                <TouchableOpacity
                  style={styles.joinButton}
                  onPress={() => {}}
                >
                  <Text style={styles.joinText}>Join</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.loginButton}
                  onPress={() => {}}
                >
                  <Text style={styles.loginText}>Sign in</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.whyText}>Why Join?</Text>
              </TouchableOpacity> 
            </>
          : null}
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

function WhyJoinModal({ modalVisible, setModalVisible }:
   { 
    modalVisible: boolean;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
   }):JSX.Element {
    const router = useRouter()
    const iconsSize = 18
    const iconColor = 'gray'
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
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <FontAwesome 
            name='close' 
            size={iconsSize} 
            color={iconColor} 
            style={{ marginBottom: 10 }} 
            onPress={() => setModalVisible(!modalVisible)}
          />
          <Text style={styles.modalHeader}>Experience More Benefits, </Text>
          <Text style={styles.modalHeader}>Priviledges and Rewards</Text>
          <Text style={styles.modalHeaderDesc}>Members can earn redeem and enjoy exclusive benefits at all our sarova brands country wide.</Text>
          <Text style={styles.modalSubHeader}>Priviledges and Rewards</Text>
          <Text style={styles.modalText}>Members can earn redeem and enjoy exclusive benefits at all our sarova brands country wide.</Text>
          <Text style={styles.modalSubHeader}>Points on the go</Text>
          <Text style={styles.modalText}>Earn points is as simple as staying at any of our Sarova Hotels. Resorts and Game lodges. You can earn points on all eligible offerings</Text>
          <Text style={styles.modalSubHeader}>Time to treat yourself</Text>
          <Text style={styles.modalText}>Use your points for free nights at our hotels, dinner at any of our restaurants, VIP access and more.</Text>
          <Pressable onPress={() => router.replace('/auth/join')} style={[styles.loginButton, { alignSelf: 'center', marginTop: 5 }]}>
            <Text style={styles.loginText}>Join</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  joinButton: {
    backgroundColor: 'white',
    width: 140,
    paddingHorizontal: 5,
    paddingVertical: 14,
    borderRadius: 6,
    fontSize: 18,
  },
  loginButton: {
    backgroundColor: colors?.red,
    width: 140,
    paddingHorizontal: 5,
    paddingVertical: 14,
    borderRadius: 6,
  },
  joinText: {
    color: 'red',
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: 17,
  },
  loginText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: 17,
  },
  whyText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: '500',
    marginTop: 50,
    fontSize: 16,
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
    padding: 35,
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



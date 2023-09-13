import React, { useState } from 'react';
import { Text, SafeAreaView, View, Platform, RefreshControl, StyleSheet, Button, TouchableOpacity, ImageBackground, Dimensions, Modal, Pressable, TextInput } from 'react-native';
import colors from '../../styles/theme';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import WPTextInput from '../../components/Input/WPTextInput';
import { loginStyles } from '../home';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const backgroundImage = require('../../assets/images/sarova-background.png/')

export default function Join():JSX.Element {
  const router = useRouter()
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  return (
    <SafeAreaView>
      <View style={{ padding: 30, gap: 20 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <Text style={{ color: colors?.red, fontSize: 28, fontWeight: 'normal' }}>Join</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <WPTextInput
            label='First Name'
            placeholder='Enter first name'
            value={text}
            width='46%'
            onChangeText={onChangeText}
          />
          <WPTextInput
            width='46%'
            label='First Name'
            onChangeText={onChangeNumber}
            value={number}
            placeholder='Enter last name'
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <WPTextInput
            label='Country/Region'
            placeholder='Enter country/region'
            value=''
            width='100%'
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <WPTextInput
            label='Email Address'
            placeholder='Enter email address'
            value=''
            width='100%'
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <WPTextInput
            label='ID/Passport Number'
            placeholder='Enter ID/passport number'
            value=''
            width='100%'
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <WPTextInput
            label='Password'
            placeholder='Enter password'
            value=''
            width='100%'
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <WPTextInput
            label='Confirm Password'
            placeholder='Enter confirm password'
            value=''
            width='100%'
          />
        </View>
        <View>
          <Text style={{ color: 'gray', fontSize: 10, fontWeight: 'normal' }}>
            By signing up. I agree to sarova Hotel's Terms & Data Privacy Terms
          </Text>
        </View>
        <View>
          <Pressable onPress={() => router.replace('/auth/join')} style={[styles.loginButton, { alignSelf: 'center', marginTop: 5 }]}>
            <Text style={loginStyles.loginText}>Join</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
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



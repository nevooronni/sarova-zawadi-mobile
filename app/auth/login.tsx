import React from 'react';
import { StatusBar, Text, SafeAreaView, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Image } from 'expo-image';
import { useForm } from "react-hook-form"
import colors from '../../styles/theme';
import { useRouter } from "expo-router";
import WPTextInput from '../../components/Input/WPTextInput';
import { loginStyles } from '../home';
import { useAppActions, useAppState } from '../../store';
import SpinnerLoader from '../../components/Loaders/Spinner';
import { IosScreenWrapper } from '../../components/ScreenWrapper';

// import { StatusBar } from 'expo-status-bar';
// import { setIsLoading, } from '../../store';

type FormData = {
  first_name: string
  last_name: string
  country_region: string
  email: string
  id_passport: string
  password: string
  confirm_password: string
}

export default function Login():JSX.Element {
  const state = useAppState()
  const { setIsLoading } = useAppActions()
  const { control, handleSubmit, setValue, formState: { errors }} = useForm<FormData>()
  const router = useRouter()

  React.useEffect(() => {
    if (state.email) setValue('email', state.email)
  }, [state.email])

  React.useEffect(() => {
    if (state.email) setValue('email', state.email)
  }, [state.email])

  const onSubmit = (data: FormData) => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      router.replace('/pages/landing')
    }, 3000)
  }
  const imageUrl = require('../../assets/images/sarova-hotels-logo_white.png')

  return (
    <IosScreenWrapper>
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{flex:1}}>
      <View style={styles.container}>
        <SpinnerLoader
          isLoading={state.isLoading}
          color={colors?.red}
        />
        <Image
          style={styles.image}
          source={imageUrl}
          contentFit='contain'
          transition={1000}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 45 }}>
          <WPTextInput
            name='email'
            placeholder='Enter email address'
            control={control}
            errors={errors}
            errorMessage='email is required'
            isRequired
            width='100%'
            customStyles={{ height: 50, color: colors?.red }}
            customRequiredStyles={{ color: colors?.white }}
            placeholderTextColor={colors?.red}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 25 }}>
          <WPTextInput
            name='password'
            placeholder='Enter password'
            control={control}
            errors={errors}
            errorMessage='password is required'
            isRequired
            width='100%'
            customStyles={{ height: 50, color: colors?.red }}
            customRequiredStyles={{ color: colors?.white }}
            placeholderTextColor={colors?.red}
            secureTextEntry //to later implement eye icon
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Text style={{ color: colors?.white, fontSize: 14, fontWeight: 'normal' }}>
            Forgot Password?
          </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 30 }}>
          <TouchableOpacity
              style={styles.joinButton}
              onPress={() => router.replace('/auth/join')} 
            >
            <Text style={styles.joinText}>Join</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={styles.loginButton}
              onPress={handleSubmit(onSubmit)} 
              >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </View>
    </IosScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors?.bgRed,
    justifyContent: 'flex-start', 
    paddingTop: 120,
    paddingHorizontal: 35, 
    gap: 18, 
    height: '100%',
  },
  joinButton: {
    backgroundColor: 'transparent',
    borderColor: colors?.white,
    borderWidth: 1,
    paddingHorizontal: 5,
    paddingVertical: 14,
    borderRadius: 6,
    width: 135,
  },
  joinText: {
    color: colors?.white,
    fontSize: 18,
    alignSelf: 'center',
  },
  loginButton: {
    backgroundColor: colors?.darkRed,
    paddingHorizontal: 5,
    paddingVertical: 14,
    borderRadius: 6,
    width: 135,
  },
  loginText: {
    color: colors?.white,
    fontSize: 18,
    alignSelf: 'center',
  },
  image: {
    width: 160,
    height: 160,
    alignSelf: 'center',
    // backgroundColor: '#0553',
    backgroundColor: 'transparent',
  },
})



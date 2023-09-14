import React from 'react';
import { Text, SafeAreaView, View, Dimensions, TouchableOpacity, Platform } from 'react-native';
import { useForm } from "react-hook-form"
import colors from '../../styles/theme';
import { useRouter } from "expo-router";
import WPTextInput from '../../components/Input/WPTextInput';
import { loginStyles } from '../home';
import { ScrollView } from 'react-native-gesture-handler';
import { useAppState } from '../../store';
// import { setIsLoading, } from '../../store';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

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
  const { control, handleSubmit, formState: { errors }} = useForm<FormData>()
  const router = useRouter()
  const onSubmit = (data: FormData) => {
    // setIsLoading({ isLoading: true })

    // setTimeout(() => {
    //   setIsLoading({ isLoading: false })
    //   // router.replace('/auth/login')
    // }, 3000)
  }

  return (
    <SafeAreaView>
      <View style={{ justifyContent: 'center', paddingHorizontal: 28, gap: 18, height: '100%' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <Text style={{ color: colors?.red, fontSize: 28, fontWeight: 'normal' }}>Login</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <Text style={{ color: colors?.red, fontSize: 28, fontWeight: 'normal' }}>
            {state?.userFullName ? `Welcome ${state?.userFullName}` : ''}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <WPTextInput
            name='first_name'
            label='First Name'
            placeholder='Enter first name'
            control={control}
            errors={errors}
            errorMessage='* First name is required'
            isRequired
            width='46%'
          />
          <WPTextInput
            name='last_name'
            label='Last Name'
            placeholder='Enter first name'
            control={control}
            errors={errors}
            errorMessage='* Last name is required'
            isRequired
            width='46%'
          />
        </View>
        <TouchableOpacity
            style={[loginStyles.loginButton, , { alignSelf: 'center', marginTop: 5 }]}
            // onPress={() => setIsLoading(true)} 
          >
          <Text style={loginStyles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}



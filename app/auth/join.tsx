import React from 'react';
import { Text, SafeAreaView, View, Dimensions, TouchableOpacity, Platform } from 'react-native';
import { useForm } from "react-hook-form"
import colors from '../../styles/theme';
import { useRouter } from "expo-router";
import WPTextInput from '../../components/Input/WPTextInput';
import { loginStyles } from '../home';
import { ScrollView } from 'react-native-gesture-handler';
import { useAppActions, useAppState } from '../../store';
import SpinnerLoader from '../../components/Loaders/Spinner';

type FormData = {
  first_name: string
  last_name: string
  country_region: string
  email: string
  id_passport: string
  password: string
  confirm_password: string
}

export default function Join():JSX.Element {
  const state = useAppState()
  const { setIsLoading, setFullName, setEmail } = useAppActions()
  const { control, handleSubmit, formState: { errors }} = useForm<FormData>()
  const router = useRouter()
  const onSubmit = (data: FormData) => {
    setIsLoading(true)
    setFullName(data?.first_name)
    setEmail(data?.email);

    setTimeout(() => {
      setIsLoading(false)
      router.replace('/auth/login')
    }, 3000)
  }

  return (
    <SafeAreaView>
      <SpinnerLoader
        isLoading={state.isLoading}
        color={colors?.red}
      />
      <ScrollView
        contentContainerStyle={{
          paddingTop: Platform.select({ ios: 30 }),
          paddingBottom: 20,
        }}
      >
      <View style={{ justifyContent: 'center', paddingHorizontal: 28, gap: 18, height: '100%' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <Text style={{ color: colors?.red, fontSize: 28, fontWeight: 'normal' }}>Join</Text>
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
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <WPTextInput
            name='country_region'
            label='Country/Region'
            placeholder='Enter country/region'
            control={control}
            errors={errors}
            errorMessage='* country/region is required'
            isRequired
            width='100%'
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <WPTextInput
            name='email'
            label='Email Address'
            placeholder='Enter email address'
            control={control}
            errors={errors}
            errorMessage='* email is required'
            isRequired
            width='100%'
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <WPTextInput
            name='id_passport'
            label='ID/Passport Number'
            placeholder='Enter ID/passport number'
            control={control}
            errors={errors}
            errorMessage='* id/passport is required'
            isRequired
            width='100%'
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <WPTextInput
            name='password'
            label='Password'
            placeholder='Enter password'
            control={control}
            errors={errors}
            errorMessage='* password is required'
            isRequired
            width='100%'
            secureTextEntry //to later implement eye icon
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <WPTextInput
            name='confirm_password'
            label='Confirm Password'
            placeholder='Enter confirm password'
            control={control}
            errors={errors}
            errorMessage='* confirm password is required'
            isRequired
            width='100%'
            secureTextEntry //to later implement eye icon
          />
        </View>
        <View>
          <Text style={{ color: 'gray', fontSize: 10, fontWeight: 'normal' }}>
            By signing up. I agree to sarova Hotel's Terms & Data Privacy Terms
          </Text>
        </View>
        <View>
          <TouchableOpacity
            style={[loginStyles.loginButton, , { alignSelf: 'center', marginTop: 5 }]}
            onPress={handleSubmit(onSubmit)} 
          >
            <Text style={loginStyles.loginText}>Join</Text>
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity
            style={[loginStyles.loginButton, , { alignSelf: 'center', marginTop: 5 }]}
            onPress={handleSubmit(onSubmit)} 
          >
          <Text style={loginStyles.loginText}>Test store</Text>
        </TouchableOpacity> */}
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}



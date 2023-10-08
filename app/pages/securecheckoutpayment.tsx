import React, { useMemo, useState } from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { IosScreenWrapper } from '../../components/ScreenWrapper'
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import TopNavigation from '../../components/Navigation/Top'
import colors from '../../styles/theme'
import { cards } from '../../constants/content'
import WPTextInput from '../../components/Input/WPTextInput'
import { useForm } from 'react-hook-form'
import { loginStyles } from '../home'
import WPSelectInput from '../../components/Input/WPSelectInput'
import { useAppActions, useAppState } from '../../store'

type CheckoutFormData = {
  name: string;
  cardNo: number;
  exp: string;
  year: number;
  cvv: string;
}

export default function SecureCheckoutPayment() {
  const state = useAppState()
  const { setIsLoading } = useAppActions()
  const [selectedLanguage, setSelectedLanguage] = useState();
  const { control, handleSubmit, formState: { errors }} = useForm<CheckoutFormData>()
  const navigation = useNavigation();
  const route = useRoute() 
  //@ts-ignore
  const routeId = route?.params?.id
  const cardsData = useMemo(() => cards, [cards]);
  const months: string[] = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
  const years: string[] = ["2026", "2025", "2024", "2023"]

  const handleBookNow = () => {
    setIsLoading(true)
    setTimeout(() => { 
      setIsLoading(false)
      //@ts-ignore
      navigation.navigate('SuccessBooking' , { message1: 'You have successfully', message2: ' redeemed 3,000 points.', checkIn: true })
    }, 2000)
  }

  return (
    <IosScreenWrapper background={colors?.white}>
      <SafeAreaView>
        <TopNavigation 
          backgroundColor={colors?.white}
          color={colors?.mediumGray} 
          paddingHorizontal={30}
          width='105%'
          goBack
        />
        <ScrollView 
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            <View style={{ width: '100%', alignItems: 'flex-start' }}>
              <Text style={{ color: colors?.bgRed, fontSize: 20 }}>
                Secure Checkout
              </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
              {cardsData?.map(card => (
                <View 
                  key={card?.id}
                  style={{ 
                    borderWidth: .5, 
                    borderColor: colors?.lightGray3,
                    padding: 5,
                    borderRadius: 10
                  }}
                >
                  <Image
                    style={{ width: 30, height: 30  }}
                    source={card?.src}
                    resizeMode='contain'
                  />
                </View>
              ))}
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
              <WPTextInput
                name='name'
                label='Cardholder name'
                placeholder='Enter card name'
                control={control}
                errors={errors}
                errorMessage='card name is required'
                isRequired
                width='100%'
                labelStyles={{ color: colors?.mediumGray, fontWeight: 'bold' }}
                customStyles={{ height: 50, color: colors?.mediumGray }}
                customRequiredStyles={{ color: colors?.bgRed }}
                placeholderTextColor={colors?.mediumGray}
              />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
              <WPTextInput
                name='cardNo'
                label='Debit/Credit card number'
                placeholder='Enter card no'
                control={control}
                errors={errors}
                keyboardType='numeric'
                errorMessage='card no is required'
                isRequired
                width='100%'
                labelStyles={{ color: colors?.mediumGray, fontWeight: 'bold' }}
                customStyles={{ height: 50, color: colors?.mediumGray }}
                customRequiredStyles={{ color: colors?.bgRed }}
                placeholderTextColor={colors?.mediumGray}
              />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
              <WPSelectInput 
                name='months'
                label='Expiry Date'
                isRequired
                width='45%'
                data={months}
                searchPlaceHolder='Month'
                errorMessage='Expiry month is required'
                labelStyles={{ color: colors?.mediumGray, fontWeight: 'bold' }}
                customStyles={{ height: 50, color: colors?.mediumGray }}
              />
              <WPSelectInput 
                name='years'
                label='Expiry Date'
                isRequired
                width='45%'
                data={years}
                searchPlaceHolder='Year'
                errorMessage='Expiry year is required'
                labelStyles={{ color: colors?.mediumGray, fontWeight: 'bold' }}
                customStyles={{ height: 50, color: colors?.mediumGray }}
              />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <WPTextInput
                name='cvv'
                label='CVV Code'
                placeholder='Enter cvv'
                control={control}
                errors={errors}
                keyboardType='numeric'
                errorMessage='cvv is required'
                isRequired
                width={120}
                labelStyles={{ color: colors?.mediumGray, fontWeight: 'bold' }}
                customStyles={{ height: 50, color: colors?.mediumGray }}
                customRequiredStyles={{ color: colors?.bgRed }}
                placeholderTextColor={colors?.mediumGray}
              />
            </View>
            <View>
              <Text style={{ color: colors?.blue }}>Important information about your booking</Text>
            </View>
            <View style={{ width: '100%', alignItems: 'center' }}>
              <Pressable 
                  style={[loginStyles.loginButton, 
                    { height: 45, width: 125, paddingVertical: 13, 
                  }]}
                  //@ts-ignore
                  onPress={handleBookNow}
                >
                <Text style={[loginStyles.loginText,  { fontSize: 13 }]}>Pay</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </IosScreenWrapper>
  )
}


const styles = StyleSheet.create({
  container: {
    gap: 30,
    paddingTop: 50,
    paddingHorizontal: 35,
    paddingBottom: 355,
    backgroundColor: colors?.white,
    height: '100%',
    alignItems: 'flex-start'
  },
})

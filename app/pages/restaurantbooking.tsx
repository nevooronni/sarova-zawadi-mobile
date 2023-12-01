import React, { useEffect, useState } from 'react'
import DateRangePicker from "rn-select-date-range"
import { IosScreenWrapper } from '../../components/ScreenWrapper'
import { SafeAreaView, StyleSheet, Text } from 'react-native'
import TopNavigation from '../../components/Navigation/Top'
import { ScrollView } from 'react-native'
import { View } from 'react-native'
import colors from '../../styles/theme'
import moment from "moment";
import { FontAwesome } from '@expo/vector-icons'
import { loginStyles } from '../home'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Pressable } from 'react-native'
import { DateRange } from './booking'
import WPTextInput from '../../components/Input/WPTextInput'
import { useForm } from 'react-hook-form'
import WPSelectInput from '../../components/Input/WPSelectInput'
import SuccessModalPopup from '../../components/Modal'
import { useAppActions, useAppState } from '../../store'
import SpinnerLoader from '../../components/Loaders/Spinner'
import axios from 'axios';

type CheckoutFormData = {
  time: string;
  additional_details: number;
}

export default function RestaurantBooking() {
  const state = useAppState()
  const { setIsLoading } = useAppActions()
  const { control, handleSubmit, watch, formState: { errors }} = useForm<CheckoutFormData>()
  console.log("🚀 ~ file: restaurantbooking.tsx:32 ~ RestaurantBooking ~ watch:", watch())
  const navigation = useNavigation();
  const [selectedRange, setRange] = useState<DateRange>({
    firstDate: '',
    secondDate: '',
  });
  const parseDateToday = moment() 
  const parsedFirstDate = selectedRange?.firstDate ? moment(selectedRange?.firstDate) : parseDateToday
  const formattedFirstDate = parsedFirstDate.format("ddd, DD MMM")
  const parsedSecondDate = selectedRange?.secondDate ? moment(selectedRange?.secondDate) : parseDateToday
  const formattedSecondDate = parsedSecondDate.format("ddd, DD MMM")

  const [adults, setAdults] = useState<number>(0)
  const [children, setChildren] = useState<number>(0)
  const [scheduledTime, setTime] = useState('')
  const [additionalDetails, setAdditionalTime] = useState('')
  // console.log("🚀 ~ file: restaurantbooking.tsx:48 ~ RestaurantBooking ~ scheduledTime:", scheduledTime)
  const route = useRoute() 
  //@ts-ignore
  const routeId = route?.params?.id
  const time: string[] = ["8.00am", "9.00am", "10.00am", "11.00am", "12.00p.m", "13.00p.m", "14.00p.m", "15.00p.m", "16.00p.m", "17.00p.m", "18.00p.m", "19.00p.m"]
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const sendReservationEmail = async () => {
    setIsLoading(true)
    const restaurantName = 'Thorn Tree Cafe'
    const userFullName = state?.userFullName
    const hotelName = 'Sarova Stanley Hotels & Resort Kenya'
    const emailHeading = 'Sarova Hotels & Resorts head office'
    const hotelManager = 'Andrew Kibe'
    const serviceId = process.env.EXPO_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.EXPO_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.EXPO_PUBLIC_EMAILJS_PUBLIC_KEY
    const privateKey = process.env.EXPO_PUBLIC_EMAILJS_PRIVATE_KEY
    const baseUrl = process.env.EXPO_PUBLIC_EMAILJS_BASE_URL
    const messageBody = `

    Please find the attached templates, confirming the booking at the restaurant:

    Subject: Reservation Confirmation for ${userFullName} at ${restaurantName}
    
    Dear ${hotelManager},
    
    We are delighted to confirm the reservation at ${restaurantName} for the following details:
    
    Name: ${userFullName}
    Date: ${formattedSecondDate}
    Time: ${scheduledTime}
    Number of Guests: ${adults + ' adults'}  ${children + 'children'}
    
    Please provide them with the best possible experience!
    
    Best regards,
    
    ${hotelManager}
    Hotel Manager
    ${restaurantName}
    +2547 712 345 678
    `
    const payload = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      accessToken: privateKey,
      template_params: {
        from_name: emailHeading,
        to_name: hotelManager,
        message: messageBody,
      }
    }

    try {
      const headers = { "Content-Type": "application/json" }
      const { status } = await axios.post(`${baseUrl}/email/send`, payload, { headers });
      if(status === 200) {
        setIsLoading(false)
        toggleModal()
        setTimeout(() => {
          navigation.navigate('Home')
        }, 500)
      }
    } catch (error) {
      console.error('error in axios Post-->', error?.response?.data)
      setIsLoading(false)
    }    
  }

  return (
    <IosScreenWrapper background={colors?.white}>
      <SafeAreaView>
        <SpinnerLoader isLoading={state.isLoading} color={colors?.red} />
        <SuccessModalPopup isModalVisible={isModalVisible} toggleModal={toggleModal} />
        <TopNavigation 
          backgroundColor={colors?.white}
          color={colors?.mediumGray} 
          paddingHorizontal={30}
          width='105%'
          goBack
          noMenu
        />
        <ScrollView 
          showsVerticalScrollIndicator={false}
        >
          <View style={[styles.container, { gap: 20 }]}>
            <View>
              <Text style={{ color: colors?.bgRed, fontSize: 20 }}>
                Thorn Tree Cafe Booking
              </Text>
            </View>
            <View style={{ 
                width: '100%', 
                flex: 1,    
                paddingVertical: 0,            
                borderTopWidth: .5, 
                borderTopColor: colors?.lightGray3, 
                borderBottomWidth: .5, 
                borderBottomColor: colors?.lightGray3, 
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View style={styles.container2}>
                <DateRangePicker
                  clearBtnTitle=''
                  confirmBtnTitle=''
                  onSelectDateRange={(range) => {
                    setRange(range);
                  }}
                  blockSingleDateSelection={true}
                  responseFormat="YYYY-MM-DD"
                  // maxDate={moment().subtract(1, "days")}
                  minDate={moment()}
                  selectedDateContainerStyle={styles.selectedDateContainerStyle}
                  selectedDateStyle={styles.selectedDateStyle}
                /> 
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
              <WPSelectInput 
                name='time'
                isRequired
                width={300}
                data={time}
                control={control}
                errors={errors}
                onChange={setTime}
                searchPlaceHolder='Time'
                errorMessage='Expiry month is required'
                iconColor={colors?.lightGray3}
                labelStyles={{ color: colors?.mediumGray, fontWeight: 'bold' }}
                customStyles={{ height: 50, color: colors?.lightGray3, borderColor:  colors?.lightGray3 }}
              />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
              <WPTextInput
                name='additional_details'
                placeholder='Additional details'
                control={control}
                errors={errors}
                errorMessage='card no is required'
                isRequired
                width={300}
                height={80}
                onChange={(e) => setAdditionalTime(e)}
                labelStyles={{ color: colors?.mediumGray, fontWeight: 'bold' }}
                customStyles={{ height: 50, color: colors?.mediumGray, borderColor: colors?.lightGray3 }}
                customRequiredStyles={{ color: colors?.bgRed }}
                placeholderTextColor={colors?.mediumGray}
              />
            </View>
            <View style={{ 
                gap: 20,
                alignItems: 'center', 
                width: '100%', 
                paddingVertical: 20,
              }}
            >
              <View style={{ 
                  width: 310,
                  flexDirection: 'row', 
                  alignItems: 'center', 
                  justifyContent: 'space-around' 
                }}
              > 
                 <Pressable
                  style={styles?.iconButton}
                  onPress={() => adults < 1 ? () => {} : setAdults(adults - 1)}
                >
                  <FontAwesome
                    name='minus' 
                    size={12} 
                    color={colors?.bgRed}
                  />
                </Pressable>
                <Text style={{ fontSize: 18, color: colors?.mediumGray }}>
                  {`${adults} Adults`}
                </Text>
                <Pressable
                  style={styles?.iconButton}
                  onPress={() => setAdults(adults + 1)}
                >
                  <FontAwesome
                    name='plus' 
                    size={12} 
                    color={colors?.bgRed}
                  />
                </Pressable>
              </View>
              <View style={{ 
                  width: 300,
                  flexDirection: 'row', 
                  alignItems: 'center', 
                  justifyContent: 'space-around' 
                }}
              > 
                <Pressable
                  style={styles?.iconButton}
                  onPress={() => children < 1 ? () => {} : setChildren(children - 1)}
                >
                  <FontAwesome
                    name='minus' 
                    size={12} 
                    color={colors?.bgRed}
                  />
                </Pressable>
                <Text style={{ fontSize: 18, color: colors?.mediumGray }}>
                  {`${children} Children`}
                </Text>
                <Pressable
                  style={styles?.iconButton}
                  onPress={() => setChildren(children + 1)}
                >
                  <FontAwesome
                    name='plus' 
                    size={12} 
                    color={colors?.bgRed}
                  />
                </Pressable>
              </View>
            </View>
            <View style={{ width: '100%', alignItems: 'center', paddingTop: 15, paddingBottom: 55 }}>
              <Pressable 
                style={[loginStyles.loginButton, 
                  { height: 45, width: 175, paddingVertical: 14, 
                }]}
                 //@ts-ignore
                onPress={sendReservationEmail} 
              >
                <Text style={[loginStyles.loginText, { fontWeight: 'bold' }]}>Confirm Booking</Text>
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
    paddingTop: 70,
    paddingBottom: 355,
    backgroundColor: colors?.white,
    height: '100%',
    alignItems: 'center'
  },
  container2: {
    margin: 10,
    width: '90%',
    paddingVertical: 0,            
  },
  selectedDateContainerStyle: {
    height: 45,
    width: 45,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'transparent',
    borderColor: colors?.bgRed,
    borderWidth: .5,
    borderRadius: 50,
    marginBottom: 5
  },
  selectedDateStyle: {
    fontWeight: "bold",
    color: colors?.bgRed,
  },
  iconButton: {
    height: 35,
    width: 35,
    borderWidth: .5,
    borderRadius: 60,
    margin: 0,
    alignItems: 'center', 
    justifyContent: 'center',
    borderColor: colors?.bgRed,
    backgroundColor: 'transparent'

  }
})

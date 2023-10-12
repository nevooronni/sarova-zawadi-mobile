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

type CheckoutFormData = {
  time: string;
  additional_details: number;
}

export default function RestaurantBooking() {
  const state = useAppState()
  const { setIsLoading } = useAppActions()
  const { control, handleSubmit, formState: { errors }} = useForm<CheckoutFormData>()
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

  const [adults, setAdults] = useState<number>(0);
  const [children, setChildren] = useState<number>(0);
  const route = useRoute() 
  //@ts-ignore
  const routeId = route?.params?.id
  const time: string[] = ["8.00am", "9.00am", "10.00am", "11.00am", "12.00a.m", "13.00a.m", "14.00a.m", "15.00a.m", "16.00a.m", "17.00a.m", "18.00a.m", "19.00a.m"]
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    if (state.isLoading) {
      setTimeout(() => {
        setIsLoading(false)
        toggleModal()
      }, 3500)
      setTimeout(() => {
        navigation.navigate('Home')
      }, 2500)
    }
  }, [state.isLoading]);

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
                onPress={() => setIsLoading(true)} 
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

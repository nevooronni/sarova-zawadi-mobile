import React, { useState } from 'react'
import DateRangePicker from "rn-select-date-range"
import { IosScreenWrapper } from '../../components/ScreenWrapper'
import { Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native'
import TopNavigation from '../../components/Navigation/Top'
import colors from '../../styles/theme'
import { StyleSheet } from 'react-native'
// import * as Device from 'expo-device';
import moment from "moment";
import { FontAwesome } from '@expo/vector-icons'
import { loginStyles } from '../home'
import { useRoute, useNavigation } from '@react-navigation/native'

interface DateRange {
  firstDate: string;
  secondDate: string;
}

export default function Booking() {
  // const iOSVersion = Device.osVersion
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
            <View>
              <Text style={{ color: colors?.bgRed, fontSize: 20 }}>
                Stanley Themed Suites Booking
              </Text>
            </View>
            <View style={{ 
                flexDirection: 'row', 
                justifyContent: 'space-between', 
                paddingVertical: 25 
              }}
            >
              <View style={{ 
                  gap: 9, 
                  borderWidth: .5, 
                  borderColor: colors?.mediumGray, 
                  padding: 15,
                  borderRadius: 8,
                  marginRight: 25
                }}
              >
                <Text style={{ fontSize: 17, color: colors?.darkGray, fontWeight: 'bold' }}>
                  Check In
                </Text>
                <Text style={{ color: colors?.bgRed, fontSize: 21 }}>
                  {formattedFirstDate}
                </Text>
              </View>
              <View style={{ 
                  gap: 9, 
                  borderWidth: .5, 
                  borderColor: colors?.mediumGray, 
                  padding: 15,
                  borderRadius: 8
                }}
              >
                <Text style={{ fontSize: 17, color: colors?.darkGray, fontWeight: 'bold' }}>
                  Check Out
                </Text>
                <Text style={{ color: colors?.bgRed, fontSize: 21 }}>
                  {formattedSecondDate}
                </Text>
              </View>
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
                onPress={() => navigation.navigate('SecureCheckout', { id: routeId })} 
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

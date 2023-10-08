import React from 'react'
import "react-native-gesture-handler"
import { Text, SafeAreaView, View, Button } from 'react-native'
import { Image } from 'expo-image'
import colors from '../../styles/theme'
import { DrawerNavigationState, NavigationContainer, ParamListBase } from "@react-navigation/native"
import { DrawerItem, DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer"
import { SimpleLineIcons } from "@expo/vector-icons"
import Home from '../../app/pages/home'
import { DrawerDescriptorMap, DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types'
import Scan from '../../app/pages/scan'
import Activities from '../../app/pages/activities'
import SuccessBooking from '../../app/pages/sucessbooking'
import TellAFriend from '../../app/pages/invitefriend'
import Explore from '../../app/pages/explore'
import Hotel from '../../app/pages/hotel'
import Room from '../../app/pages/room'
import Booking from '../../app/pages/booking'
import SecureCheckout from '../../app/pages/securecheckout'
import SecureCheckoutPayment from '../../app/pages/securecheckoutpayment'
import Inbox from '../../app/pages/inbox'

function MyProfile({ navigation }) {
  return (
    <View>
      <Text>MyProfile</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  )
}

type Props = {
  props: {
    state: DrawerNavigationState<ParamListBase>;
    navigation: DrawerNavigationHelpers;
    descriptors: DrawerDescriptorMap;
  }
};


const DrawerContent = ({ props }: Props ) => {
  const filteredItems = props.state.routeNames.filter(
    (routeName) => routeName !== 'Scan' 
  );

  return (
    <SafeAreaView style={{ backgroundColor: colors?.bgRed }}>
      <View style={{ paddingHorizontal: 15, paddingTop: 25 }}>
        <SimpleLineIcons.Button 
          name='menu' 
          size={20} 
          color={colors?.white} 
          backgroundColor='transparent'
          underlayColor='transparent'
          onPress={() => props.navigation.closeDrawer()}
        />
      </View>
      <View
        style={{
          height: 200,
          width: '100%',
          justifyContent: "center",
          alignItems: "center",
          borderBottomColor: colors?.white,
          borderBottomWidth: 0.6,
          paddingTop: 0,
          gap: 10 
        }}
      >
        <Image
          source={require('../../assets/images/avatar.png')}
          style={{
            height: 110,
            width: 110,
            borderRadius: 65
          }}
        />
        <Text
          style={{
            fontSize: 17,
            marginVertical: 6,
            fontWeight: "bold",
            color: colors?.white
          }}
        >Abbi Appleseed</Text>
      </View>
      <DrawerItemList {...props} state={{ ...props.state, routeNames: filteredItems }} />
    </SafeAreaView>
  )
}

export default function Drawer() {
  const Drawer = createDrawerNavigator();

  const tabs = [
    {
      id: 1,
      name: 'Home',
      drawerLabel: 'Home',
      title: 'Home',
      show: true,
      drawerIcon: undefined,
      component: Home
    },
    {
      id: 2,
      name: 'MyProfile',
      drawerLabel: 'My Profile',
      title: 'My Profile',
      show: true,
      drawerIcon: undefined,
      component: MyProfile
    },
    {
      id: 3,
      name: 'MyStays',
      drawerLabel: 'My Stays',
      title: 'My Stays',
      show: true,
      drawerIcon: undefined,
      component: Explore
    },
    {
      id: 4,
      name: 'Rewards',
      drawerLabel: 'Rewards',
      title: 'Rewards',
      show: true,
      drawerIcon: undefined,
      component: Explore
    },
    {
      id: 5,
      name: 'TellAFriend',
      drawerLabel: 'Tell A Friend',
      show: true,
      title: 'Tell A Friend',
      drawerIcon: undefined,
      component: TellAFriend
    },
    {
      id: 6,
      name: 'Inbox',
      drawerLabel: 'Inbox',
      show: true,
      title: 'Inbox',
      drawerIcon: () => (
        <SimpleLineIcons 
          name="exclamation" 
          size={15} 
          color={colors?.white} 
          style={{ 
            alignSelf: "center",
            position: "absolute",
            left: 75         
          }} 
        />
      ),
      component: Inbox
    },
    {
      id: 7,
      name: 'Scan',
      drawerLabel: 'Scan',
      title: 'Scan',
      show: true,
      drawerIcon: undefined,
      component: Scan
    },
    {
      id: 8,
      name: 'Activities',
      drawerLabel: 'Activities',
      title: 'Activities',
      show: true,
      drawerIcon: undefined,
      component: Activities
    },
    {
      id: 8,
      name: 'SuccessBooking',
      drawerLabel: 'SuccessBooking',
      title: 'SuccessBooking',
      show: true,
      drawerIcon: undefined,
      component: SuccessBooking
    },
    {
      id: 9,
      name: 'Explore',
      drawerLabel: 'Explore',
      title: 'Explore',
      show: true,
      drawerIcon: undefined,
      component: Explore
    },
    {
      id: 10,
      name: 'Hotel',
      drawerLabel: 'Hotel',
      title: 'Hotel',
      show: true,
      drawerIcon: undefined,
      component: Hotel
    },
    {
      id: 11,
      name: 'Room',
      drawerLabel: 'Room',
      title: 'Room',
      show: true,
      drawerIcon: undefined,
      component: Room
    },
    {
      id: 12,
      name: 'Booking',
      drawerLabel: 'Booking',
      title: 'Booking',
      show: true,
      drawerIcon: undefined,
      component: Booking
    },
    {
      id: 13,
      name: 'SecureCheckout',
      drawerLabel: 'SecureCheckout',
      title: 'SecureCheckout',
      show: true,
      drawerIcon: undefined,
      component: SecureCheckout
    },
    {
      id: 14,
      name: 'SecureCheckoutPayment',
      drawerLabel: 'SecureCheckoutPayment',
      title: 'SecureCheckoutPayment',
      show: true,
      drawerIcon: undefined,
      component: SecureCheckoutPayment
    },
  ];

  const tabsToHide = [ 
    'Scan', 
    'Activities', 
    'SuccessBooking', 
    'Explore', 
    'Hotel', 
    'Room', 
    'Booking',
    'SecureCheckout', 
    'SecureCheckoutPayment',
  ];

  return (
    <NavigationContainer independent={true}>
        <Drawer.Navigator
          initialRouteName='Home'
          screenOptions={{ 
            swipeEdgeWidth: 0,
            headerShown: false, 
            drawerPosition: 'right',
            drawerStyle: {
              backgroundColor: colors?.bgRed,
              width: 250,
              alignItems: 'center',
            },
            drawerLabelStyle: {
              color: colors?.white,
              alignSelf: 'center',
              fontSize: 14,
            }
          }}
          drawerContent={(props) => <DrawerContent props={props} />}
        >
          {tabs?.map((tab, i) => (
            <Drawer.Screen
              key={i}
              name={tab.name}
              options={{
                drawerLabel: tab.drawerLabel,
                title: tab.title,
                drawerIcon: tab.drawerIcon,
                drawerStyle: {
                  backgroundColor: colors?.bgRed,
                  width: 240, 
                },
                drawerItemStyle: {
                  display: tabsToHide?.some(item => item === tab.name) ? 'none' : undefined,
                  borderBottomColor: tabs?.length - 1 === i ? colors?.bgRed : colors?.white,
                  borderBottomWidth: tabs?.length === i ? 0 : 0.6,
                  width: '100%',
                  paddingVertical: 5,
                  alignSelf: 'center',
                },
                drawerActiveBackgroundColor: 'transparent',
                drawerActiveTintColor: colors?.white,
              }}
              component={tab.component}
            />
          ))}
        </Drawer.Navigator>
      </NavigationContainer>
  )
}

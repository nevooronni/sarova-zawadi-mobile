import React from 'react'
import "react-native-gesture-handler";
import { Text, SafeAreaView, View, Button } from 'react-native';
import { Image } from 'expo-image';
import colors from '../../styles/theme';
import { DrawerNavigationState, NavigationContainer, ParamListBase } from "@react-navigation/native";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Home } from '../../app/pages/landing'
import { DrawerDescriptorMap, DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';

function Explore({ navigation }) {
  return (
    <View>
      <Text>MyProfile</Text>
      <Button
        onPress={() => navigation.navigate('MyProfile')}
        title="Go to My Profile"
      />
    </View>
  )
}

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
            fontSize: 20,
            marginVertical: 6,
            fontWeight: "bold",
            color: colors?.white
          }}
        >Abbi Appleseed</Text>
      </View>
      <DrawerItemList {...props} />
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
      drawerIcon: undefined,
      component: Home
    },
    {
      id: 2,
      name: 'MyProfile',
      drawerLabel: 'My Profile',
      title: 'My Profile',
      drawerIcon: undefined,
      component: MyProfile
    },
    {
      id: 3,
      name: 'MyStays',
      drawerLabel: 'My Stays',
      title: 'My Stays',
      drawerIcon: undefined,
      component: Explore
    },
    {
      id: 4,
      name: 'Rewards',
      drawerLabel: 'Rewards',
      title: 'Rewards',
      drawerIcon: undefined,
      component: Explore
    },
    {
      id: 5,
      name: 'TellAFriend',
      drawerLabel: 'Tell A Friend',
      title: 'Tell A Friend',
      drawerIcon: undefined,
      component: Explore
    },
    {
      id: 6,
      name: 'Inbox',
      drawerLabel: 'Inbox',
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
      component: Explore
    }
  ]

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
              fontSize: 16,
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
                  borderBottomColor: tabs?.length - 1 === i ? colors?.bgRed : colors?.white,
                  borderBottomWidth: 0.6,
                  width: '100%',
                  paddingVertical: 5,
                  alignSelf: 'center',
                },
                drawerActiveBackgroundColor: colors?.bgRed,
              }}
              component={tab.component}
            />
          ))}
        </Drawer.Navigator>
      </NavigationContainer>
  )
}

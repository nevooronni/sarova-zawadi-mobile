import React from 'react';
import { Text, SafeAreaView, View, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { Image } from 'expo-image';
import { useForm } from "react-hook-form"
import colors from '../../styles/theme';
import { useRouter } from "expo-router";
import WPTextInput from '../../components/Input/WPTextInput';
import { loginStyles } from '../home';
import { useAppActions, useAppState } from '../../store';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerItemList, createDrawerNavigator } from "@react-navigation/drawer";
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";

type FormData = {
  first_name: string
  last_name: string
  country_region: string
  email: string
  id_passport: string
  password: string
  confirm_password: string
}

const Home = ({ navigation }) => {
  const state = useAppState()
  const imageUrl = require('../../assets/images/sarova_zawadi.png')

  return (
    <View style={styles.container}>
      <Image
        // style={styles.image}
        source={imageUrl}
        contentFit='contain'
        transition={1000}
      />
      <Text style={{ color: colors?.red, fontSize: 28, fontWeight: 'normal' }}>
          landing
      </Text>
      <Button
        onPress={() => navigation.openDrawer()}
        title="Open Drawer"
      />
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
        <Text style={{ color: colors?.red, fontSize: 28, fontWeight: 'normal' }}>
          {state?.userFullName ? `Welcome ${state?.userFullName}` : ''}
        </Text>
      </View>
    </View>
  )
}
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

const DrawerContent = ({ props }) => {
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

export default function Landing():JSX.Element {
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
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors?.white,
    justifyContent: 'flex-start', 
    paddingTop: 70,
    paddingHorizontal: 48, 
    gap: 18, 
    height: '100%',
    resizeMode: 'cover'
  },
})



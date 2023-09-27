import { ReactNode } from "react";
import { StatusBar, View } from "react-native";
import { Platform } from 'react-native';
import { useRoute } from '@react-navigation/native';

interface Wrapper {
  children: ReactNode;
  background?: string;
}
export function IosScreenWrapper({ children, background }:Wrapper):JSX.Element{
  const route = useRoute();
  const currentRouteName: string = route.name;
  const excludeRoutes: string[] = ['index', 'auth/login']
  const isExcluded: boolean = excludeRoutes?.some(route => route === currentRouteName) 
 return(
  <View  style={{
    width: "100%",
    height: '120%', // For all devices, even X, XS Max
    position: 'absolute',
    top: Platform.OS === 'ios' || isExcluded ? 0 : 15,    
    left: 0,
    backgroundColor: background || "transparent" }}
  >
    <StatusBar translucent barStyle="light-content"  backgroundColor={background} />
    {children}
  </View>
 )
}

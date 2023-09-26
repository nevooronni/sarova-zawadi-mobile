import { ReactNode } from "react";
import { StatusBar, View } from "react-native";

interface Wrapper {
  children: ReactNode;
  background?: string;
}
export function IosScreenWrapper({ children, background }:Wrapper):JSX.Element{
 return(
  <View  style={{
    width: "100%",
    height: '120%', // For all devices, even X, XS Max
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: background || "transparent" }}
  >
    <StatusBar translucent barStyle="light-content"  backgroundColor={background} />
    {children}
  </View>
 )
}

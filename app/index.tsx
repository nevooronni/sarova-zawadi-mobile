import React, { ReactNode } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import { Platform, View, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './home';
import { IosScreenWrapper } from '../components/ScreenWrapper';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/Inter-Black.otf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme()

  // if (Platform.OS === 'ios') {
  //   return (
  //     <IosScreenWrapper>
  //       <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
  //         <SafeAreaProvider>
  //           <Home />
  //         </SafeAreaProvider>
  //       </ThemeProvider>
  //     </IosScreenWrapper>
  //   )
  // }
  return (
    <IosScreenWrapper>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <SafeAreaProvider>
          <Home />
        </SafeAreaProvider>
      </ThemeProvider>
    </IosScreenWrapper>
    
  );
}

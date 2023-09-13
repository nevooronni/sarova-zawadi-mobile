import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Lottie from 'lottie-react-native'
import Home from './home';

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
  const [showAnimation, setShowAnimation] = React.useState<boolean>(false)
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <SafeAreaProvider>
        {showAnimation ? <Lottie
            // ref={animationRef}
            source={require('../animations/animation_spinner_one.json')}
            loop
            autoPlay
            style={{ 
              width: 60, 
              height: 60,
              alignSelf: 'center', 
              zIndex: 1,
              position: 'absolute', 
              top: 155, 
              left: 80,
            }}
            onAnimationFinish={() => {
              setShowAnimation(false)
            }}
          /> : null}
        <Home />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

import React from 'react';
import { Text, SafeAreaView, View, Platform, RefreshControl, StyleSheet, Button, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import colors from '../../styles/theme';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const backgroundImage = require('../../assets/images/sarova-background.png/')

export default function TabOneScreen() {
  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          source={backgroundImage}
          resizeMode="stretch"
          style={styles.container}
        >
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%', paddingTop: 520 }}>
            <TouchableOpacity
              style={styles.joinButton}
              onPress={() => {}}
            >
              <Text style={styles.joinText}>Join</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => {}}
            >
              <Text style={styles.loginText}>Sign in</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => {}}
          >
            <Text style={styles.whyText}>Why Join?</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  joinButton: {
    backgroundColor: 'white',
    width: 140,
    paddingHorizontal: 5,
    paddingVertical: 14,
    borderRadius: 6,
    fontSize: 18,
  },
  loginButton: {
    backgroundColor: colors?.red,
    width: 140,
    paddingHorizontal: 5,
    paddingVertical: 14,
    borderRadius: 6,
  },
  joinText: {
    color: 'red',
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: 18,
  },
  loginText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: '500',
    fontSize: 18,
  },
  whyText: {
    color: 'white',
    alignSelf: 'center',
    fontWeight: '500',
    marginTop: 50,
    fontSize: 16,
  }
})



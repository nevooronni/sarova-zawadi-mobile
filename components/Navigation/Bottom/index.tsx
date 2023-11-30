import React, { useEffect, useState } from "react"
import { StyleSheet, TouchableOpacity, View, Dimensions} from "react-native"
import { loginStyles } from "../../../app/home"
import { FontAwesome } from "@expo/vector-icons"
import colors from "../../../styles/theme";
import { Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useAppActions, useAppState } from "../../../store";
import SuccessModalPopup from "../../Modal";

export default function BottomNavigation({ }) {
  const state = useAppState()
  const navigation = useNavigation();
  const { setIsLoading,  } = useAppActions()
  const route = useRoute() 
  const routeId = route?.params?.id
  const [adults, setAdults] = useState<number>(0)
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
      <View  style={styles.container}>
        <SuccessModalPopup isModalVisible={isModalVisible} toggleModal={toggleModal} />
        <View style={{ 
            width: 150,
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'space-around' 
          }}
        > 
          <TouchableOpacity
            style={styles?.iconButton}
            onPress={() => adults < 1 ? () => {} : setAdults(adults - 1)}
          >
            <FontAwesome
              name='minus' 
              size={10} 
              color={colors?.bgRed}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 14, color: colors?.mediumGray }}>
            {`${adults} Adults`}
          </Text>
          <TouchableOpacity
            style={styles?.iconButton}
            onPress={() => setAdults(adults + 1)}
          >
            <FontAwesome
              name='plus' 
              size={10} 
              color={colors?.bgRed}
            />
          </TouchableOpacity>
        </View>
      <TouchableOpacity 
        style={{
          backgroundColor: colors?.bgRed, 
          width: 150, 
          flexDirection: 'row', 
          paddingHorizontal: 5,
          paddingVertical: 10, 
          alignItems: 'center',
          justifyContent: 'space-around',
          borderRadius: 8
        }}
      >
        <Text style={[loginStyles.loginText,  { fontSize: 13, opacity: .8 }]}>
          {`ksh ${state?.bookingTotalAmount}`}
        </Text>
        <Text 
          //@ts-ignore
          onPress={() => setIsLoading(true)} 
          style={[loginStyles.loginText,  { fontSize: 13 }]}
        >
          Book Now
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute', 
    bottom: '22.5%', 
    left: 0, 
    right: 0,
    zIndex: 1,
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 15,
    width: '100%',
    backgroundColor: colors?.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: .5,
    borderTopColor: colors?.lightGray3,
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

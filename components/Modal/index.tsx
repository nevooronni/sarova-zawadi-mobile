import React from 'react'
import Modal from "react-native-modal";
import UnorderedList from '../../components/List'
import { diamondCardBenefits } from '../../constants/content'
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import colors from '../../styles/theme';
import { FontAwesome } from '@expo/vector-icons';

interface ModalProps {
  isModalVisible: boolean;
  toggleModal: () => void;
  isPointsModal?: boolean | undefined;
}

export default function SuccessModalPopup({ isModalVisible, toggleModal, isPointsModal }: ModalProps):JSX.Element {
  if (isPointsModal) {
    return (
      <Modal isVisible={isModalVisible}>
       <Pressable onPress={toggleModal}>
        <View style={successModalStyles.container}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            style={{ width: 120, height: 120, }}
            source={require('../../assets/images/sarova_red_logo.webp')}
          />
          </View>
          <View style={[successModalStyles.container2, { borderBottomWidth: 0 }]}>
            <Text style={{ textAlign: 'center' }}>COLLECT MORE POINTS TO UNLOCK THESE & MORE DIAMONG CARD BENEFITS</Text>
          </View>
        </View>
        </Pressable>
      </Modal>
    )
  }
  return (
    <Modal isVisible={isModalVisible}>
       <Pressable onPress={toggleModal}>
        <View style={successModalStyles.container}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: colors?.bgRed, fontSize: 18, fontWeight: 'bold' }}>
              CONGRATULATIONS!
            </Text>
          </View>
          <View style={successModalStyles.container2}>
            <FontAwesome 
              name='thumbs-up' 
              size={28} 
              color={colors?.shadeGreen2} 
              style={{ marginVertical: 10 }} 
            />
            <Text style={{ color: colors?.shadeGreen2, fontSize: 18, fontWeight: 'bold' }}>You have Successful earned</Text>
            <Text style={{ color: colors?.shadeGreen2, fontSize: 18, fontWeight: 'bold' }}>3000 ZAWADI EMARALD</Text>
            <Text style={{ color: colors?.shadeGreen2, fontSize: 18, fontWeight: 'bold'}}>reward points</Text>
          </View>
          <View style={successModalStyles.container3}>
            <Text style={{ color: colors?.mediumGray, fontSize: 13, fontWeight: 'bold', textAlign: 'left' }}>COLLECT MORE POINTS TO UNLOCK</Text>
            <Text style={{ color: colors?.mediumGray, fontSize: 13, fontWeight: 'bold', textAlign: 'left', marginBottom: 10 }}>THESE AND MORE DIAMOND CARD BENEFITS:</Text>
            <UnorderedList items={diamondCardBenefits} />
          </View>
          {/* <Button title="Hide modal" onPress={toggleModal} /> */}
        </View>
       </Pressable>
    </Modal>
  )
}

export const successModalStyles = StyleSheet.create({
  container: {
    paddingVertical: 30, 
    paddingHorizontal: 13, 
    backgroundColor: colors?.white, 
    borderRadius: 15,
    gap: 15,
  },
  container2: {
    justifyContent: 'center', 
    alignItems: 'center', 
    borderBottomWidth: .5, 
    borderBottomColor: colors?.lightGray,
    paddingBottom: 25
  },
  container3: {
    paddingHorizontal: 10, 
    // justifyContent: 'center', 
    // alignItems: 'center', 
  },
})

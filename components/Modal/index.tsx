import React from 'react'
import Modal from "react-native-modal";
import UnorderedList from '../../components/List'
import { diamondCardBenefits } from '../../constants/content'
import { Pressable, StyleSheet, Text, View } from 'react-native';
import colors from '../../styles/theme';
import { FontAwesome } from '@expo/vector-icons';

interface ModalProps {
  isModalVisible: boolean;
  toggleModal: () => void;
}

export default function SuccessModalPopup({ isModalVisible, toggleModal }: ModalProps):JSX.Element {
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
    gap: 15
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

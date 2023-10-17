import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from '../Themed'
import { InputText } from '../../types/input';
import colors from '../../styles/theme';
import SelectDropdown from 'react-native-select-dropdown';
import { Platform } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function WPSelectInput({
  name,
  value, 
  label,
  width,
  errors,
  errorMessage,
  keyboardType, 
  multiline, 
  onSubmitEditing ,
  returnKeyType,
  onChangeText,
  placeholder,
  customStyles, 
  customRequiredStyles,
  placeholderTextColor,
  secureTextEntry,
  defaultValue,
  searchPlaceHolder,
  searchPlaceHolderColor,
  renderDropdownIcon,
  dropdownIconPosition,
  data,
  labelStyles,
  iconColor,
}: InputText):JSX.Element {
  const selectStyles = customStyles ? [styles.inputStyle, { ...customStyles}] : styles.inputStyle
  const selectRequiredStyles = customRequiredStyles ? [styles.requiredStyle, customRequiredStyles] : styles.requiredStyle
  const Icon = () => (
    <FontAwesome 
      name='chevron-down' 
      size={15} 
      color={iconColor || colors?.lightGray}
    />
  )
  return (
    //@ts-ignore
    <View style={{ width: width }}>
      {label ? <Text style={[{ color: colors?.red, fontSize: 15, marginBottom: 10 }, labelStyles]}>{label}</Text> : null}
      <SelectDropdown
        data={data}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index)
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item
        }}
        buttonTextStyle={{ fontSize: 15, color: colors?.mediumGray }}
        searchPlaceHolderColor={searchPlaceHolderColor}
        searchPlaceHolder={searchPlaceHolder}
        buttonStyle={selectStyles}
        renderDropdownIcon={Icon}
        dropdownIconPosition={dropdownIconPosition || 'right'}
      />
      {errors?.[name] && <Text style={selectRequiredStyles}>{errorMessage}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 18,
    paddingVertical: Platform.OS === 'ios' ? 11 : 7,
    borderRadius: 4,
    width: '100%'
  },
  requiredStyle: { color: 'red', marginTop: 7, width: 500 }
})

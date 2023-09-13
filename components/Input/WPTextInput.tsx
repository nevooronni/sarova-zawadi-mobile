import React from 'react';
import { Text, TextInput, View, StyleSheet } from "react-native";
import { InputText } from '../../types/input';
import colors from '../../styles/theme';

export default function WPTextInput({ 
  value, 
  label,
  width,
  keyboardType, 
  multiline, 
  onSubmitEditing ,
  returnKeyType,
  onChangeText,
  placeholder,
}: InputText):JSX.Element {
  return (
    //@ts-ignore
    <View style={{ width: width }}>
      {label ? <Text style={{ color: colors?.red, fontSize: 15, marginBottom: 10 }}>{label}</Text> : null}
      <TextInput
        onChangeText={onChangeText}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
        multiline={multiline}
        keyboardType={keyboardType}
        value={value}
        placeholder={placeholder}
        style={styles.inputStyle}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputStyle: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 13,
    borderRadius: 4,
    width: '100%'
  }
})

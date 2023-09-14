import React from 'react';
import { Text, TextInput, View, StyleSheet, Platform } from "react-native";
import { useForm, Controller } from "react-hook-form"
import { InputText } from '../../types/input';
import colors from '../../styles/theme';

export function WPTextInputUncontrolled({
  name,
  value, 
  label,
  width,
  errors,
  errorMessage,
  isRequired,
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
        {errors?.[name] && <Text>{errorMessage}</Text>}
      </View>
  )
}
export default function WPTextInput({ 
  name,
  value, 
  label,
  width,
  control,
  errors,
  errorMessage,
  isRequired,
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
       <Controller
          control={control}
          rules={{
            required: isRequired,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              returnKeyType={returnKeyType}
              onSubmitEditing={onSubmitEditing}
              multiline={multiline}
              keyboardType={keyboardType}
              placeholder={placeholder}
              style={styles.inputStyle}
            />
          )}
          name={name}
        />
        {errors?.[name] && <Text style={styles.requiredStyle}>{errorMessage}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  inputStyle: {
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: Platform.OS === 'ios' ? 11 : 7,
    borderRadius: 4,
    width: '100%'
  },
  requiredStyle: { color: 'red', marginTop: 7, width: 500 }
})

import { KeyboardTypeOptions, NativeSyntheticEvent, ReturnKeyTypeOptions, Text, TextInput, TextInputSubmitEditingEventData, View } from "react-native";

export interface InputText {
  value: string;
  label?: string;
  width?: string | number;
  keyboardType?: KeyboardTypeOptions | undefined;
  multiline?: boolean | undefined; 
  onSubmitEditing?:  ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void) | undefined;
  returnKeyType?: ReturnKeyTypeOptions | undefined; 
  onChangeText?: ((text: string) => void) | undefined;
  placeholder?: string;
}

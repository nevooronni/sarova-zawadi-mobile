import { KeyboardTypeOptions, NativeSyntheticEvent, ReturnKeyTypeOptions, Text, TextInput, TextInputSubmitEditingEventData, View } from "react-native";

// type Errors = {
//   message: string
// }
export interface InputText {
  name: string;
  value?: string;
  label?: string;
  width?: string | number;
  height?: string | number;
  errors?: any;
  control?: any; 
  errorMessage?: string;
  isRequired?: boolean;
  keyboardType?: KeyboardTypeOptions | undefined;
  multiline?: boolean | undefined; 
  onSubmitEditing?:  ((e: NativeSyntheticEvent<TextInputSubmitEditingEventData>) => void) | undefined;
  returnKeyType?: ReturnKeyTypeOptions | undefined; 
  onChangeText?: ((text: string) => void) | undefined;
  placeholder?: string;
  customStyles?: any;
  customRequiredStyles?: any;
  labelStyles?: any;
  secureTextEntry?: boolean | undefined;
  placeholderTextColor?: string | undefined;
  defaultValue?: string | undefined;
  searchPlaceHolder?: string | undefined;
  searchPlaceHolderColor?: string | undefined;
  renderDropdownIcon?: React.ReactNode | undefined;
  dropdownIconPosition?: "left" | "right" | undefined;
  data?: any;
  iconColor?: string | undefined;
}

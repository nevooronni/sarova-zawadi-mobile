import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import WPTextInput from '../../components/Input/WPTextInput'
import { useForm } from 'react-hook-form'
import colors from '../../styles/theme'
import { TouchableOpacity } from 'react-native-gesture-handler'

type ProfileFormData = {
  salutation: string;
  fullname: number;
  country_region: string;
  email: number;
  id_passport: string;
  password: string;
}

export default function MyDetails() {
  const { control, handleSubmit, formState: { errors }} = useForm<ProfileFormData>()

  return (
    <ScrollView style={{ width: '100%' }}>
    <View style={{ width: '100%', paddingBottom: 250, gap: 15, paddingVertical: 25 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
        <WPTextInput
          name='salutation'
          label='Salution'
          placeholder='Enter salutation'
          control={control}
          errors={errors}
          width='45%'
          labelStyles={{ color: colors?.shadeGreen, fontWeight: 'bold' }}
          customStyles={{ height: 50, color: colors?.mediumGray }}
          customRequiredStyles={{ color: colors?.bgRed }}
          placeholderTextColor={colors?.mediumGray}
        />
       <WPTextInput
          name='fullname'
          label='First & Last Name'
          placeholder='Enter first & last name'
          control={control}
          errors={errors}
          errorMessage='first & last name is required'
          isRequired
          width='45%'
          labelStyles={{ color: colors?.shadeGreen, fontWeight: 'bold' }}
          customStyles={{ height: 50, color: colors?.mediumGray }}
          customRequiredStyles={{ color: colors?.bgRed }}
          placeholderTextColor={colors?.mediumGray}
        />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
        <WPTextInput
          name='country_region'
          label='Country/Region'
          placeholder='Enter country/region'
          control={control}
          errors={errors}
          errorMessage='Country/region is required'
          isRequired
          width='100%'
          labelStyles={{ color: colors?.shadeGreen, fontWeight: 'bold' }}
          customStyles={{ height: 50, color: colors?.mediumGray }}
          customRequiredStyles={{ color: colors?.bgRed }}
          placeholderTextColor={colors?.mediumGray}
        />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
        <WPTextInput
          name='email'
          label='Email Address'
          placeholder='Enter email'
          control={control}
          errors={errors}
          errorMessage='Email is required'
          isRequired
          width='100%'
          labelStyles={{ color: colors?.shadeGreen, fontWeight: 'bold' }}
          customStyles={{ height: 50, color: colors?.mediumGray }}
          customRequiredStyles={{ color: colors?.bgRed }}
          placeholderTextColor={colors?.mediumGray}
        />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
        <WPTextInput
          name='id_passport'
          label='ID/Passport Number'
          placeholder='Enter id/passport'
          control={control}
          errors={errors}
          errorMessage='Id/Passport is required'
          isRequired
          width='100%'
          labelStyles={{ color: colors?.shadeGreen, fontWeight: 'bold' }}
          customStyles={{ height: 50, color: colors?.mediumGray }}
          customRequiredStyles={{ color: colors?.bgRed }}
          placeholderTextColor={colors?.mediumGray}
        />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
        <WPTextInput
          name='password'
          label='Password'
          placeholder='Enter password'
          control={control}
          errors={errors}
          errorMessage='Password is required'
          isRequired
          width='100%'
          labelStyles={{ color: colors?.shadeGreen, fontWeight: 'bold' }}
          customStyles={{ height: 50, color: colors?.mediumGray }}
          customRequiredStyles={{ color: colors?.bgRed }}
          placeholderTextColor={colors?.mediumGray}
        />
      </View>
      <View style={{ alignItems: 'center', paddingVertical: 20 }}>
        <TouchableOpacity 
          style={{ 
            backgroundColor: colors?.shadeGreen,
            borderRadius: 8, 
            width: 120, 
            paddingVertical: 12, 
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={{ color: colors?.white }}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  )
}

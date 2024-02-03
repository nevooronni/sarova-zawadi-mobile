import { FontAwesome } from '@expo/vector-icons'
import React, { useState } from 'react'
import { View, ScrollView, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import colors from '../../styles/theme';
import WPTextInput from '../../components/Input/WPTextInput';
import { useForm } from 'react-hook-form';

interface PreferenceCard {
  title: string;
  data: string[]
}

function PreferenceCard({ title, data }: PreferenceCard) {
  const [isTouched, setTouched] = useState<boolean>(true)
  const [id, setId] = useState<number>()
  return (
    <View style={{ 
        width: '100%', 
        paddingVertical: 10, 
        gap: 15, 
      }}
    >
      <Text style={{ color: colors?.mediumGray }}>{title}</Text>
      <View style={{ 
        width: '100%',
        borderWidth: .5, 
        borderRadius: 8,
        paddingHorizontal: 0,
        borderColor: colors?.mediumGray, 
      }}>
        {data?.map((card, i) => (
          <View 
            key={i} 
            style={{ 
              margin: 0,
              paddingVertical: 10,
              paddingHorizontal: 10,
              borderBottomWidth: .5, 
              // borderRadius: 8,
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomColor: i + 1 === data?.length ? 'transparent' : colors?.mediumGray, 
            }}>
            <Text style={{ color: colors?.shadeGreen }}>{card}</Text>
            <TouchableOpacity
              onPress={() => {
                setId(i)
                setTouched(!isTouched)
              }}
            >
              <View style={{ 
                  height: 15, 
                  width: 15, 
                  backgroundColor: 
                  isTouched && id == i ? colors?.shadeGreen : 'transparent', 
                  borderRadius: 50,
                  borderWidth: .5, 
                  borderColor: colors?.mediumGray,
                }} 
              />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  )
}

interface PreferenceFormData {
  room_preference: string;
}

export default function Preferences() {
  const { control, formState: { errors }} = useForm<PreferenceFormData>()
  return (
    <ScrollView style={{ width: '100%', paddingBottom: 225 }}>
      <View style={{ paddingBottom: 20, width: '100%' }}>
        <PreferenceCard title='Dietary Preference' data={['Vegetarian', 'Non Vegetarian']} />
        <PreferenceCard title='Fine Dining Preference' data={['A la Carte', 'Buffet']} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', paddingVertical: 8 }}>
          <WPTextInput
            name='room_preference'
            label='Room Preference(Near Reception etc)'
            placeholder='Enter Room Preference'
            control={control}
            errors={errors}
            width='100%'
            labelStyles={{ color: colors?.mediumGray, fontSize: 15 }}
            customStyles={{ height: 50, color: colors?.mediumGray }}
            customRequiredStyles={{ color: colors?.bgRed }}
            placeholderTextColor={colors?.mediumGray}
          />
        </View>
          <PreferenceCard title='Hobbies' data={['Travel', 'Shopping', 'Spa & Fitness', 'Entertainment']} />
      </View>
    </ScrollView>
  )
}

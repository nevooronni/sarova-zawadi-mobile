import React, { useEffect, useMemo } from 'react'
import { IosScreenWrapper } from '../../components/ScreenWrapper'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import TopNavigation from '../../components/Navigation/Top'
import colors from '../../styles/theme'
import { useAppActions, useAppState } from '../../store'
import SpinnerLoader from '../../components/Loaders/Spinner'
import { Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

interface Inbox {
  id?: number;
  read: boolean;
  title: string;
  date: string;
  msg: string;
}

const inbox: Inbox[] = [
  {
    id: 1,
    read: false,
    title: 'Accomodation Confirmation',
    date: '1 day ago',
    msg: 'Hi Abi.'
  },
  {
    id: 2,
    read: true,
    title: 'Sarova Express Concierge',
    date: '2 days ago',
    msg: 'Hi Abi.'
  },
  {
    id: 3,
    read: true,
    title: 'Brunch at Thorn Tree Cafe',
    date: '5 days ago',
    msg: 'Hi Abi.'
  },
  {
    id: 4,
    read: true,
    title: 'Happy Birthday',
    date: '6 days ago',
    msg: 'Hi Abi.'
  },
  {
    id: 5,
    read: true,
    title: 'Congratulations On Your Anniversary',
    date: '1 week ago',
    msg: 'Hi Abi.'
  },
  {
    id: 6,
    read: true,
    title: 'Welcome Back!',
    date: '14 Aug 23',
    msg: 'Hi Abi.'
  },
  {
    id: 7,
    read: false,
    title: 'Brunch on us!',
    date: '1 day ago',
    msg: 'Hi Abi.'
  },
  {
    id: 8,
    read: false,
    title: 'Brunch on us!',
    date: '1 day ago',
    msg: 'Hi Abi.'
  },
  {
    id: 9,
    read: true,
    title: 'Brunch on us!',
    date: '1 day ago',
    msg: 'Hi Abi.'
  },
  {
    id: 10,
    read: true,
    title: 'Brunch on us!',
    date: '1 day ago',
    msg: 'Hi Abi.'
  },
  {
    id: 11,
    read: true,
    title: 'Brunch on us!',
    date: '1 day ago',
    msg: 'Hi Abi.'
  },
  {
    id: 12,
    read: true,
    title: 'Brunch on us!',
    date: '1 day ago',
    msg: 'Hi Abi.'
  },
  {
    id: 13,
    read: true,
    title: 'Brunch on us!',
    date: '1 day ago',
    msg: 'Hi Abi.'
  },
] 

function Message({ title, date, msg, read }: Inbox) {
  return (
    <View style={{ 
        alignItems: 'flex-start', 
        width: '100%',
        paddingVertical: 15,
        paddingHorizontal: 25, 
        gap: 7,
        borderTopWidth: 1, 
        borderTopColor: colors?.lightGray3,
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
        {!read ? <FontAwesome
          name='circle' 
          size={12} 
          color={colors?.bgRed}
        /> : null}
        <Text style={{ marginLeft: !read ? 5 : 0, fontSize: 15, color: !read ? colors?.shadeGreen : colors?.darkGray, fontWeight: 'bold' }}>{title}</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', }}>
        <Text style={{ fontSize: 13, color: !read ? colors?.shadeGreen : colors?.mediumGray, marginLeft: 0 }}>{msg}</Text>
        <Text style={{ fontSize: 13, color: colors?.mediumGray, marginLeft: 0 }}>{date}</Text>
      </View>
    </View>
  )
}

export default function Inbox() {
  const state = useAppState()
  const { setIsLoading } = useAppActions()
  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => { 
      setIsLoading(false)
      //@ts-ignore
    }, 2000)
  }, [])

   const inboxData = useMemo(() => inbox, [inbox]);

  return (
      <IosScreenWrapper background={colors?.white}>
        <SafeAreaView>
          <SpinnerLoader isLoading={state.isLoading} color={colors?.red} />
          <TopNavigation 
            backgroundColor={colors?.white}
            color={colors?.mediumGray} 
            paddingHorizontal={30}
            width='105%'
          />
          <ScrollView 
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.container}>
              <View style={{ width: '100%', alignItems: 'flex-start', paddingHorizontal: 25, paddingBottom: 0 }}>
                <Text style={{ color: colors?.bgRed, fontSize: 20 }}>
                  Conversations
                </Text>
              </View>
              <View style={{ width: '100%', alignItems: 'flex-start' }}>
                {inboxData?.map(inbox =>(
                  <Message 
                    id={inbox?.id}
                    key={inbox?.id}
                    title={inbox?.title}
                    date={inbox?.date}
                    msg={inbox?.msg}
                    read={inbox?.read}
                  />
                ))}
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
    </IosScreenWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 30,
    paddingTop: 50,
    paddingHorizontal: 0,
    paddingBottom: 355,
    backgroundColor: colors?.white,
    height: '100%',
    alignItems: 'flex-start'
  },
})

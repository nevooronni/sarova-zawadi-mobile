import React from 'react'
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import TopNavigation from '../../components/Navigation/Top'
import colors from '../../styles/theme'
import Card from '../../components/Card'
import { FontAwesome } from '@expo/vector-icons'
import { IosScreenWrapper } from '../../components/ScreenWrapper';
import MainBottomNavbar from '../../components/Navigation/MainBottomNavbar'

interface SocialProps {
  icon: JSX.Element;
  name?: string;
}

export function Social({ icon, name }: SocialProps):JSX.Element {
  return (
    <View style={{ 
      flexDirection: 'row', 
      alignItems: 'center',
      width: '100%',
      paddingVertical: 8,
      paddingHorizontal: 45,
      borderBottomWidth: name !== 'More' ? .5 : 0, 
      borderBottomColor: colors?.mediumGray2
     }}
    >
     {icon}
    </View>
  )
}

export default function InviteFriend() {
  const backgroundImage = require('../../assets/images/training_bg.png');
  const cardData = {
    title: 'Personal Training',
    desc: 'Invite a workout buddy',
    image: backgroundImage,
  }
  const WhatsappIcon = (
    <FontAwesome.Button 
      name='whatsapp' 
      size={30} 
      color={colors?.mediumGray}
      backgroundColor='transparent'
    >
      whatsapp
    </FontAwesome.Button>    
  )
  const EmailIcon = (
    <FontAwesome.Button
      name='send' 
      size={30} 
      color={colors?.mediumGray}
      backgroundColor='transparent'
    >
      Email
    </FontAwesome.Button>    
  )
  const SmsIcon = (
    <FontAwesome.Button 
      name='envelope' 
      size={30} 
      color={colors?.mediumGray}
      backgroundColor='transparent'
    >
      SMS
    </FontAwesome.Button>    
  )
  const CopyLinkIcon = (
    <FontAwesome.Button 
      name='link' 
      size={22} 
      color={colors?.mediumGray}
      backgroundColor='transparent'
    >
      Copy Link
    </FontAwesome.Button>  
  )
  const MoreIcon = (
    <FontAwesome.Button
      name='ellipsis-h' 
      size={30} 
      color={colors?.mediumGray}
      backgroundColor='transparent'
    >
      More
    </FontAwesome.Button>  
  )
  const socialData = [
    {
      id: 1,
      name: 'whatsapp',
      icon: WhatsappIcon
    },
    {
      id: 2,
      name: 'Email',
      icon: EmailIcon
    },
    {
      id: 3,
      name: 'SMS',
      icon: SmsIcon
    },
    {
      id: 4,
      name: 'Copy Link',
      icon: CopyLinkIcon
    },
    {
      id: 5,
      name: 'More',
      icon: MoreIcon
    }
  ]

  return (
    <IosScreenWrapper background={colors?.bgGray}>
      <SafeAreaView style={{ margin: 0, padding: 0 }}>
        <TopNavigation 
          color={colors?.white} 
          paddingHorizontal={30}
          width='105%'
          noMenu
        />
        <ScrollView>
          <View style={{ height: '100%', paddingBottom: 250 }}>
            <View style={{ height: '45%', margin: 0, padding: 0, backgroundColor: colors?.white }}>
              <ImageBackground
                source={backgroundImage}
                resizeMode="stretch"
                style={styles.container}
                blurRadius={25}
              >
                <Card 
                  title={cardData?.title}
                  desc={cardData?.desc}
                  image={cardData?.image}
                  imageWidth={280} 
                  imageHeight={200}
                />
              </ImageBackground> 
            </View>
            <View style={{ 
              zIndex: 1,
              gap: 7,
              marginTop: 0,
              justifyContent: 'flex-start', 
              alignItems: 'flex-start', 
              paddingTop: 0, 
              paddingBottom: 100,
              paddingHorizontal: 0,
              backgroundColor: colors?.white,
            }}>
              {socialData?.map(social => (
                <Social key={social?.id} name={social.name} icon={social.icon}/>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <MainBottomNavbar />
    </IosScreenWrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 350,
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 60,
    backgroundColor: colors?.white,
  },
  image: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '20%',
    // resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    backgroundColor: 'transparent', 
    borderRadius: 50, 
    width: 160,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

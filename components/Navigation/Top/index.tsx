import React from 'react'
import { DimensionValue, StyleSheet, View,  TextInput, Pressable, Text, Platform } from 'react-native'
import { SimpleLineIcons } from "@expo/vector-icons";
import colors from '../../../styles/theme';
import { useNavigation } from 'expo-router';
import { useDrawerStatus } from '@react-navigation/drawer';
import { Feather, Entypo } from "@expo/vector-icons";
import { Shadow } from 'react-native-shadow-2';

export interface Tab {
  id: number;
  name: string;
  screen: string;
}
interface NavProps {
  color?: string;
  paddingTop?: number | undefined;
  paddingHorizontal?: number | undefined;
  paddingVertical?: number | undefined;
  goBack?: boolean;
  backgroundColor?: string;
  width?: DimensionValue | undefined;
  clicked?: boolean | undefined;
  searchPhrase?: string | undefined;
  showSearchBar?: boolean;
  placeholder?: string | undefined;
  showTabs?: boolean | undefined;
  tabsData?: Tab[] | undefined;
  activeTab?: string;
  setActiveTab?: (val: string) => void;
  setSearchPhrase?: (val: string) => void;
  setClicked?: (val: boolean) => void;
}
const Navbar = ({ 
  color, 
  paddingHorizontal,
  paddingVertical,
  goBack,
  width,
  paddingTop,
  backgroundColor,
 }: NavProps) => {
  const navigation = useNavigation();
  const navStatus = useDrawerStatus();
  return (
    <View style={[styles.container, 
      { 
        width: width,
        paddingHorizontal: paddingHorizontal,
        paddingVertical: paddingVertical,
        paddingTop: paddingTop,
        backgroundColor: backgroundColor || 'transparent',
        justifyContent: goBack ? 'space-between'  : 'flex-end'
      }]}
    >
      {goBack && <SimpleLineIcons.Button 
        name='arrow-left' 
        size={22} 
        color={color} 
        style={{ marginLeft: -10 }}
        backgroundColor='transparent'
        underlayColor='transparent'
        //@ts-ignore
        onPress={() => navigation.goBack()}
      />}
      {navStatus === 'closed' ? <SimpleLineIcons.Button 
        name='menu' 
        size={22} 
        color={color} 
        backgroundColor='transparent'
        underlayColor='transparent'
        //@ts-ignore
        onPress={() => navigation.openDrawer()}
      /> : null}
    </View>
  )
}

const SearchBar = ({
  paddingHorizontal,
  paddingVertical,
  width,
  backgroundColor,
  clicked, 
  searchPhrase, 
  setSearchPhrase, 
  setClicked,
  placeholder,
}: NavProps) => {
  return (
    <View style={[styles.searchBarContainer, 
        { 
          width: width,
          paddingHorizontal: paddingHorizontal,
          paddingVertical: paddingVertical,
          backgroundColor: backgroundColor || 'transparent',
        }]}
        >
        <Shadow style={{ width: '100%', borderRadius: 8 }}>
        <View
          style={
            clicked
              ? styles.searchBar__clicked
              : styles.searchBar__unclicked
          }
        >
          <Feather
            name="search"
            size={20}
            color={colors?.mediumGray5}
            style={{ marginLeft: 1 }}
          />
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={searchPhrase}
            onChangeText={setSearchPhrase}
            onFocus={() => setClicked && setClicked(true)}
          />
          {clicked ? (
            <Entypo 
              name="cross" 
              size={20} 
              color={colors?.mediumGray5} 
              // style={{ padding: 1 }} 
              onPress={() => {
                setSearchPhrase && setSearchPhrase("")
                setClicked && setClicked(false)
              }}
            />
          ) : null}
        </View>
        {/* {clicked && (
          <View>
            <Button
              title="Cancel"
              color={colors?.bgRed}
              onPress={() => {
                Keyboard.dismiss();
                setClicked && setClicked(false)
              }}
            ></Button>
          </View>
        )} */}
      </Shadow>
    </View>
  )
}
const Tabs = ({ 
  activeTab, 
  setActiveTab, 
  tabsData 
}: NavProps) => { 
  return (
    <View style={[styles.tabsContainer, 
      { 
        backgroundColor: colors?.white || 'transparent',
      }]}
      >
      <View style={{  
          width: Platform.OS === 'ios' ? 340 : 305, 
          flexDirection: "row",
          justifyContent: 'space-between',
          borderBottomWidth: .5,
          borderBottomColor: colors?.bgRed
        }}
      >
        {tabsData?.map((tab, i) => (
          <Pressable
            key={i}
            style={{ 
              paddingVertical: 15,
              borderBottomWidth: activeTab === tab?.name ? 2.5 : 0, 
              borderBottomColor: activeTab === tab?.name ? colors?.bgRed : 'none',
           }}
            onPress={() => setActiveTab && setActiveTab(tab?.name)}
          >
            <Text 
              style={{ 
                color: colors?.bgRed, fontWeight: activeTab === tab?.name ? 'bold' : 'normal' 
              }}
              >
                {tab?.name}
              </Text>
          </Pressable>
        ))}
      </View>
    </View>
  )
}
export default function TopNavigation({ 
  color, 
  paddingTop,
  paddingHorizontal,
  paddingVertical,
  goBack,
  width,
  backgroundColor,
  showSearchBar,
  searchPhrase,
  setSearchPhrase, 
  clicked,
  setClicked,
  placeholder,
  showTabs, 
  tabsData,
  activeTab,
  setActiveTab,
 }: NavProps) {
  
  return (
    <View  style={{ zIndex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Navbar
        color={color}
        paddingTop={paddingTop}
        paddingHorizontal={paddingHorizontal}
        paddingVertical={paddingVertical}
        goBack={goBack}
        width={width}
        backgroundColor={backgroundColor}
      />
      {showSearchBar && 
        <SearchBar
          paddingHorizontal={paddingHorizontal}
          paddingVertical={paddingVertical}
          goBack={goBack}
          width={width}
          setSearchPhrase={setSearchPhrase}
          clicked={clicked}
          searchPhrase={searchPhrase}
          setClicked={setClicked}
          placeholder={placeholder}
          backgroundColor={backgroundColor}
        />
      }
      {showTabs && 
        <Tabs
          activeTab={activeTab}
          tabsData={tabsData}
          setActiveTab={setActiveTab}
        />
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute', 
    top: 0, 
    left: 0, 
    right: 0,
    zIndex: 1,
    paddingTop: 15,
    paddingBottom: 15,
    width: '100%',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchBarContainer: {
    position: 'absolute', 
    top: 54, 
    left: 0, 
    right: 0,
    zIndex: 1,
    paddingTop: 15,
    paddingBottom: 15,
    width: '100%',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchBar__unclicked: {
    padding: 15,
    flexDirection: "row",
    width: "96%",
    backgroundColor: 'transparent',
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  searchBar__clicked: {
    padding: 15,
    flexDirection: "row",
    width: "96%",
    backgroundColor: 'transparent',
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 15,
    marginLeft: 10,
    width: "90%",
  },
  tabsContainer: {
    position: 'absolute', 
    top: 135, 
    left: 0, 
    right: 0,
    zIndex: 1,
    paddingTop: 20,
    paddingBottom: 30,
    width: '100%',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
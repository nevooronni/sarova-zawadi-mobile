import React from 'react'
import { StyleSheet, View, Text, FlatList, Pressable } from 'react-native';
import colors from '../../styles/theme';
import { Image } from 'expo-image';
import { Shadow } from 'react-native-shadow-2';

interface Data {
  id: number;
  image: string;
  title: string;
}

export default function Carousel({ data, isLoading, paddingHorizontal, paddingVertical }: {
  data: Data[],
  isLoading?: boolean,
  paddingHorizontal?: number,
  paddingVertical?: number,
}) {
  return (
    <FlatList
      horizontal
      data={data}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[styles.listContainer, { paddingHorizontal: paddingHorizontal, paddingVertical: paddingVertical }]}      renderItem={({ item, index }) => {
        return (
          
          <Pressable
            key={index}
            // onPress={() => {
            //   onSelect(item);
            //   onCloseModal();
            // }}
            style={styles.pressable}
          >
              <Image
                style={styles.image}
                source={item?.image}
                contentFit='contain'
                transition={1000}
              />
            <Text style={styles.text}>{item?.title ? item?.title : '-'}</Text>
          </Pressable>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    height: 320,
  },
  pressable:{
    paddingTop: 0,
    paddingBottom: 25,
    marginTop: 0,
    marginRight: 25,
    justifyContent: 'flex-start',
    // backgroundColor: 'blue',
    borderLeftWidth: .5, 
    borderRightWidth: .5,
    borderBottomWidth: .5,
    borderColor: colors?.lightGray,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  image: {
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    width: 250, 
    height: 250, 
    marginTop: -34,
  },
  text: { 
    alignSelf: 'center',
    color: colors?.lightGray,
    fontWeight: 'bold',
    fontSize: 15
  },
});

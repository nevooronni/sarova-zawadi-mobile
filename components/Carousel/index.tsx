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

export default function Carousel({ data, isLoading, paddingTop, paddingBottom, paddingHorizontal, paddingVertical }: {
  data: Data[],
  isLoading?: boolean,
  paddingHorizontal?: number,
  paddingVertical?: number,
  paddingTop?: number,
  paddingBottom?: number,
}) {
  return (
    <FlatList
      horizontal
      data={data}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={[{ 
        paddingTop: paddingTop, 
        paddingBottom: paddingBottom,
        paddingHorizontal: paddingHorizontal, 
        paddingVertical: paddingVertical 
      }]}      
      renderItem={({ item, index }) => {
        return (
          
          <Pressable
            key={index}
            // onPress={() => {
            //   onSelect(item);
            //   onCloseModal();
            // }}
            style={styles.pressable}
          >
            <Shadow>
              <View style={{ flex: 1, alignItems: "center", justifyContent: "center", borderRadius: 25, }}>
                <View style={{ backgroundColor: "#eee", borderRadius: 25, overflow: "hidden" }}>
                  <View>
                    <Image
                      style={styles.image}
                      source={item?.image}
                      transition={1000}
                    />
                  </View>
                  <View style={{ paddingTop: 20, paddingBottom: 25, backgroundColor: colors?.white }}>
                    <Text style={styles.text}>
                      {item?.title ? item?.title : '-'}
                    </Text>
                  </View>
                </View>
              </View>
            </Shadow>
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
  },
  pressable:{
    paddingTop: 0,
    paddingBottom: 25,
    marginTop: 0,
    marginRight: 25,
    justifyContent: 'flex-start',
    borderRadius: 25,
  },
  image: {
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    width: 220, 
    height: 220, 
    marginTop: -34,
  },
  text: { 
    alignSelf: 'center',
    color: colors?.lightGray,
    fontWeight: 'bold',
    fontSize: 15
  },
});

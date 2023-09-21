import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../styles/theme';

interface Item {
  id: number;
  itemText: string;
}

const UnorderedList = ({ items }: { items: Item[]}) => {
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View style={styles.listItem} key={index}>
          <Text style={styles.bullet}>•</Text>
          <Text style={styles.itemText}>{item?.itemText}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginLeft: 20, 
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5, 
  },
  bullet: {
    marginRight: 5, 
    fontSize: 15, 
  },
  itemText: {
    fontSize: 13, 
    color: colors?.mediumGray
  },
});

export default UnorderedList;


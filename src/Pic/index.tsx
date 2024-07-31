import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

export const height = 32;

export function PicFromPackage() {
  return (
    <View style={styles.container}>
      <Text>Checkmark from the package</Text>
      <Image source={require('./checked.png')} style={styles.image}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 48,
    height: 48,
    backgroundColor: 'grey',
  },
});

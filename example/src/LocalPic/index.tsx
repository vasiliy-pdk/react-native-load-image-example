import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

export function LocalPic() {
  return (
    <View style={styles.container}>
      <Text>Example image from the example app</Text>
      <Image source={require('./img/example.png')} style={styles.image}></Image>
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
    backgroundColor: 'blue',
  },
});

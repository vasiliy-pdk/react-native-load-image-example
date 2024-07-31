import { StyleSheet, View } from 'react-native';
import { PicFromPackage } from 'react-native-load-image-example';

export default function App() {
  return (
    <View style={styles.container}>
      <PicFromPackage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});

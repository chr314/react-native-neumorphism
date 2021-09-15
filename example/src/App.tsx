import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import Neumorphism from 'react-native-neumorphism';

export default function App() {
  return (
    <View style={styles.container}>
      <Neumorphism
        lightColor={'#dedddd'}
        darkColor={'#979797'}
        shapeType={'flat'}
        radius={20}
      >
        <View style={styles.box}>
          <Text>TEST</Text>
        </View>
      </Neumorphism>
      <Neumorphism
        lightColor={'#dedddd'}
        darkColor={'#979797'}
        shapeType={'pressed'}
        radius={20}
      >
        <View style={styles.box}>
          <Text>TEST 2</Text>
        </View>
      </Neumorphism>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bcbcbc',
  },
  box: {
    width: 200,
    height: 200,
    padding: 20,
  },
});

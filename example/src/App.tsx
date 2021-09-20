import * as React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import Neumorphism from 'react-native-neumorphism';

export default function App() {
  const [pressed, setPressed] = React.useState(false);
  return (
    <View style={styles.container}>
      <Neumorphism
        lightColor={'#dedddd'}
        darkColor={'#979797'}
        shapeType={pressed ? 'basin' : 'flat'}
        radius={20}
      >
        <TouchableOpacity
          onPressIn={() => setPressed(true)}
          onPressOut={() => setPressed(false)}
          style={styles.box}
        >
          <Text>TEST</Text>
          <Image
            style={{ width: 100, height: 100 }}
            source={{
              uri: 'https://via.placeholder.com/150/000000/FFFFFF/?text=Test',
            }}
          />
        </TouchableOpacity>
      </Neumorphism>
      <Neumorphism
        lightColor={'#dedddd'}
        darkColor={'#979797'}
        shapeType={'pressed'}
        radius={20}
        style={{ marginTop: 50 }}
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
    backgroundColor: '#bcbcbc',
    padding: 50,
  },
  box: {
    padding: 40,
  },
});

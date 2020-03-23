import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { Dimensions } from "react-native";

export default function App() {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  return (
    <View style={styles.container}>
      <Text> test</Text>
      <WebView
        source={{ uri: 'http://192.168.0.164:5000/' }}
        style={{ height, width, flex: 1}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

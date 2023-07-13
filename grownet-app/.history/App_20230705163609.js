import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput
      placeholder='example@example.com'
      />
      <TextInput
      placeholder='Password'
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##026CD2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

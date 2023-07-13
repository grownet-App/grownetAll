import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/logo.png')}
      />
      <Text style={styles.h1}>Welcome</Text>
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
    backgroundColor: '#026CD2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1:{
    color: 'white',
    fontSize: '48',
    fontWeight: 'bold'
  },
  logo:{
    width:'80'
  }
});

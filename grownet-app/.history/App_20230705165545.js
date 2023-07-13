import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('./assets/logo.png')}
      />
      <Text style={styles.h1}>Welcome</Text>
      <TextInput style={styles.textInput}
      placeholder='example@example.com'
      />
      <TextInput style={styles.textInput}
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
  tinyLogo:{
    width:150,
    height: 150,
    marginBottom: 100
  },
  textInput:{
    borderWidth: 1,
    borderColor: 'white',
    width: '80%',
    padding: 12,
    marginBottom: 24,
    borderRadius: 16
  }
});

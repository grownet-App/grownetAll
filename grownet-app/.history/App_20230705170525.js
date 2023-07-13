import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('./assets/logo.png')}
      />
      <Text style={styles.welcome}>Welcome</Text>
      <TextInput style={styles.textInput}
      placeholder='example@example.com'
      placeholderTextColor={'white'}
      />
      <TextInput style={styles.textInput}
      placeholder='Password'
      placeholderTextColor={'white'}
      secureTextEntry={true}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#026CD2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome:{
    color: 'white',
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 50
  },
  tinyLogo:{
    width:150,
    height: 150,
    marginBottom: 50
  },
  textInput:{
    borderWidth: 1,
    borderColor: 'white',
    width: '80%',
    padding: 16,
    marginBottom: 24,
    borderRadius: 30,
    color: 'white'
  }
});

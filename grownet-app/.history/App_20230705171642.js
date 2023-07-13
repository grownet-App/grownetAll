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
      <Text style={styles.p}>Let's start!</Text>
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
    flex: 1,
    backgroundColor: '#026CD2',
    alignItems: 'center',
    paddingTop: 100
  },
  welcome:{
    color: 'white',
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 12
  },
  p:{
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30
  },
  tinyLogo:{
    width:180,
    height: 180,
    marginBottom: 30
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

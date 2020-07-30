import React from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const WelcomePage = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../assets/homepagebgd.jpg')}
      style={styles.container}>
      <Text style={styles.appTitle}>Pandemic {'\n'}Shopping</Text>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          navigation.navigate('LoginPage');
        }}>
        <View style={styles.container}>
          <Text style={styles.loginText}>LOG IN</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => {
          navigation.navigate('RegisterPage');
        }}>
        <View style={styles.container}>
          <Text style={styles.registerText}>REGISTER</Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appTitle: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 50,
    paddingLeft: 20,
    paddingTop: 20,
    fontFamily: 'Roboto',
    textShadowColor: 'black',
    textShadowOffset: {width: 3, height: 3},
    textShadowRadius: 10,
  },
  loginButton: {
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: 'black',
    fontSize: 15,
    width: 165,
    height: 50,
    borderRadius: 7,
    marginHorizontal: 30,
    marginTop: 425,
    backgroundColor: 'white',
    padding: 15,
    alignItems: 'center',
  },
  registerButton: {
    borderRadius: 7,
    borderWidth: 2,
    borderColor: 'black',
    fontSize: 15,
    width: 165,
    height: 50,
    backgroundColor: 'black',
    padding: 0,
    marginHorizontal: 220,
    marginTop: -50,
    alignItems: 'center',
  },
  registerText: {
    fontWeight: 'bold',
    fontSize: 15,
    marginTop: 12,
    color: 'white',
  },
  loginText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: -3,
  },
});

export default WelcomePage;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const RegisterPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headertext}>Register</Text>
      <TextInput style={styles.inputBox} placeholder="Username" />
      <TextInput style={styles.inputBox} placeholder="Email Address" />
      <TextInput
        style={styles.inputBox}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('WelcomePage');
        }}>
        <Text style={styles.signupButton}>SIGN UP</Text>
      </TouchableOpacity>
      <Text style={styles.text}>
        By signing up, you agree to the applications Terms of Service and
        Privacy Policy.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headertext: {
    fontSize: 38,
    fontWeight: '100',
    fontFamily: 'monospace',
    marginHorizontal: 20,
    marginTop: 120,
    marginBottom: 20,
  },
  inputBox: {
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 2,
    width: 370,
    marginHorizontal: 20,
    marginTop: 10,
  },
  signupButton: {
    marginVertical: 10,
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 1,
    height: 40,
    width: 370,
    marginHorizontal: 20,
    color: 'white',
    backgroundColor: 'black',
    paddingTop: 8,
    fontSize: 15,
    fontWeight: '100',
  },
  text: {
    marginHorizontal: 20,
  },
});

export default RegisterPage;

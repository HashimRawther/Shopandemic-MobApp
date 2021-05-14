import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const LoginPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headertext}>Log in</Text>
      <TextInput style={styles.inputBox} placeholder="Email Address" />
      <TextInput
        style={styles.inputBox}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('HomePage');
        }}>
        <Text style={styles.loginButton}>LOG IN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ForgotPasswordPage');
        }}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>
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
  loginButton: {
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
  forgotText: {
    marginHorizontal: 22,
  },
});

export default LoginPage;

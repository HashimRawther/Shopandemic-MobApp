import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const ForgotPasswordPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Change your Account password</Text>
      <Text style={styles.text}>
        Make sure it's different from your previous password
      </Text>
      <TextInput style={styles.inputBox} placeholder="Email Address" />
      <TextInput
        style={styles.inputBox}
        placeholder="Enter new password"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Retype your new password"
        secureTextEntry={true}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('WelcomePage');
        }}>
        <Text style={styles.updateButton}>CHANGE PASSWORD</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerText: {
    marginHorizontal: 15,
    marginTop: 100,
    fontSize: 25,
    fontWeight: '200',
  },
  text: {
    marginVertical: 5,
    marginHorizontal: 20,
    color: 'grey',
  },
  inputBox: {
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 2,
    width: 370,
    marginHorizontal: 18,
    marginTop: 10,
  },
  updateButton: {
    marginVertical: 10,
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 1,
    height: 40,
    width: 371,
    marginHorizontal: 19,
    color: 'white',
    backgroundColor: 'black',
    paddingTop: 8,
    fontSize: 15,
    fontWeight: '100',
  },
});

export default ForgotPasswordPage;

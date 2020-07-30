import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const ProfilePage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={require('../assets/edit.png')}
          style={styles.editButton}
        />
      </TouchableOpacity>
      <Image
        source={require('../assets/profilepic.png')}
        style={styles.imgStyle}
      />
      <Text style={styles.name}>User</Text>
      <Text style={styles.name}>Location</Text>
      <View style={styles.flexLayout}>
        <Text style={styles.text}>EMAIL ID: </Text>
        <TextInput style={styles.inputBox} placeholder="user@example.com" />
      </View>
      <View style={styles.flexLayoutone}>
        <Text style={styles.text}>MOBILE NO: </Text>
        <TextInput style={styles.mobileBox} placeholder="9444455555" />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('WelcomePage');
        }}>
        <Image
          source={require('../assets/logout.png')}
          style={styles.logoutButton}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  name: {
    textAlign: 'center',
    marginBottom: 30,
    marginTop: -30,
    fontSize: 25,
    fontWeight: 'bold',
  },
  editButton: {
    marginHorizontal: 360,
    width: 30,
    height: 30,
    marginVertical: 20,
  },
  imgStyle: {
    borderRadius: 60,
    width: 150,
    height: 150,
    marginHorizontal: 130,
    marginTop: 50,
    marginBottom: 60,
  },
  flexLayout: {
    flex: 1,
    flexDirection: 'row',
  },
  flexLayoutone: {
    flex: 1,
    flexDirection: 'row',
    marginTop: -30,
  },
  text: {
    fontSize: 15,
    fontFamily: 'roboto',
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  inputBox: {
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 2,
    width: 250,
    marginHorizontal: 20,
    marginTop: -7,
  },
  mobileBox: {
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 2,
    width: 250,
    marginHorizontal: 3,
    marginTop: -7,
  },
  logoutButton: {
    marginHorizontal: 350,
    width: 40,
    height: 40,
    marginVertical: 20,
  },
});

export default ProfilePage;

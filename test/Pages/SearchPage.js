import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const SearchPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Search Page</Text>
      <TextInput style={styles.inputBox} placeholder="Search.." />
      <TouchableOpacity style={styles.findButton}>
        <Text style={styles.findText}>FIND</Text>
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
    margin: 10,
    fontSize: 36,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  inputBox: {
    height: 50,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 2,
    width: 390,
    marginHorizontal: 10,
    marginTop: 10,
  },
  findButton: {
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: 'white',
    width: 70,
    height: 20,
    borderRadius: 7,
    marginHorizontal: 330,
    marginTop: 20,
    backgroundColor: 'black',
    padding: 15,
    alignItems: 'center',
  },
  findText: {
    color: 'white',
    fontSize: 15,
    marginTop: -10,
  },
});

export default SearchPage;

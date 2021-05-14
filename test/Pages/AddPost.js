import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function UselessTextInput(props) {
  return (
    <TextInput
      {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
      editable
      maxLength={40}
    />
  );
}

const AddPost = ({navigation}) => {
  const [value, onChangeText] = React.useState('Record your response..');

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Add Post</Text>
      <TextInput style={styles.inputBox} placeholder="Title.." />
      <TextInput style={styles.inputBox} placeholder="Location Details.." />
      <UselessTextInput
        multiline
        numberOfLines={4}
        onChangeText={(text) => onChangeText(text)}
        value={value}
        style={styles.responseBox}
      />
      <TouchableOpacity
        style={styles.findButton}
        onPress={() => {
          navigation.navigate('HomePage');
        }}>
        <Text style={styles.findText}>POST</Text>
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
    marginVertical: 15,
  },
  responseBox: {
    height: 270,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 2,
    width: 390,
    marginHorizontal: 10,
    marginVertical: 15,
    textAlignVertical: 'top',
    color: 'grey',
  },
  findButton: {
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: 'white',
    width: 80,
    height: 20,
    borderRadius: 7,
    marginHorizontal: 320,
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

export default AddPost;

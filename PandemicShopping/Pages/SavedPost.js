import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const SavedPost = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Saved Posts</Text>
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
});

export default SavedPost;

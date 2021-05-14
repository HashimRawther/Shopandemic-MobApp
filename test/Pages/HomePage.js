import React, {useState} from 'react';
import {Text, View, Picker, StyleSheet} from 'react-native';

const HomePage = () => {
  const [selectedValue, setSelectedValue] = useState('placeholder');
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome User!</Text>
      <View style={styles.flexLayout}>
        <Text style={styles.infofeedText}>Information {'\n'}Feed</Text>
        <Picker
          selectedValue={selectedValue}
          style={styles.filterButton}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
          <Picker.Item label="Filter by location" value="placeholder" />
          <Picker.Item label="Kolathur" value="kolathur" />
          <Picker.Item label="Anna Nagar" value="annangr" />
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  welcomeText: {
    fontSize: 36,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 50,
  },
  infofeedText: {
    margin: 10,
    fontFamily: 'Roboto',
    fontWeight: '100',
    fontSize: 36,
  },
  flexLayout: {
    flex: 1,
    flexDirection: 'row',
  },
  filterButton: {
    height: 50,
    width: 185,
    marginHorizontal: 10,
    marginVertical: 50,
  },
});

export default HomePage;

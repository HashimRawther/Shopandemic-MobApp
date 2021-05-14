//import 'react-native-gesture-handler';
import React from 'react';
import {Image, StyleSheet} from 'react-native';
import WelcomePage from './Pages/WelcomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import HomePage from './Pages/HomePage';
import ForgotPasswordPage from './Pages/ForgotPasswordPage';
import SavedPost from './Pages/SavedPost';
import SearchPage from './Pages/SearchPage';
import ProfilePage from './Pages/ProfilePage';
import AddPost from './Pages/AddPost';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const StackApp = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? require('./assets/homepageblack.png')
              : require('./assets/homepagewhite.png');
          } else if (route.name === 'Search') {
            iconName = focused
              ? require('./assets/searchblack.png')
              : require('./assets/searchwhite.png');
          } else if (route.name === 'SavedPost') {
            iconName = focused
              ? require('./assets/bookmarkblack.png')
              : require('./assets/bookmarkwhite.png');
          } else if (route.name === 'Profile') {
            iconName = focused
              ? require('./assets/userblack.png')
              : require('./assets/userwhite.png');
          } else if (route.name === 'Add') {
            iconName = focused
              ? require('./assets/addblack.png')
              : require('./assets/pluswhite.png');
          }
          // You can return any component that you like here!
          return (
            <Image
              source={iconName}
              style={styles.image}
              resizeMode="contain"
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'black',
      }}>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Search" component={SearchPage} />
      <Tab.Screen name="SavedPost" component={SavedPost} />
      <Tab.Screen name="Add" component={AddPost} />
      <Tab.Screen name="Profile" component={ProfilePage} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="WelcomePage">
        <StackApp.Screen
          name="WelcomePage"
          component={WelcomePage}
          options={{headerShown: false}}
        />
        <StackApp.Screen
          name="HomePage"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <StackApp.Screen
          name="LoginPage"
          component={LoginPage}
          options={{headerShown: false}}
        />
        <StackApp.Screen
          name="RegisterPage"
          component={RegisterPage}
          options={{headerShown: false}}
        />
        <StackApp.Screen
          name="ForgotPasswordPage"
          component={ForgotPasswordPage}
          options={{headerShown: false}}
        />
      </StackApp.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
  },
});

export default App;

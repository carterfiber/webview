import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import BrowserScreen from './BrowserScreen';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Home'
    }),
  },
  Browser: {
    screen: BrowserScreen,
    navigationOptions: ({navigation}) => ({
      title: navigation.state.params.title
    }),
  },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

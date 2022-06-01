import {StyleSheet, Text, View, TouchableNativeFeedback} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import ToDoListScreen from '../screens/ToDoListScreen';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import DoneScreen from '../screens/DoneScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AddTaskScreen from '../screens/AddTaskScreen';
import SingleTaskScreen from '../screens/SingleTaskScreen';
import CameraScreen from '../screens/CameraScreen';
import SettingsScreen from '../screens/SettingsScreen';
import {useSelector} from 'react-redux';

const TabNavigation = () => {
  const Tab = createMaterialBottomTabNavigator();
  const {settings} = useSelector(state => state.settings);

  return (
    <Tab.Navigator
      activeColor="#f53"
      inactiveColor="white"
      barStyle={{backgroundColor: settings.color}}>
      <Tab.Screen
        name="ToDoListScreen"
        component={ToDoListScreen}
        options={{
          title: 'My Tasks',
          tabBarIcon: ({color, focused}) => {
            return <Icon name="list" size={focused ? 20 : 15} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="DoneScreen"
        component={DoneScreen}
        options={{
          title: 'Done Tasks',
          tabBarIcon: ({color, focused}) => {
            return (
              <Icon
                name="bookmark"
                size={focused ? 20 : 15}
                color={color}
                sold
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({color, focused}) => {
            return (
              <Icon name="edit" size={focused ? 20 : 15} color={color} sold />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  const {settings} = useSelector(state => state.settings);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: settings.color,
          },
          headerTintColor: 'white',
        }}>
        <Stack.Screen
          name="Home"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddTaskScreen"
          component={AddTaskScreen}
          options={{
            title: 'Add Task',
          }}
        />
        <Stack.Screen
          name="TabScreen"
          component={TabNavigation}
          options={{
            headerBackVisible: false,
            title: 'My Tasks',
          }}
        />
        <Stack.Screen
          name="CameraScreen"
          component={CameraScreen}
          options={{title: 'Take Photo'}}
        />
        <Stack.Screen
          name="SingleTaskScreen"
          component={SingleTaskScreen}
          options={{title: 'Single Tasks'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({
  icon: {
    height: 50,
    width: 50,
  },
});

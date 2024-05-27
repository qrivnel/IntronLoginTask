import { View, Text, Image } from 'react-native'
import React from 'react'

//ReactNavigations
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

//Screens
import { HomeScreen, ProfileScreen } from '../screens'

//Icons
import Home from '../assets/home.png'
import Profile from '../assets/profile.png'

type UserStacksProps = {
  currentUser: any,
  setCurrentUser: any,
  setIsAuth: any
};

const UserStacks: React.FC<UserStacksProps> = ({ currentUser, setCurrentUser, setIsAuth }) => {
  return (
    <Tab.Navigator 
    // screenOptions={{
    //   headerShown: false,
    //   tabBarStyle: {
    //     backgroundColor: '#e2d8db',
    //     borderTopWidth: 0.2,
    //     borderTopColor: 'black'
    //   }}}
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: '#875374',
      tabBarShowLabel: false,
      tabBarStyle: {
      backgroundColor: '#e2d8db',
      borderTopWidth: 0.2,
      borderTopColor: 'black'
      },
    })}
    >
      <Tab.Screen name="home" 
      options={{
        tabBarIcon: ({ focused, color, size }) => {
          return <Image source={Home} style={{width: 32, height: 32}} />;
        },
      }}>
        {(props: any) => <HomeScreen {...props} currentUser={currentUser} />}
      </Tab.Screen>
      <Tab.Screen name="profile"
      options={{
        tabBarIcon: ({ focused, color, size }) => {
          return <Image source={Profile} style={{width: 32, height: 32}} />;
        },
      }}>
        {(props: any) => <ProfileScreen {...props} currentUser={currentUser} setCurrentUser={setCurrentUser} setIsAuth={setIsAuth} />}
      </Tab.Screen>
    </Tab.Navigator>
  )
}

export default UserStacks;
import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

//ReactNavigations
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

//Screens
import { LogInScreen, SignInScreen } from '../screens'
import AsyncStorage from '@react-native-async-storage/async-storage';


type AuthStacksProps = {
  setIsAuth: any,
  setCurrentUser: any
};

const AuthStacks: React.FC<AuthStacksProps> = ({ setIsAuth, setCurrentUser }) => {
  const [userList, setUserList] = useState<any>([])

  useEffect(() => {
    AsyncStorage.getItem('userList')
      .then((res: any) => {
        if (res !== null)
          setUserList(JSON.parse(res))
        console.log(res);
      })
    //AsyncStorage.removeItem('userList')
  }, [])


  return (
    <Stack.Navigator
      initialRouteName='signin'
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name='login'>
        {(props: any) => <LogInScreen {...props} userList={userList} setIsAuth={setIsAuth} setCurrentUser={setCurrentUser} />}
      </Stack.Screen>
      <Stack.Screen name='signin'>
        {(props: any) => <SignInScreen {...props} userList={userList} setUserList={setUserList} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
}

export default AuthStacks;
import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

import UserStacks from './UserStacks'
import AuthStacks from './AuthStacks'

//Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function RootNavigator() {
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [currentUser, setCurrentUser] = useState<any>()

  useEffect(() => {
    getCurrentUser()
  }, [])

  const getCurrentUser = () => {
    AsyncStorage.getItem('currentUser')
      .then(res => {
        if (res !== null) {
          setCurrentUser(JSON.parse(res))
          setIsAuth(true)
        }
      }).catch(e => console.log(e))
    //AsyncStorage.removeItem('currentUser')
  }


  return isAuth ?
    <UserStacks currentUser={currentUser} setCurrentUser={setCurrentUser} setIsAuth={setIsAuth} />
    :
    <AuthStacks setIsAuth={setIsAuth} setCurrentUser={setCurrentUser} />
}
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Dimensions, StyleSheet, Keyboard } from 'react-native'
import React, { useState } from 'react'

//Async Storage
import AsyncStorage from '@react-native-async-storage/async-storage';



type LogInScreenProps = {
  userList: any,
  navigation: any,
  setIsAuth: any,
  setCurrentUser: any
};

const LogInScreen: React.FC<LogInScreenProps> = ({ userList, navigation, setIsAuth, setCurrentUser }) => {
  const [userName, setUserName] = useState<string>()
  const [password, setPassword] = useState<string>()

  const [warnMessage, setWarnMessage] = useState<string>('')

  const handleLogin = () => {
    if (userName !== null && userName !== undefined) {
      if (userList !== null) {
        userList.map((user: any) => {
          if (user.userName === userName) {
            if (user.password === password) {
              setIsAuth(true)
              setCurrentUser(user)
              AsyncStorage.setItem('currentUser', JSON.stringify(user))
            }
            else
              setWarnMessage('Kullanıcı adı veya şifre yanlış.')
          }
          else
            setWarnMessage('Kullanıcı adı veya şifre yanlış.')
        })
      }
    } else
      setWarnMessage('Kullanıcı adı veya şifre yanlış.')
  }
  return (
    <SafeAreaView style={styles.container} onTouchStart={()=>Keyboard.dismiss()}>
      <Text style={styles.title}>Giriş Yap</Text>
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        placeholder="Kullanıcı Adı"
        placeholderTextColor="#999999"
        onChangeText={(text) => setUserName(text)}
        value={userName}
      />
      <TextInput
        style={styles.input}
        autoCapitalize='none'
        placeholder="Parola"
        placeholderTextColor="#999999"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <Text style={styles.warningText}>{warnMessage}</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('signin')}>
        <Text style={{ color: 'black', marginTop: 10, fontWeight: 'bold' }}>Hesabınız yok mu?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4d7db',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#945279',
    marginTop: '30%'
  },
  input: {
    width: windowWidth * 0.8,
    height: '6%',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    color: 'black',
  },
  button: {
    width: windowWidth * 0.8,
    backgroundColor: '#945279',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#e4d7db',
    fontSize: 18,
    fontWeight: 'bold',
  },
  warningText: {
    color: 'red',
    fontSize: 16,
  },
});

export default LogInScreen;
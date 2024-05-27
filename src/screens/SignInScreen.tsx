import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, TextInput, Dimensions, ScrollView, Keyboard } from 'react-native'
import React, { useState } from 'react'

//AsyncStorage
import AsyncStorage from '@react-native-async-storage/async-storage';

type SignInScreenProps = {
  userList: any,
  setUserList: any,
  navigation: any
};

const SignInScreen: React.FC<SignInScreenProps> = ({ userList, setUserList, navigation }) => {

  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [userName, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>()
  const [passwordAgain, setPasswordAgain] = useState<string>()

  const [warnMessage, setWarnMessage] = useState<string>('')


  function checkTextInputs(): boolean {
    if (
      firstName !== null && firstName !== undefined &&
      lastName !== null && lastName !== undefined &&
      userName !== null && userName !== undefined &&
      password !== null && password !== undefined &&
      passwordAgain !== null && passwordAgain !== undefined
    )
      return true
    else
      return false
  }
  function checkUsername(): boolean {
    let ret: boolean = true
    if (userList !== null)
      userList.map((user: any) => {
        if (user.userName == userName)
          ret = false
      })
    return ret
  }
  const emptyInputs = () => {
    setFirstName('')
    setLastName('')
    setUserName('')
    setPassword('')
    setPasswordAgain('')
  }
  const handleRegister = () => {
    if (checkTextInputs()) {
      if (checkUsername()) {
        if (password === passwordAgain) {
          const newUser: object = {
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            password: password
          }
          userList.push(newUser)
          AsyncStorage.setItem('userList', JSON.stringify(userList)) //JSON Serialization
          emptyInputs()
          navigation.navigate('login')
        }
        else
          setWarnMessage('Parolalar aynı olmalı.')
      }
      else
        setWarnMessage('Kullanıcı adı mevcut.')
    }
    else
      setWarnMessage('Lütfen tüm alanları doldurun.')
  };

  return (
    <SafeAreaView style={styles.container} onTouchStart={()=>Keyboard.dismiss()}>
      <Text style={styles.title}>Kayıt Ol</Text>
      <TextInput
        style={styles.input}
        placeholder="Ad"
        placeholderTextColor="#999999"
        onChangeText={(text) => setFirstName(text)}
        value={firstName}
      />
      <TextInput
        style={styles.input}
        placeholder="Soyad"
        placeholderTextColor="#999999"
        onChangeText={(text) => setLastName(text)}
        value={lastName}
      />
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
        placeholder="Şifre"
        placeholderTextColor="#999999"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre tekrar"
        placeholderTextColor="#999999"
        onChangeText={(text) => setPasswordAgain(text)}
        value={passwordAgain}
        secureTextEntry={true}
      />
      
      <Text style={styles.warningText}>{warnMessage}</Text>
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Kayıt Ol</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate('login')}>
        <Text style={{color: 'black', marginTop: 10, fontWeight: 'bold'}}>Zaten üye misin?</Text>
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
    marginBottom: 10,
    color: '#945279',
    marginTop: '8%'
  },
  input: {
    width: windowWidth * 0.8,
    height: '6%',
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    color: 'black',
  },
  button: {
    width: windowWidth * 0.8,
    backgroundColor: '#945279',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 5,
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

export default SignInScreen;

import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';


type ProfileScreenProps = {
  currentUser: any,
  navigation: any,
  setCurrentUser: any
  setIsAuth: any
};

const PropfileScreen: React.FC<ProfileScreenProps> = ({ currentUser, setCurrentUser, setIsAuth, navigation }) => {

  const handleLogOut = () => {
    AsyncStorage.removeItem('currentUser')
    setCurrentUser(null)
    setIsAuth(false)
  }
  return currentUser !== null && currentUser !== undefined ?
    <View style={styles.container}>
      <View style={styles.card}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.nameText}>{currentUser.firstName + ' ' + currentUser.lastName}</Text>
          <Text style={styles.usernameText}>{currentUser.userName}</Text>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogOut}>
            <Text style={styles.logoutButtonText}>Çıkış yap</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View> : null
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e4d7db',
  },
  card: {
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    maxWidth: '90%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    alignItems: 'center',
  },
  nameText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#2d3748',
    textAlign: 'center',
  },
  usernameText: {
    fontSize: 20,
    color: '#718096',
    textAlign: 'center',
    marginBottom: 10,
  },
  infoContainer: {
    marginTop: 16,
    alignItems: 'flex-start',
    width: '100%',
  },
  infoText: {
    fontSize: 16,
    color: '#718096',
  },
  infoLabel: {
    fontWeight: '600',
  },
  logoutButton: {
    backgroundColor: '#f56565',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 16,
    shadowColor: '#f56565',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default PropfileScreen;
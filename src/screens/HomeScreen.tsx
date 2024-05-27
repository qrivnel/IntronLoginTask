import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'


type HomeScreenProps = {
  currentUser: any,
  navigation: any
};

const HomeScreen: React.FC<HomeScreenProps> = ({ currentUser, navigation }) => {
  console.log(currentUser);
  
  return currentUser !== null && currentUser !== undefined ?
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.welcomeText}>Hoşgeldin {currentUser.firstName}</Text>
      </View>
    </View>
    : null
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
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 20,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
  },
  welcomeText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 15,
  },
  button: {
    backgroundColor: '#caa6ba',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: '#fff',
  },
});


export default HomeScreen;
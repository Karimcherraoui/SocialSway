import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { DATA } from '../../data/usersData';


export default function CardProfile() {
  const profileData = DATA[0]; // Assuming you want to display the first item in the DATA array

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{profileData.name}</Text>
      <Image source={{ uri: profileData.img }} style={styles.profileImage} />
        <View style={styles.info}>
      <Text style={styles.infoText}>{profileData.country}</Text>
        <Text style={styles.infoText}>{profileData.photos.length}</Text>
        </View>
          


    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    borderRadius: 20,
    marginVertical: 15,
    backgroundColor: '#fff',
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    },
  profileImage: {
    width: "95%",
    height: "70%",
    resizeMode: 'cover',
    borderRadius: 20,

  },
  photoContainer: {
    marginVertical: 10,
  },
  name:{
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 10,
  },

  info:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    paddingHorizontal: 20,
    marginVertical: 20,

  },

  infoText:{
    fontSize: 20,

  },
  
  photoImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

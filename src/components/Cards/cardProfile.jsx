import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function CardProfile({ props }) {
  return (
    <View style={styles.container}>
      <Text style={styles.infoText}>{props.name}</Text>
      <Image source={{ uri: props.img }} style={styles.profileImage} />
      <View style={styles.info}>
        <Text style={styles.infoText}>{props.country}</Text>
        <Text style={styles.infoText}>{props.photos.length}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:"center",
    borderRadius: 20,
    marginVertical: 15,
    backgroundColor: '#fff',
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 4,

  },
  profileImage: {
    width: "95%", // Adjusted to take full width
    height: 500, // Set a specific height or adjust as needed
    resizeMode: 'cover',
    borderRadius: 20,
  },
  info: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  infoText: {
    fontSize: 20,
    marginVertical: 10,
  },
});
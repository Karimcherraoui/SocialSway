import { View, Text, Image } from "react-native";
import React from "react";
import img from "../../assets/images/img_avatar.png";
import { ScrollView } from "react-native";

export default function Profile() {

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={styles.img} source={img}></Image>
        <Text style={styles.name}>test</Text>
      </View>
      <View style={styles.containerBio}>
        <Text style={styles.bioLabel}>Bio : </Text>
        <Text style={styles.description}>
          Le Lorem Ipsum est simplement du faux texte employé dans la
          composition et la mise en page avant impression. Le Lorem Ipsum est le
          faux texte standard de l'imprimerie depuis les années 1500, quand un
          imprimeur anonyme assembla ensemble des morceaux de texte pour
          réaliser un livre spécimen de polices de texte. Il n'a pas fait que
          survivre cinq siècles, mais s'est aussi adapté à la bureautique
          informatique, sans que son contenu n'en soit modifié. Il a été
          popularisé dans les années 1960 grâce à la vente de feuilles Letraset
          contenant des passages du Lorem Ipsum, et, plus récemment, par son
          inclusion dans des applications de mise en page de texte, comme Aldus
          PageMaker.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = {
  container: {
    alignItems: "center",
    backgroundColor: "#b20000",
    shadowColor: "gray",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  img: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    marginTop: 30,
    marginBottom: 15,
    borderRadius: 100,
    borderWidth: 7,
    borderColor: "white",
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15,
    color: "white",
  },
  bioLabel: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "black",
  },
  containerBio: {
    margin: 30,
  },
  description: {
    fontSize: 20,
    color: "black",
  },
};

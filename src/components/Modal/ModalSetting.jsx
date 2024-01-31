import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Switch } from "react-native";

const ModalSetting = ({ visible, setVisible }) => {
    const [isAnimaux, setIsAnimaux] = useState(false);
    const [isVoyage, setIsVoyage] = useState(false);
    const [isVoiture, setIsVoiture] = useState(false);


    const toggleSwitchAnim = () => setIsAnimaux(previousState => !previousState);
    const toggleSwitchVoy = () => setIsVoyage(previousState => !previousState);
    const toggleSwitchVoit = () => setIsVoiture(previousState => !previousState);


  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      // onRequestClose={() => {
      //   Alert.alert('Modal has been closed.');
      //   setModalVisible(!props);
      // }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
            <View style={styles.textContainer}>
            <Text style={styles.reglageText}>Paramètres</Text>
            <Text style={styles.modalText}>Utilisez paramètres ci-dessous pour gerer les categories a afficher</Text> 
            </View>
            <View style={styles.line} />

        <View style={styles.switch}>
            <Text style={styles.textCategorie}>Animaux</Text>
            <Switch
              trackColor={{ true: "#ff6666" }}
              ios_backgroundColor="gray"
              onValueChange={toggleSwitchAnim}
              value={isAnimaux}
            />
          </View>


          <View style={styles.switch}>
            <Text style={styles.textCategorie} >Voyages</Text>
            <Switch
              trackColor={{ true: "#ff6666" }}
              ios_backgroundColor="gray"
              onValueChange={toggleSwitchVoy}
              value={isVoyage}
            />
          </View>


          <View style={styles.switch}>
            <Text style={styles.textCategorie} >Voitures</Text>
            <Switch
              trackColor={{ true: "#ff6666" }}
              ios_backgroundColor="gray"
              onValueChange={toggleSwitchVoit}
              value={isVoiture}
            />
          </View>
          
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setVisible(!visible)}
          >
            <Text style={styles.textStyle}>Valider les paramètres</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    switch: {
        marginVertical: 20,
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'space-between',
        width:"80%",
        
      },
      line: {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: '80%', // Adjust as needed
        marginVertical: 10,
      },
  centeredView: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",

  },
  textCategorie:{
    fontSize:20,

  },
  modalView: {

    width:"90%",
    height:"60%",
    backgroundColor: "white",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textContainer:{
    marginBottom: 15,
  },
  button: {
    // borderRadius: 20,
    marginTop: 40,
    paddingHorizontal: 40,
    paddingVertical: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize:15,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",

  },
  reglageText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight:"bold",
    fontSize:20,

  },
});

export default ModalSetting;

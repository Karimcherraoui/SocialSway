import React from "react";
import { FlatList, StyleSheet } from "react-native";
import CardProfile from "../../components/Cards/cardProfile";
import { DATA } from '../../data/usersData';
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (

      <FlatList
        data={DATA}
        renderItem={({ item }) => <CardProfile props={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
      />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContent: {
    // alignItems: 'center',
  },
});
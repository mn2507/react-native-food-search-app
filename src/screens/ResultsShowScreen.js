import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [shopResult, setShopResult] = useState(null);
  /* using null for useState because we are expecting the state value to be an object
and not an array of results. Using null indicates that we do not have any data yet. */
  const getShopResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setShopResult(response.data);
  };
  useEffect(() => {
    getShopResult(id);
  }, []);

  if (!shopResult) {
    return null;
  }

  return (
    <View>
      <Text>{shopResult.name}</Text>
      <FlatList
        data={shopResult.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});

export default ResultsShowScreen;

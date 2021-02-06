import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ResultsDetail = ({ itemresult }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: itemresult.image_url }} />
      <Text style={styles.name}>{itemresult.name}</Text>
      <Text>
        {itemresult.rating} Stars, {itemresult.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
      marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontWeight: "bold",
  },
});

export default ResultsDetail;

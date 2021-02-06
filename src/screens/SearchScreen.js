import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [info, setInfo] = useState("");
  return (
    <View>
      <SearchBar
        info={info}
        onInfoChange={(newInfo) => setInfo(newInfo)}
        onInfoSubmit={() => console.log("Info submitted")}
      />
      <Text>Search Screen</Text>
      <Text>{info}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;

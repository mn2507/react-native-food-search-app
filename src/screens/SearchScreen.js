import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [info, setInfo] = useState("");
  const [results, setResults] = useState([]);

const searchApi = async () => {
  const response = await yelp.get("/search", {
    params: {
      limit:50,  /* === "/search?limit=50" */
      term: info,
      location: "Kuala Lumpur" 
    }
  });
  setResults(response.data.businesses);
};

  return (
    <View>
      <SearchBar
        info={info}
        onInfoChange={setInfo}
        onInfoSubmit={searchApi}
      />
      <Text>Search Screen</Text>
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;

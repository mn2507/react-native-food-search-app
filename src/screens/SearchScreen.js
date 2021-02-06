import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [info, setInfo] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === "$ || "$$" || "$$$""
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    // <View style={{ flex: 1 }}></View>
    <>
      <SearchBar
        info={info}
        onInfoChange={setInfo}
        onInfoSubmit={() => searchApi(info)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ScrollView>
        <ResultsList
          filteredresults={filterResultsByPrice("$")}
          title="Cheapskate"
        />
        <ResultsList
          filteredresults={filterResultsByPrice("$$")}
          title="Average"
        />
        <ResultsList
          filteredresults={filterResultsByPrice("$$$")}
          title="Baller!"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;

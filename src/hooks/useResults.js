import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchApi = async (searchInfo) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50 /* === "/search?limit=50" */,
          term: searchInfo,
          location: "Kuala Lumpur",
        },
      });
      setResults(response.data.businesses);
    } catch (e) {
      setErrorMessage("Ennamo kadhaiya aachu saar!");
    }
  };

  /*
  searchApi('pasta')

  Call searchApi when component is first rendered.
  ... is a BAD CODE!

  Reason: When the setter is called, the state gets updated
  which causes the component to be rerendered.
  When the component gets rerendered, searchApi is called again immediately.
  This process repeats in an endless loop.

  */

  useEffect(() => {
    searchApi("pasta");
  }, []);

  return[searchApi, results, errorMessage];
};



import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 6EPerup82fegd6MGEi0lFxxhr7NyEuhqEYZNHm0hmMrj16eHfPzbccnGN04EPFhNdDZHWz5VmBGOhln78zlXt2ysfENcrq9nsvt7ru1zvTzmc9BJYuSqV7om8g4dYHYx",
  },
});

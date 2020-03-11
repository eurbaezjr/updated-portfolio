import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRepos: function() {
    return axios.get("https://api.github.com/users/eurbaezjr/repos");
  },
  getRepo: function(repo) {
    return axios.get("https://api.github.com/users/eurbaezjr/" + repo);
  }
};

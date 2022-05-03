export default {
  fetchData({ commit }) {
    return fetch("http://localhost:3000/data")
      .then((res) => res.json())
      .then((data) => {
        commit("setTabs", data.tabs);
        commit("setTabdata", data.tabdata);
        commit("setPlugings", data.plugins);
      })
      .catch((error) => console.log(error));
  },

  postData({ commit }, { data }) {
    return fetch("http://localhost:3000/data", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        commit("setTabs", data.tabs);
        commit("setTabdata", data.tabdata);
        commit("setPlugings", data.plugins);
      })
      .catch((error) => console.log(error));
  },
};

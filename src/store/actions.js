const baseUrl="https://challenge2022.herokuapp.com/api/data";
export default {
  fetchData({ commit }) {
    return fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        commit("setTabs", data.tabs);
        commit("setTabdata", data.tabdata);
        commit("setPlugings", data.plugins);
      })
      .catch((error) => console.log(error));
  },

  postData({ commit }, { data }) {
    return fetch(baseUrl, {
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

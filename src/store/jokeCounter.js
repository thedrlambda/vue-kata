import ajax from "../utils";
export default {
  state() {
    return {
      count: 0,
      joke: undefined,
    };
  },

  mutations: {
    add(state, payload) {
      state.joke = undefined;
      payload ? (state.count += payload) : state.count++;
    },
    subtract(state, payload) {
      state.joke = undefined;
      payload ? (state.count -= payload) : state.count--;
    },
    joke(state, payload) {
      state.joke = payload;
    },
  },

  actions: {
    getJoke({ commit }) {
      ajax().then((r) => {
        commit("joke", r.text);
      });
    },
  },
};

import { createStore } from 'vuex';

const store = createStore({
  state: {
    user: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    async fetchUser({ commit }) {
      try {
        const response = await fetch('/api/user'); // Substitua com sua rota de API real
        const user = await response.json();
        commit('SET_USER', user);
      } catch (error) {
        console.error('Erro ao buscar usuário:', error);
      }
    },
  },
  getters: {
    isLoggedIn: (state) => !!state.user,
  },
});

export default store;

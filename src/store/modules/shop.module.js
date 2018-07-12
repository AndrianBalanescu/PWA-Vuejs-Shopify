import shopApi from '@/api/shop.api';

const state = {
  shop: null,
};

const getters = {
  getShop: (state) => {
    return state.shop;
  },
};

const actions = {
  async fetchShop({ commit }) {
    const shop = await shopApi.getShop();
    if (!shop) {
      return shop;
    }
    commit('setShop', shop);
  },
};

const mutations = {
  setShop(state, shop) {
    state.shop = shop;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

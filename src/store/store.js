import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import taxons from './modules/taxons';
import products from './modules/products';
import session from './modules/session';
import user from './modules/user';

const store = new Vuex.Store({
  modules: {
    taxons,
    products,
    session,
    user
  }
})

export default store;
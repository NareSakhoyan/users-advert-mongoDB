import Vue from 'vue'
import Vuex from 'vuex'
import AdvertDataService from "../services/AdvertDataService";
import {ALL_ADVERTS} from "./mutation-types";

Vue.use(Vuex)

export default new Vuex.Store({
    state: () => ({
      allAdverts: [],
      userID: null,
      user: {},
      userAdverts: [],
      userBookmarks: [],
    }),
    mutations: {
        [ALL_ADVERTS] (state, data) {
            state.allAdverts = data
        }
    },
    actions: {
       getAllAdverts({commit}) {
           return AdvertDataService.getAll()
                    .then(response => {
                        const data = response.data
                        commit(ALL_ADVERTS, data)
                        return data
                    })
                    .catch(error => {
                      console.log(error)
                    })
        // const data = await AdvertDataService.getAll()
        // commit(ALL_ADVERTS, data)
      }
    },
    getters: {
        [ALL_ADVERTS]: state => state.allAdverts
    },
  })

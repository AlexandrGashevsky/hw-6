import { resolveComponents } from 'uri-js';
import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {
    events: []
  },
  getters: {
    allEvents(state){
      return state.events;
    }
  },
  actions:{
  },
  mutations: {
    
  }
})

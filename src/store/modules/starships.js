import axios from 'axios'
import moment from 'moment'

const state = {
  list: [],
  listUpdatedAt: null
}

const mutations = {
  updateStarshipsList (state, payload) {
    state.list = payload
    state.listUpdatedAt = moment().format('LLLL')
  }
}

const actions = {
  getStarships ({commit}, params) {
    return new Promise((resolve, reject) => {
      axios.get('https://swapi.co/api/starships', {params})
        .then(res => {
          commit('updateStarshipsList', res.data.results)
          resolve()
      }).catch(err => {
        reject()
      })
    })
  }
}

const getters = {}

export default {state, mutations, actions, getters}

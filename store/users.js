
export default {
  state: {
    usersArr: [],
    JSONData: [],
  },

  actions: {
    LS_INIT ({commit}) {
      try {
        //Init an array of users in LS
        const users = JSON.parse(localStorage.getItem('users'));
        commit('VEX_SAVE_USERS', users)
      } catch (error) {
        throw error
      }

    },

    ADD_NEW_USER({commit}, _user) {
      try {
        //get users from LS
        const vx_array = JSON.parse(window.localStorage.getItem('users'));

        //push new users
        vx_array.push(_user);

        //set new array with new user
        localStorage.setItem('users', JSON.stringify(vx_array));

        //save to vuex state
        commit('VEX_SAVE_USERS', vx_array)
      } catch (error) {
        throw error
      }
    },

    SAVE_EDIT_USER({commit}, _user) {
      try {

        //get users from LS but bot edited user
        const vx_array = JSON.parse(localStorage.getItem('users')).filter(user => user.id !== _user.id);

        //push edited user to users Array
        vx_array.push(_user);

        //set new array with edites user
        localStorage.setItem('users', JSON.stringify(vx_array));

        //save to vuex state
        commit('VEX_SAVE_USERS', vx_array)

      } catch (error) {
        throw error
      }
    },

    DELETE_USER({commit}, _user) {
        //get users but not deleted user
        const vx_array = JSON.parse(localStorage.getItem('users')).filter(user => user.id !== _user.id);

        //save new array in LS
        localStorage.setItem('users', JSON.stringify(vx_array));

        //save to vuex state
        commit('VEX_SAVE_USERS', vx_array)

    },

    PARSE_DATA({commit}, _data) {

      //parse from field
      const vx_data = JSON.parse(_data);

      //save to LS
      localStorage.setItem('parcedData', JSON.stringify(vx_data));

      //Get from LS
      const vx_array = JSON.parse(localStorage.getItem('parcedData'))
      console.log(vx_array)

      //save to vuex state
      commit('VEX_SAVE_DATA', vx_array)
    },
  },

  mutations: {
    VEX_SAVE_USERS (state, _params) {
      state.usersArr = _params
    },

    VEX_SAVE_DATA (state, _params) {
      state.JSONData = _params;
    }
  },

  getters: {
    GET_USERS (state) {
      return state.usersArr
    },

    GET_DATA (state) {
      return state.JSONData
    }
  }
}


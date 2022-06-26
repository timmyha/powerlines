import { proxy } from "valtio";

let store = proxy({
  menu: {
    genres: false,
    moods: false,
    user: false
  },

  loading: true,

  data: [],

  allUsers: [],

  userData: [],

  signIn: {
    email: '',
    password: ''
  },
  username: {"display_name": ''},

  hasAccount: true

})

export default store
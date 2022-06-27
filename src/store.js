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
    password: '',
    display_name: ''
  },

  hasAccount: true,

  profileEdit: false,

  profileEditForm: {
    avatar: '',
    username: '',
    bio: ''
  }

})

export default store
import { proxy } from "valtio";

let store = proxy({
  // determines which dropdown menu is open
  menu: {
    genres: false,
    moods: false,
    user: false
  },
  // loading state for blog posts
  loading: true,
  // data from posts
  data: [],
  // list of all users
  allUsers: [],
  // data for logged in user
  userData: [],
  // sign in/up form
  signIn: {
    email: '',
    password: '',
    display_name: ''
  },
  // determines what should be seen in the User dropdown menu
  hasAccount: true,
  // determines whether edit form is visible in User dropdown menu
  profileEdit: false,
  // profile edit form in User dropdown menu
  profileEditForm: {
    avatar: '',
    username: '',
    bio: ''
  }

})

export default store
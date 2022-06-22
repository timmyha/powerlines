import { proxy } from "valtio";

let store = proxy({
  menu: {
    genres: false,
    moods: false,
    user: false
  },
  loading: true,
  data: []
})

export default store
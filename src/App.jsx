import { useEffect } from 'react'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Dropdown from './components/Dropdown'
import { useSnapshot } from 'valtio'
import supabase from '../utils/supabase'
import store from './store'

function App() {

  const user = supabase.auth.user()
  const snapshot = useSnapshot(store)

  // loads user profile data
  useEffect(() => {
    const getUserInfo = async() => {
      let { data: profile, error } = await supabase
      .from('profile')
      .select('*')
      if (profile !== null) {
      store.userData = profile[0]
      }
    }
      if (user) {
        getUserInfo();
      }
  },[user, store.userData])

  // loads userlist
  useEffect(() => {
    const getUserList = async() => {
      let { data: profile, error } = await supabase
        .from('profile')
        .select('display_name')

        store.allUsers = profile
    }
    if (user) {
    getUserList()
    }
  }, [])

  // loads all blog posts
  useEffect(() => {
    async function getAllPosts() {
    const { data: posts, error } = await supabase
      .from('posts')
      .select('*')

      if (error) {
        store.data = [{
          title: loading,
          content: loading
        }]
        store.loading = true
      } else {
      store.data = posts
      store.loading = false
      }
    }
    getAllPosts()
  }, [])
  
  const handleDropdown = (id) => {
   return store.menu = {
        [id]: !store.menu[id]
      }
  }

  return (
    <Container>
      <Navbar handleDropdown={handleDropdown} />
      <Dropdown />
      <Body />
    </Container>
  )
}

const Container = styled.div`
  font-family: IBM Plex Serif;
  width: 100%;
  height: 200%;
  color: #fff;
  font-weight: 400;`

export default App

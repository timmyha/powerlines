import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Dropdown from './components/Dropdown'
import { useSnapshot } from 'valtio'
import store from './store'

function App() {

  const snapshot = useSnapshot(store)
  
  const handleDropdown = (id) => {
   return store.menu = {
        genres: false,
        moods: false,
        user: false,
        [id]: !store.menu[id]
      }
  }

  console.log(store)


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

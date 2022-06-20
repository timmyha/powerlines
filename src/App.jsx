import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Dropdown from './components/Dropdown'

function App() {

  const [menu, setMenu] = useState({
    genres: false,
    moods: false,
    user: false
  })

  const handleDropdown = (id) => {
   return setMenu((
      {
        genres: false,
        moods: false,
        user: false,
        [id]: !menu[id]
      }
    ))
  }

  console.log(menu)
  return (
    <Container>
      <Navbar
        handleDropdown={handleDropdown} 
        menu={menu} />
      <Dropdown
        menu={menu}
      />
      <Body />
    </Container>
  )
}

const Container = styled.div`
  font-family: IBM Plex Serif;
  width: 100vw;
  height: 100vh;
  color: #fff;
  font-weight: 400;`

export default App

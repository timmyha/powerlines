import { useState, useEffect } from 'react'
import UserCard from './components/UserCard'
import MoodCard from './components/MoodCard'
import GenreCard from './components/GenreCard'
import MainDisplay from './components/MainDisplay'
import styled from 'styled-components'
import supabase from '../utils/supabase'

function App() {

  const [focused, setFocused] = useState({
   user: false,
   moods: false,
   genres: false,
   main: false
})

console.log(focused)

  const setMainFocus = (id) => {
    setFocused({
      [id]: true
    })
  }
  
  return (
    <Body>
      <UserCard
        focused={focused} 
        setMainFocus={setMainFocus} />
      <MoodCard 
        focused={focused} 
        setMainFocus={setMainFocus} />
      <GenreCard
        focused={focused} 
        setMainFocus={setMainFocus} />
      <MainDisplay 
        focused={focused} 
        setMainFocus={setMainFocus} />
    </Body>
  )
}

const Body = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: transparent;`

export default App

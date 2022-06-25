import styled from "styled-components"
import { motion } from "framer-motion"
import Genres from "./dropdown/Genres"
import Moods from "./dropdown/Moods"
import { useSnapshot } from 'valtio'
import store from '../store'
import UserInfo from "./dropdown/UserInfo"

const Dropdown = ({ menu }) => {

  const menuState = useSnapshot(store.menu)

  return (
    <Container>
    { menuState.genres
    ? <motion.div
        layout
        data-genre={menuState.genres}
        initial={{ y: 0}}
        className="genres"
    ><Genres menu={menu}/></motion.div>
    : menuState.moods 
    ? <motion.div
        layout
        data-mood={menuState.moods}
        initial={{ y: 0}}
        className="moods"
      ><Moods /></motion.div>
    : menuState.user 
    ? <motion.div
        layout
        data-user={menuState.user}
        initial={{ y: 0}}
        className="user"
      ><UserInfo /></motion.div>
    : <motion.div layout className="child" />
    }
    </Container>
  )
}

const Container = styled.div`
`

export default Dropdown
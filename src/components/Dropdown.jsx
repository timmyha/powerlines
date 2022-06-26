import styled from "styled-components"
import { motion } from "framer-motion"
import Genres from "./dropdown/Genres"
import Moods from "./dropdown/Moods"
import { useSnapshot } from 'valtio'
import store from '../store'
import UserDropdown from "./dropdown/UserDropdown"

const Dropdown = ({ menu }) => {

  const snap = useSnapshot(store.menu)

  return (
    <Container>
    { snap.genres
    ? <motion.div
        layout
        data-genre={snap.genres}
        initial={{ y: 0}}
        className="genres"
    ><Genres menu={menu}/></motion.div>
    : snap.moods 
    ? <motion.div
        layout
        data-mood={snap.moods}
        initial={{ y: 0}}
        className="moods"
      ><Moods /></motion.div>
    : snap.user 
    ? <motion.div
        layout
        data-user={snap.user}
        initial={{ y: 0}}
        className="user"
      ><UserDropdown /></motion.div>
    : <motion.div layout className="child" />
    }
    </Container>
  )
}

const Container = styled.div`
`

export default Dropdown
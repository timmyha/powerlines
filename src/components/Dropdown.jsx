import styled from "styled-components"
import { motion } from "framer-motion"
import Genres from "./dropdown/Genres"
import Moods from "./dropdown/Moods"

const Dropdown = ({ menu }) => {
  return (
    <Container>
    { menu.genres
    ? <motion.div
        layout
        data-genre={menu.genres}
        initial={{ y: 0}}
        className="genres"
    ><Genres menu={menu}/></motion.div>
    : menu.moods 
    ? <motion.div
        layout
        data-mood={menu.moods}
        initial={{ y: 0}}
        className="moods"
      ><Moods /></motion.div>
    : menu.user 
    ? <motion.div
        layout
        data-user={menu.user}
        initial={{ y: 0}}
        className="user"
      />
    : <motion.div layout className="child" />
    }
    </Container>
  )
}

const Container = styled.div`
`

export default Dropdown
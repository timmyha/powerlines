import styled from "styled-components"
import { motion } from "framer-motion"

const Genres = ({ menu }) => {
  return (
    <Container> 
      <motion.div
  animate={{ opacity: 1 }}
  transition={{ duration: 2 }}
    >
     <List>
      <ListItem>
        cyberpunk
      </ListItem>
      <ListItem>
        romance
      </ListItem>
      <ListItem>
        horror
      </ListItem>
      <ListItem>
        nostalgia
      </ListItem>
      <ListItem>
        history
      </ListItem>
      <ListItem>
        work
      </ListItem>
      <ListItem>
        vibes
      </ListItem>
      <ListItem>
        fantasy
      </ListItem>
      <ListItem>
        random
      </ListItem>
      <ListItem>
        steampunk
      </ListItem>
      <ListItem>
        hard sci-fi
      </ListItem>
     </List>
     </motion.div>
    </Container>
  )
}

const Container = styled.nav`
  position: absolute;
  width: 100vw;
  height: 300px;
  overflow-y: scroll !important;
  scrollbar-width: none;
  &::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}
`

const List = styled.ol`
  position: absolute;
  flex-direction: column;
  left: 20%;
`

const ListItem = styled.li`
  width: 100%;
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 53px;
  align-items: center;
  cursor: pointer;
  right: 0;
  color: #222;
  transition: .1s;
    &:hover {
      color: white;
    }
  `

export default Genres
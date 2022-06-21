import styled from "styled-components"

const Moods = ({ menu }) => {
  return (
    <Container>
     <List>
      <ListItem>
        melancholy
      </ListItem>
      <ListItem>
        angst
      </ListItem>
      <ListItem>
        idyllic
      </ListItem>
      <ListItem>
        cheerful
      </ListItem>
      <ListItem>
        joyous
      </ListItem>
      <ListItem>
        adventurous
      </ListItem>
      <ListItem>
        hyped
      </ListItem>
      <ListItem>
        overwhelmed
      </ListItem>
      <ListItem>
        lustful
      </ListItem>
      <ListItem>
        scheming
      </ListItem>
      <ListItem>
        wanderlust
      </ListItem>
     </List>
    </Container>
  )
}

const Container = styled.nav`
  position: absolute;
  width: 100%;
  height: 300px;
  left: 50px;
  transition: .2s;
  overflow-y: scroll !important;
`

const List = styled.ol`
  flex-direction: column;
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

export default Moods
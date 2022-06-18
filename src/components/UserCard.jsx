import styled from "styled-components"
import { motion } from "framer-motion"

const UserCard = ({ setMainFocus }) => {
  return (
    <Container onClick={() => setMainFocus('user')} as={motion.div} whileHover={{ translateY: -3 }} >
      <Username>timmyha</Username>
    </Container>
  )
}

const Container = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #F14081;
  z-index: 2;`

const Username = styled.span`
  position: absolute;
  right: 10px;
  color: white;
  font-family: IBM Plex Sans, Helvetica Neue, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  text-align: right;
  cursor: pointer;
`

export default UserCard
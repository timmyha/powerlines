import styled from "styled-components"
import { motion } from "framer-motion"

const MoodCard = ({ focused, setMainFocus }) => {
  return (
    <>
    { focused.user === true
    ? <ContainerMin onClick={() => setMainFocus('moods')} as={motion.div} whileHover={{ translateY: -3}} >
        <Username>moods</Username>
      </ContainerMin>
    : <Container onClick={() => setMainFocus('moods')} as={motion.div} whileHover={{ translateY: -3 }} >
        <Username>moods</Username>
      </Container>
    }
    </>
  )
}

const Container = styled.div`
  position: absolute;
  top: 35px;
  width: 100%;
  height: 100vh;
  border-radius: 15px 15px 0 0;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.25);
  background-color: #F3B25E;
  z-index: 5;`

const ContainerMin = styled.div`
  position: absolute;
  top: 83%;
  width: 100%;
  height: 100vh;
  border-radius: 15px 15px 0 0;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.25);
  background-color: #F3B25E;
  z-index: 5;`

const Username = styled.span`
  position: absolute;
  right: 10px;
  width: 100%;
  color: white;
  font-family: IBM Plex Sans, Helvetica Neue, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  text-align: right;
  cursor: pointer;
  `

export default MoodCard
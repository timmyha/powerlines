import styled from "styled-components"
import { motion } from "framer-motion"

const GenreCard = ({ focused, setMainFocus }) => {
  return (
    <>
      {focused.user || focused.moods === true
        ? <ContainerMin
            onClick={() => setMainFocus('genres')}
            as={motion.div} whileHover={{ translateY: -3 }}
          >
            <Username>genres</Username>
        </ContainerMin>
        : <Container as={motion.div} whileHover={{ translateY: -3 }} onClick={() => setMainFocus('genres')} >
            <Username>genres</Username>
          </Container>
      }
    </>
  )
}

const Container = styled.div`
  position: absolute;
  top: 70px;
  width: 100%;
  height: 100%;
  border-radius: 15px 15px 0 0;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.25);
  background-color: #689BFF;
  align-content: right;
  z-index: 10;`

const ContainerMin = styled.div`
  position: absolute;
  top: 88%;
  width: 100%;
  height: 100%;
  border-radius: 15px 15px 0 0;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.25);
  background-color: #689BFF;
  align-content: right;
  transition: .1s;
  z-index: 10;`

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

export default GenreCard
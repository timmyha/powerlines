import styled from "styled-components"
import { motion } from "framer-motion"

const MainDisplay = ( {focused, setMainFocus}) => {

  return (
    <>

    { focused.genres || focused.moods || focused.user === true
    ? <ContainerMin as={motion.div} whileHover={{ translateY: -3 }}>
      <PageTitle onClick={() => setMainFocus('main')}>powerlines.</PageTitle>
    </ContainerMin>
    : <Container as={motion.div} whileHover={{ translateY: -3 }}>
    <PageTitle>powerlines.</PageTitle>
    <Text>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam eligendi, atque eum autem vitae esse quae optio. Quae mollitia unde rem repellendus sapiente beatae aperiam, deserunt sit magnam quas?
    </p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam eligendi, atque eum autem vitae esse quae optio. Quae mollitia unde rem repellendus sapiente beatae aperiam, deserunt sit magnam quas?
    </p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam eligendi, atque eum autem vitae esse quae optio. Quae mollitia unde rem repellendus sapiente beatae aperiam, deserunt sit magnam quas?
    </p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam eligendi, atque eum autem vitae esse quae optio. Quae mollitia unde rem repellendus sapiente beatae aperiam, deserunt sit magnam quas?
    </p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam eligendi, atque eum autem vitae esse quae optio. Quae mollitia unde rem repellendus sapiente beatae aperiam, deserunt sit magnam quas?
    </p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam eligendi, atque eum autem vitae esse quae optio. Quae mollitia unde rem repellendus sapiente beatae aperiam, deserunt sit magnam quas?
    </p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam eligendi, atque eum autem vitae esse quae optio. Quae mollitia unde rem repellendus sapiente beatae aperiam, deserunt sit magnam quas?
    </p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni totam eligendi, atque eum autem vitae esse quae optio. Quae mollitia unde rem repellendus sapiente beatae aperiam, deserunt sit magnam quas?
    </p>
    </Text>
  </Container> }
      </>
  )
}

const Container = styled.div`
  position: absolute;
  top: 105px;
  width: 100%;
  height: 90%;
  border-radius: 15px 15px 0 0;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.25);
  background-color: #222222;
  transition: .1s;
  z-index: 15;`

const ContainerMin = styled.div`
  position: absolute;
  top: 93%;
  width: 100%;
  height: 90%;
  border-radius: 15px 15px 0 0;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.25);
  background-color: #222222;
  transition: .1s;
  z-index: 15;`

const Text = styled.div`
  color: white;
  font-size: 18px;
  width: 300px;
  height: 90%;
  cursor: pointer;
  overflow-y: scroll !important;`

const PageTitle = styled.h1`
  display: flex;
  padding-left: 20px;
  color: white;
  font-family: IBM Plex Sans, Helvetica Neue, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 52px;
  cursor: pointer;
  `

export default MainDisplay
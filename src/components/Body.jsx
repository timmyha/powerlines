import styled from "styled-components"
import AllPosts from '../pages/AllPosts'

const Body = () => {
  return (
    <Content>
      hi
      <AllPosts />
    </Content>
  )
}

const Content = styled.div`
  position: absolute;
  background-color: #222;
  padding-top: 50px;
  height: 100vh;
  width: 100%;
  padding-bottom: 900px;
  z-index: 10;
  `

export default Body
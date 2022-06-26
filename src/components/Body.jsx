import styled from "styled-components"
import AllPosts from '../pages/AllPosts'

const Body = () => {
  return (
    <Content>
      <AllPosts />
    </Content>
  )
}

const Content = styled.div`
  position: absolute;
  background-color: #222;
  padding-top: 200px;
  height: 100vh;
  width: 100%;
  padding-bottom: 900px;
  z-index: 10;
  `

export default Body
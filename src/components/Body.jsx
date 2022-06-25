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
  background-color: #222;
  padding-top: 200px;
  height: 100vh;
  padding-bottom: 900px;
  `

export default Body
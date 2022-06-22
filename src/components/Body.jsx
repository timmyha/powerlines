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
  padding-top: 40px;
  height: 100vh;
  overscroll-y: scroll;
  padding-bottom: 300px;
  `

export default Body
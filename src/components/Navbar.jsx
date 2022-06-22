import styled from "styled-components"
import { useSnapshot } from 'valtio'
import store from '../store'


const Navbar = ({ handleDropdown }) => {

  const menuState = useSnapshot(store.menu)

  return (
    <Nav>
      <MainLogo onClick={() => handleDropdown('closed')} className="mainlogo">
        <span style={{ "cursor": "pointer" }}>powerlines.</span>
      </MainLogo>
      <MainLogoCollapse>
        <span style={{ "cursor": "pointer" }}>pwrlns.</span>
      </MainLogoCollapse>
      <Links>
        <Genres onClick={() => handleDropdown('genres')}>
          <span
            style={menuState.genres ? { "color": "#F1406A" } : { "color": "white" }}>
            genres
          </span>
        </Genres>
        <Moods onClick={() => handleDropdown('moods')}>
          <span
            style={menuState.moods ? { "color": "#F3D25E" } : { "color": "white" }}>
            moods
          </span>
        </Moods>
      </Links>
      <RightNav>
        <UserDiv onClick={() => handleDropdown('user')}>
          <UserCircle />
          <Username>
            <span
              style={menuState.user ? { "color": "#40F1BC" } : { "color": "white" }}>
              oursecret
            </span>
          </Username>
        </UserDiv>
      </RightNav>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  height: 60px;
  width: 100%;
  background: #222;
  justify-content: space-between;
  flex-direction: row;
  z-index: 100000;
`

const RightNav = styled.div`
  display: flex;
  height: 100%;
`

const MainLogo = styled.h2`
  display: flex;
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 300;
  font-size: 64px;
  width: 400px;
  line-height: 83px;
  padding-left: 20px;
  color: #fff;
  z-index: 10000000;
  padding-top: 0px;
  @media (max-width: 900px) {
    font-size: 50px;
    width: 500px;
  }
  @media (max-width: 500px) {
    font-size: 30px;
    padding-top: 6px;
    width: 300px;
  }
  @media (max-width: 400px) {
    display: none;
  }
`

const MainLogoCollapse = styled.h2`
  display: flex;
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 300;
  font-size: 30px;
  width: 400px;
  line-height: 83px;
  padding-left: 20px;
  color: #fff;
  padding-top: 6px;
    @media (min-width: 400px) {
    display: none;
  }
`

const Links = styled.div`
  display: flex;
  width: 400px;
  font-size: 20px;
  padding-top: 23px;
  }
`

const Genres = styled.div`
  display: flex;
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 300;
  line-height: 47px;
  padding-left: 10px;
  color: #fff;
  transition: .2s;
  &:hover {
    cursor: pointer;
    color: #F1406A;
    transition: .2s;
  }
`

const Moods = styled.div`
  display: flex;
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 300;
  line-height: 47px;
  padding-left: 20px;
  color: #fff;
  transition: .2s;
  &:hover {
    cursor: pointer;
    color: #F3D25E;
    transition: .2s;
  }
`

const UserDiv = styled.div`
    &:hover {
      color: #40F1BC;
      cursor: pointer;
    }
    display: flex;
    padding-top: 20px;
    flex-direction: row-reverse;
`

const Username = styled.div`
  right: 55px;
  top: 7px;
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 300;
  font-size: 25px;
  padding-right: 60px;
  line-height: 27px;
  text-align: right;
  @media (max-width: 700px) {
    display: none;
  }
`

const UserCircle = styled.div`
    position: absolute;
    top: 14px;
    right: 16px;
    width: 30px;
    height: 30px;
    background-color: pink;
    margin-bottom: 10px;
    cursor: pointer;
    border: 4px solid transparent;
    transition: .2s;
    border-radius: 30px;
`

export default Navbar
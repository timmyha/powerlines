import styled from "styled-components"
import { useSnapshot } from 'valtio'
import store from '../store'
import supabase from "../../utils/supabase"
import { Toaster } from "react-hot-toast"


const Navbar = ({ handleDropdown }) => {

  const snap = useSnapshot(store)
  const user = supabase.auth.user()

  return (
    <Nav>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
        className: '',
        duration: 5000,
        style: {
          background: '#F1406A',
          color: '#fff',
          fontFamily: 'IBM Plex Sans',
          fontSize: '13px',
          borderRadius: '3px'
        },
        success: {
          duration: 5000,
          theme: {
            primary: 'green',
            },
          }
        }}
      />
      <MainLogo onClick={() => handleDropdown('closed')} className="mainlogo">
        <span style={{ "cursor": "pointer" }}>powerlines.</span>
      </MainLogo>
      <MainLogoCollapse>
        <span style={{ "cursor": "pointer" }}>pwrlns.</span>
      </MainLogoCollapse>
      <Links>
        <Genres onClick={() => handleDropdown('genres')}>
          <span
            style={snap.menu.genres ? { "color": "#F1406A" } : { "color": "white" }}>
            genres
          </span>
        </Genres>
        <Moods onClick={() => handleDropdown('moods')}>
          <span
            style={snap.menu.moods ? { "color": "#F3D25E" } : { "color": "white" }}>
            moods
          </span>
        </Moods>
      </Links>
      <RightNav>
        <UserDiv onClick={() => handleDropdown('user')}>
          {user ?
            <>
              <UserCircle style={user && { "background": `url(${snap.userData.avatar})` }} />
              <Username>
                <span
                  style={snap.menu.user ? { "color": "#40F1BC" } : { "color": "white" }}>
                  {snap.userData.display_name}
                </span>
              </Username>
            </>
            : snap.menu.user === true
              ? <UserCircle style={user === null && { "background": "#222" }}>
                <SignInText>
                  sign&nbsp;in.
                </SignInText>
              </UserCircle>
              : <UserCircle style={user === null && { "opacity": ".4" }}>
                <SignInText>
                  sign&nbsp;in.
                </SignInText>
              </UserCircle>
          }
        </UserDiv>
      </RightNav>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  position: absolute;
  height: 60px;
  width: 100%;
  background: #222;
  top: 0px !important;
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
  width: 0px;
  line-height: 83px;
  padding-left: 20px;
  color: #fff;
  z-index: 10000000;
  padding-top: 0px;
  @media (max-width: 1300px) {
    font-size: 50px;
    width: 200px;
  }
  @media (max-width: 900px) {
    font-size: 30px;
    padding-top: 6px;
    width: 400px;
  }
  @media (max-width: 700px) {
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
  width: 200px;
  line-height: 83px;
  padding-left: 0px;
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
  @media (max-width: 800px) {
    width: 400px;
  }
  }
`

const Genres = styled.div`
  display: flex;
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 300;
  line-height: 47px;
  padding-left: 0px;
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
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 300;
  font-size: 25px;
  margin-right: 70px !important;
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
    width: 40px;
    height: 40px;
    background-size: 40px !important;
    cursor: pointer;
    transition: .2s;
    border-radius: 30px;
    border: .5px solid #40F1BC;
`

const SignInText = styled.span`
  display: flex;
  color: #fff;
  font-size: 10px;
  font-family: IBM Plex Sans;
  margin-top: 12px !important;
  margin-left: 4px !important;
  width: 20px;`

export default Navbar
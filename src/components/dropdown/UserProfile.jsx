import styled from "styled-components"
import { RiUser3Fill, RiLockFill, RiMailFill } from 'react-icons/ri'
import { useSnapshot } from "valtio"
import store from "../../store"
import supabase from "../../../utils/supabase"
import toast from "react-hot-toast"
import { GoSignOut } from 'react-icons/go'

const UserProfile = () => {

  const snap = useSnapshot(store)
  const user = supabase.auth.user()

  console.log(snap.userData)

  const signOut = async() => {
    const { error } = await supabase.auth.signOut()
    store.menu.user = false;
  }

  
  return (
    <Container>
        <ProfilePic src={snap.userData.avatar}></ProfilePic>
        <Username>{snap.userData.display_name}</Username>
        <UserMetrics>
            <b>{snap.userData.posts.length}</b>
            &nbsp;posts  
            &nbsp;<b>{snap.userData.followers.length}</b> 
            &nbsp;followers 
            &nbsp;<b>{snap.userData.following.length}</b> 
            &nbsp;following</UserMetrics>
        <Bio>{snap.userData.bio}</Bio>
        <Buttons>
        <Button onClick={() => signOut()}>new post</Button>
        <SignOut onClick={() => signOut()}>
          <GoSignOut
            style={{"paddingTop":"3px", "paddingLeft":"5px"}} />
        </SignOut>
        </Buttons>
      
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -20px !important;
`

const ProfilePic = styled.img`
  width: 100px;
  height: 100px;
  align-self: center;
  margin-bottom: 10px !important;
  border: .5px solid #ffffffb3;
  border-radius: 100%;`


const Username = styled.span`
  display: flex;
  margin-left: 0px !important;
  font-style: italic;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  align-self: center;
  color: #222;`

const UserMetrics = styled.span`
  display: flex;
  margin-bottom: 10px !important;
  align-self: center;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #222;`

const Bio = styled.span`
  display: flex;
  font-style: italic;
  font-size: 14px;
  color: #222;
  width: 300px;
  text-align: justify;
  margin-bottom: 20px !important;`

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;`

const Button = styled.div`
  width: 140px;
  text-align: center;
  height: 30px;
  padding-top: 10px;
  border-radius: 3px;
  font-family: IBM Plex sans;
  color: inherit;
  margin-right: 10px !important;
  background-color: #222;
  cursor: pointer;
  margin-bottom: 5px !important;
  border: .5px solid #ffffffb3;
  transition: .1s;
  &:hover {
    opacity: .9;
  }`

const SignOut = styled.div`
  width: 40px;
  text-align: center;
  height: 30px;
  padding-top: 10px;
  border-radius: 3px;
  font-family: IBM Plex sans;
  color: inherit;
  background-color: rgba(241,64,106,1);
  cursor: pointer;
  margin-bottom: 5px !important;
  border: .5px solid #ffffffb3;
  transition: .1s;
  &:hover {
    opacity: .9;
  }`

export default UserProfile
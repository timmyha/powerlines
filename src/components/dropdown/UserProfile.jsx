import styled from "styled-components"
import { useSnapshot } from "valtio"
import store from "../../store"
import supabase from "../../../utils/supabase"
import toast from "react-hot-toast"
import { GoSignOut } from 'react-icons/go'
import { RiPencilFill , RiDeleteBin2Fill } from 'react-icons/ri'

const UserProfile = () => {

  const snap = useSnapshot(store)
  const user = supabase.auth.user()

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    store.menu.user = false;
  }

  const switchToEditForm = () => {
    store.profileEdit = !store.profileEdit
    store.profileEditForm = {
      bio: store.userData.bio,
      username: store.userData.display_name,
      avatar: store.userData.avatar
    }
  }

  const handleProfileEditForm = (e) => {
    const { id, value } = e.target
    store.profileEditForm = {
      ...store.profileEditForm,
      [id]: value
    }
  }

  const handleUserProfileUpdate = async() => {
    const { data, error } = await supabase
      .from('profile')
      .update({ 
        bio: store.profileEditForm.bio,
        display_name: store.profileEditForm.username,
        avatar: store.profileEditForm.avatar
       })
      .eq('display_name', store.userData.display_name)

      if (error) {
        console.log(error)
      }

      store.profileEdit = false;
  }

  return (
    <Container>
      <ProfilePicContainer>
        {store.profileEdit === false
          ? <>
            <ProfilePic src={snap.userData.avatar}></ProfilePic>
            <EditButton onClick={switchToEditForm}>
              <RiPencilFill />
            </EditButton>
          </>
          : <>
            <Label>avatar url:&nbsp;</Label>
            <EditInput
              id="avatar"
              onChange={(e) => handleProfileEditForm(e)}
              value={store.profileEditForm.avatar}
            />
          </>
        }
      </ProfilePicContainer>
      {store.profileEdit === false
        ? <Username>{snap.userData.display_name}</Username>
        : <UsernameField>
          <Label>username:&nbsp;</Label>
          <EditInput 
            id="username"
            onChange={(e) => handleProfileEditForm(e)}
            value={snap.profileEditForm.username} />
          </UsernameField>
      }
      <UserMetrics>
        <b>{snap.userData.posts.length}</b>
        &nbsp;posts
        &nbsp;<b>{snap.userData.followers.length}</b>
        &nbsp;followers
        &nbsp;<b>{snap.userData.following.length}</b>
        &nbsp;following</UserMetrics>
      {store.profileEdit === false
        ? <Bio>{snap.userData.bio}</Bio>
        : <EditTextArea 
            value={snap.profileEditForm.bio} 
            id="bio"
            onChange={(e) => handleProfileEditForm(e)}
          />
      }
      <Buttons>
        { store.profileEdit === false
        ? <><Button>new post</Button>
          <SignOut onClick={() => signOut()}>
          <GoSignOut
            style={{ "paddingTop": "3px", "paddingLeft": "5px" }} />
          </SignOut></>
        :  <><Button onClick={handleUserProfileUpdate}>save</Button>
        <SignOut onClick={switchToEditForm}>
        <RiDeleteBin2Fill
          style={{ "paddingTop": "2px", "paddingLeft": "2px" }} />
        </SignOut></>
        }
      </Buttons>

    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -20px !important;
`

const ProfilePicContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  `

const ProfilePic = styled.img`
  width: 100px;
  height: 100px;
  align-self: center;
  margin-bottom: 10px !important;
  border: .5px solid #ffffffb3;
  border-radius: 100%;
  `


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
  margin-left: 0px !important;
  font-style: italic;
  font-size: 15px;
  font-style: italic;
  font-weight: 400;
  width: 300px;
  align-self: center;
  color: #222;
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

const EditButton = styled.button`
  background-color: #222;
  color: white;
  width: 15px;
  padding-left: 3px;
  padding-top: 2px;
  font-size: 10px;
  border-radius: 2px;
  height: 15px;
  cursor: pointer;
  border: none;`

const EditInput = styled.input`
  border: none;
  margin-bottom: 10px !important;`

const EditTextArea = styled.textarea`
  border: none;
  height: 100px;
  margin-bottom: 10px !important;`

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

const UsernameField = styled.div`
  display: flex;
  flex-direction: row;`

const Label = styled.span`
  font-size: 12px;
  color: #222;
  font-family: IBM Plex Sans;`

export default UserProfile
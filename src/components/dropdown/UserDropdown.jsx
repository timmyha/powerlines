import React from 'react'
import supabase from '../../../utils/supabase'
import styled from 'styled-components'
import { useSnapshot } from 'valtio'
import store from '../../store'
import SignUp from './SignUp'
import SignIn from './Signin'

const UserInfo = () => {

  const snap = useSnapshot(store)
  const user = supabase.auth.user()

  const signOut = async() => {
    const { error } = await supabase.auth.signOut()
    store.menu.user = false;
  }

  return (

    <Container>
      { user
      ? <button onClick={() => signOut()}>sign out</button>
      :  snap.hasAccount ? <SignIn /> : <SignUp />
      }
    </Container>
  )
}

const Container = styled.nav`
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: center;
  height: 300px;
  padding-top: 70px;
  overflow-y: scroll !important;
  scrollbar-width: none;
  &::-webkit-scrollbar { 
    display: none;
}
`

export default UserInfo

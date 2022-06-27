import React from 'react'
import supabase from '../../../utils/supabase'
import styled from 'styled-components'
import { useSnapshot } from 'valtio'
import store from '../../store'
import SignUp from './SignUp'
import SignIn from './SignIn'
import UserProfile from './UserProfile'

const UserContainer = () => {

  const user = supabase.auth.user()

  return (

    <Container>
      { user
      ? <UserProfile />
      :  store.hasAccount ? <SignUp /> : <SignIn />
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

export default UserContainer

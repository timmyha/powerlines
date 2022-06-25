import React from 'react'
import supabase from '../../../utils/supabase'
import styled from 'styled-components'
import { useSnapshot } from 'valtio'
import store from '../../store'
import AuthButton from '../AuthButton'

const UserInfo = () => {

  const snapshot = useSnapshot(store)
  const user = supabase.auth.user()

  const signOut = async() => {
    const { error } = await supabase.auth.signOut()
    store.menu.user = false;
  }

  const signIn = async() => {
    const { user, session, error } = await supabase.auth.signIn({
      provider: 'google'
    }, {
      redirectTo: '/'
    })
    console.log('hi')
  }

  return (

    <Container>
      { user
      ? <AuthButton
      text="Sign Out" 
      signIn={signOut} />
      : <AuthButton
        text="Sign in with Google" 
        signIn={signIn} />
      }
    </Container>
  )
}

const Container = styled.nav`
  position: absolute;
  display: flex;
  width: 100%;
  height: 300px;
  justify-content: center;
  padding-top: 100px;
  overflow-y: scroll !important;
  scrollbar-width: none;
  &::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}
`

export default UserInfo

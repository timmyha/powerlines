import styled from "styled-components"
import { RiUser3Fill, RiLockFill, RiMailFill } from 'react-icons/ri'
import { useSnapshot } from "valtio"
import store from "../../store"
import supabase from "../../../utils/supabase"
import toast from "react-hot-toast"

const SignUp = () => {

  const snap = useSnapshot(store)
  const auth = supabase.auth.user()

  // sign up form handler
  const handleSignUpForm = (e) => {
    const { id, value } = e.target;
    store.signIn = {
      ...store.signIn,
      [id]: value
    }
    store.username = {[id]:value};
  }
  
  // creates copy of sign up form
  const signUpCopy = {
    email: store.signIn.email,
    password: store.signIn.password,
  }

  // executes sign up
  const signUpWithEmail = async (e) => {
    e.preventDefault()
    const { user, session, error } = await supabase.auth.signUp(
      signUpCopy, {
        data: {
        display_name: store.username.display_name
        }
      })

      if (error) {
        console.log(error)
      }
  }

  return (
    <Container>
      <SwitchToSignIn>Already have an account?&nbsp; 
        <SignInLink onClick={() => { store.hasAccount = true}}>sign in</SignInLink>&nbsp; instead.
      </SwitchToSignIn>
      <Form>
        <FormField>
          <FormLabel htmlFor="username">
            <RiUser3Fill
              style={{
                "paddingTop": "4px",
                "color": "#40F1BC",
                "width": "13px"
              }}
            />
          </FormLabel>
          <Input
            id="display_name"
            onChange={handleSignUpForm}
            placeholder="username"
            type="username"
          />
        </FormField>
        <FormField>
          <FormLabel htmlFor="email">
            <RiMailFill
              style={{
                "paddingTop": "4px",
                "color": "#40F1BC",
                "width": "13px"
              }}
            />
          </FormLabel>
          <Input
            id="email"
            onChange={handleSignUpForm}
            placeholder="e-mail address"
            type="email"
          />
        </FormField>
        <FormField>
          <FormLabel htmlFor="password">
            <RiLockFill style={{
              "paddingTop": "4px",
              "color": "#40F1BC",
              "width": "13px"
            }} />
          </FormLabel>
          <Input
            onChange={handleSignUpForm}
            id="password"
            type="password"
            placeholder="password"
          />
        </FormField>
        <Button onClick={(e) => signUpWithEmail(e)}>Sign up with e-mail</Button>
      </Form>
    </Container>
  )
}

const Container = styled.div`
`

const Input = styled.input`
  background-color: transparent;
  border: .5px solid #222;
  font-family: IBM Plex Sans;
  font-size: 12px;
  padding-left: 10px !important;
  height: 25px;
  width: 175px;
  padding: 5px;
  border-radius: 0px 3px 3px 0px;
  margin-bottom: 20px !important;
  `

const Form = styled.form`
  display: flex;
  flex-direction: column;`

const FormLabel = styled.label`
  border: .5px solid #222;
  height: 25px;
  border-radius: 3px 0px 0px 3px;
  padding: 5px 15px 5px 15px;
  background-color: #222;
  `

const FormField = styled.div`
  display: flex;
  flex-direction: row;
  `

const Button = styled.div`
  width: 234px;
  text-align: center;
  height: 30px;
  padding-top: 10px;
  border-radius: 3px;
  font-family: IBM Plex sans;
  color: inherit;
  background-color: #222;
  cursor: pointer;
  margin-bottom: 5px !important;
  border: .5px solid #222;
  transition: .1s;
  &:hover {
    opacity: .9;
  }`

const SwitchToSignIn = styled.span`
  display: flex;
  margin-left: 25px !important;
  font-style: italic;
  font-size: 12px;
  color: #222;`

const SignInLink = styled.span`
  font-weight: 800;
  margin-bottom: 3px !important;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }`

export default SignUp
import styled from "styled-components"
import { RiUser3Fill, RiLockFill, RiMailFill } from 'react-icons/ri'
import { useSnapshot } from "valtio"
import store from "../../store"
import supabase from "../../../utils/supabase"
import toast from "react-hot-toast"

const SignUp = () => {

  const snap = useSnapshot(store)
  const auth = supabase.auth.user()
  const form = store.signIn

  // sign up form handler
  const handleSignUpForm = (e) => {
    const { id, value } = e.target;
    store.signIn = {
      ...form,
      [id]: value
    }
  }
  
  // creates copy of sign up form
  const signUpCopy = {
    email: form.email,
    password: form.password,
  }

  const usernameValidate = str => {
    return /^[a-z]+$/.test(str);
  }

  // executes sign up
  const signUpWithEmail = async(e) => {
    e.preventDefault()
    let length = form.display_name.length

    if (
      length < 3 || length > 20 || usernameValidate(form.display_name) === false
      ) {
      toast.error('Username must be lowercase, no symbols, and between 3-20 characters')
    } else if (form.password.length < 6) {
      toast.error('Password must be at least 6 characters.')
    } else if (form.email < 1) {
      toast.error('Please enter a valid e-mail address.')
    } else {
    const { user, session, error } = await supabase.auth.signUp(
      signUpCopy, {
        data: {
        display_name: form.display_name
        }
      })

      if (error) {
        console.log(error)
        toast.error('Please enter a valid e-mail address.')
      } else {
        toast.success('Check your email for confirmation.')
      }
  }}

  return (
    <Container>
      <SwitchToSignIn>Already have an account?&nbsp; 
        <SignInLink 
          onClick={() => { store.hasAccount = false}}>
            Sign in
        </SignInLink>&nbsp; instead.
      </SwitchToSignIn>
      <Form onClick={(e) => signUpWithEmail(e)}>
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
            required
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
            required
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
            required
          />
        </FormField>
        <Button type="submit" onClick={(e) => signUpWithEmail(e)}>Sign up with e-mail</Button>
      </Form>
    </Container>
  )
}

const Container = styled.div`
`

const Input = styled.input`
  display: flex;
  background-color: white;
  border: .5px solid #222;
  font-family: IBM Plex Sans;
  font-size: 12px;
  padding-left: 10px !important;
  height: 25px;
  width: 175px;
  padding: 5px;
  border-radius: 0px 3px 3px 0px;
  margin-bottom: 20px !important;
  z-index: 0;
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
  border: .5px solid #ffffffb3;
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
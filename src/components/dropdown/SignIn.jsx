import styled from "styled-components"
import { RiMailFill, RiLockFill } from 'react-icons/ri'
import { useSnapshot } from "valtio"
import store from "../../store"
import supabase from "../../../utils/supabase"
import toast from "react-hot-toast"

const SignIn = () => {

  const snap = useSnapshot(store)

  // sign in form handler
  const handleSignInForm = (e) => {
    const { id, value } = e.target;
    store.signIn = {
      ...store.signIn,
      [id]: value
    }
    store.username = {[id]:value};
  }
  
  // creates copy of sign in form
  const signInCopy = {
    email: store.signIn.email,
    password: store.signIn.password,
  }

  const handleDropdown = (id) => {
    return store.menu = {
 
         [id]: !store.menu[id]
       }
   }


  // executes sign in
  const signInWithEmail = async (e) => {
    e.preventDefault()
    const { user, session, error } = await supabase.auth.signIn(signInCopy)

    if (error) {
      toast.error('Incorrect login information.')
    }

    if (user) {
      window.location.reload();
    }
  }

  return (
    <Container>
      <SwitchToSignUp>Don't have an account yet?&nbsp; 
        <SignUpLink onClick={() => { store.hasAccount = true}}>Sign up</SignUpLink>&nbsp; instead.
      </SwitchToSignUp>
      <Form> 
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
            onChange={handleSignInForm}
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
            onChange={handleSignInForm}
            id="password"
            type="password"
            placeholder="password"
            required
          />
        </FormField>
        <Button onClick={(e) => signInWithEmail(e)}>Sign in with e-mail</Button>
      </Form>
    </Container>
  )
}

const Container = styled.div`
`

const Input = styled.input`
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
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

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
  color: white;
  background-color: #222;
  cursor: pointer;
  margin-bottom: 5px !important;
  border: .5px solid #ffffffb3;
  transition: .1s;
  &:hover {
    opacity: .9;
  }`

const SwitchToSignUp = styled.span`
  display: flex;
  margin-left: 17px !important;
  font-style: italic;
  font-size: 12px;
  color: #222;`

const SignUpLink = styled.span`
  font-weight: 800;
  margin-bottom: 3px !important;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }`

export default SignIn
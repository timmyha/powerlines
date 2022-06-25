import styled from "styled-components"

const AuthButton = ({ text, signIn }) => {
  return (
    <Button onClick={signIn}>{text}</Button>
  )
}

const Button = styled.div`
  width: 200px;
  text-align: center;
  height: 30px;
  padding-top: 10px;
  border-radius: 60px;
  font-family: IBM Plex sans;
  color: #222;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid #222;
  transition: .1s;
  &:hover {
    color: white;
    border: 1px solid white;
  }`

export default AuthButton
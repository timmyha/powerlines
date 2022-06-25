import { useEffect, useState } from 'react'
import supabase from '../../utils/supabase'
import { useSnapshot } from 'valtio'
import store from '../store'
import styled from 'styled-components'

const AllPosts = () => {


  const snapshot = useSnapshot(store)

  useEffect(() => {

    async function getAllPosts() {
    const { data: posts, error } = await supabase
      .from('posts')
      .select('*')

      store.data = posts
      store.loading = false
    }
    getAllPosts()
  }, [])

  return (
    <>
    {
      store.loading
      ? <Container> 

        ...loading.
          
      </Container>
      : <Container style={{"whiteSpace":"pre-wrap"}}>
        <Title>{store.data[0].title}</Title>
        {store.data[0].content}
        </Container>
    }
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 16px;
  font-style: italic;`

const Title = styled.h4`
  text-align: center;
  font-size: 18px;
  color: pink;
  font-style: normal;
`
export default AllPosts
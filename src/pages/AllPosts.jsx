import { useEffect, useState } from 'react'
import supabase from '../../utils/supabase'
import { useSnapshot } from 'valtio'
import store from '../store'

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
      ? <div>...loading</div>
      : <div style={{"white-space":"pre-wrap"}}>{store.data[0].content} hi</div>
    }
    </>
  )
}

export default AllPosts
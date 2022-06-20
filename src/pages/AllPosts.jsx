import { useEffect, useState } from 'react'
import supabase from '../../utils/supabase'

const AllPosts = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    async function getAllPosts() {
    const { data: posts, error } = await supabase
      .from('posts')
      .select('*')

      setData(posts)
      setLoading(false)
    }
    getAllPosts()
  }, [])

  

  return (
    <>
    {
      loading
      ? <div>...loading</div>
      : <div style={{"white-space":"pre-wrap"}}>{data[0].content} hi</div>
    }
    </>
  )
}

export default AllPosts
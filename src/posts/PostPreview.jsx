import styled from "styled-components"

const PostPreview = (
    { title, content, jumptext, images, vibes, author, genre, moods, time}
    ) => {

  return (
    <Post>
     <div style={{"whiteSpace":"pre-wrap"}}>{content}</div>
    </Post>
    
  )
}

const Post = styled.div``
export default PostPreview
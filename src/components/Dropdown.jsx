import styled from "styled-components"
import { motion } from "framer-motion"

const Dropdown = ({ menu }) => {
  return (
    <>
    { menu.genres
    ? <motion.div
        layout
        data-genre={menu.genres}
        initial={{ y: 0}}
        className="genres"
    >hi</motion.div>
    : menu.moods 
    ? <motion.div
        layout
        data-mood={menu.moods}
        initial={{ y: 0}}
        className="moods"
      />
    : menu.user 
    ? <motion.div
        layout
        data-user={menu.user}
        initial={{ y: 0}}
        className="user"
      />
    : <motion.div layout className="child" />
    }
    </>
  )
}

export default Dropdown
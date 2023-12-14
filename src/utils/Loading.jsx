import React from 'react'
import loading from '../../public/loading.gif'
import {motion} from 'framer-motion'

const Loading = ({state}) => {
  return (
    <motion.div animate={state ? {opacity:1} : {opacity:0}} className='bg-black h-screen grid place-content-center'>
        <img src={loading} alt="" className='w-full h-full object-contain lg:h-screen'/>
    </motion.div>
  )
}

export default Loading
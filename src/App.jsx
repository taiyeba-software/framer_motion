import React from 'react'
import {motion} from 'motion/react'

const App = () => {
  return (
    <>
        <div>
          <motion.div className="box" 

          whileHover={{
            backgroundColor:'purple'
          }}


          initial={{
            x:500,

          }}

          animate={{
            x:1000,
            rotate:360
          }}
          
          transition={{
            duration:4,
            repeat:Infinity

          }}

          ></motion.div>   
      </div>

      <div>
      <motion.div className="circle" 

      drag
      whileDrag={{
        scale:0.5
      }}

      dragConstraints={{
        left:0,
        right:1000,
        top:0,
        bottom:100
      }}

      dragDirectionLock='true'


      whileTap={{
        backgroundColor:"palegreen",
        scale:0.7
      }}

      animate={{
        x:100,
      }}></motion.div>
     </div>
   </>
  )
}

export default App

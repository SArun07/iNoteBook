import React from 'react'

const About = () => {
  return (
    <div>
      This is About Page
    </div>
  )
}
export default About



// This below code for understanding context


// export default About
// import React, { useContext, useEffect } from 'react'
// import NoteContext from '../context/notes/noteContext'

// const About = () => {
//   const a = useContext(NoteContext);
//   useEffect(()=>{
//     a.update();
//     // eslint-disable-next-line
//   },[])
//   return (
//     <div>
//       This is About {a.state.name} he is in class {a.state.class}
//     </div>
//   )
// }


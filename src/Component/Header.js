import React from 'react'



function Header(props) {
  // console.log(props)
  return (
     <div>
       Header <br></br>
      {props.bindName} 
    </div>
  )
}

export default Header
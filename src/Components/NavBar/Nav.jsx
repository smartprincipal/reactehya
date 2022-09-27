// import React from 'react'

// import { render } from "@testing-library/react"
// import { Component } from "react"
// import Nav from './Nav.css'



// export default class Navbar extends Component  {
//  constructor(props){
//   super(props)
  
// this.state = [
// 'Home',
// 'Landings',
// 'Pages',
// 'Doc',
// 'Contact Us'
// ]
// };
// }
 
// render() {


//    return (
//      <div>
//       <nav className='navBar'>
//         <ul className='menu'>
//           {
//             this.state.map(item) => {
//               return <li>{item}</li>
//             }
//           }

//         </ul>
//         <button className='btn1' type='submit'>Login</button>
//         </nav> 
 
 
//      </div>
//    )
// //  }

import React from 'react'
import { useState } from 'react'
import './Nav.css'




export default function Nav() {
  const[menuData, setMenuData] = useState([
    'Home',
    'Landing',
    'Pages',
    'Contact Us'
  ]) 

  // console.log(menuData)
  return (
    <div>
      <nav>
        <ul>
          {/* <li>{menuData[0]}</li>
          <li>{menuData[1]}</li>
          <li>{menuData[2]}</li>
          <li>{menuData[3]}</li>
          <li>{menuData[4]}</li> */}
          {
          menuData.map((item) => {
          return <li>{item}</li>
            })
            }
        </ul>
      </nav>
    </div>
  )
}

// export default Nav
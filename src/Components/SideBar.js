import React from 'react'

import './styles/Sidebar.css'


function SideBar() {
    return (
      <div className='side-bar-wrapper'>
            <div className='side-bar'>SideBar
            <ul className='list-container'>
                <ul className='item-container'><h6>Items available</h6>
                    <li className='item btn-grad'>Bed</li>
                    <li className='item btn-grad'>closet</li>
                    <li className='item btn-grad'> Table</li> 
                    <li className='item btn-grad'>chairs</li>
                    <li className='item btn-grad'>Desk</li>

                </ul>
                </ul>
                </div>
       </div>
  )
}

export default SideBar
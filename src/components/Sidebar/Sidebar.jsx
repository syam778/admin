import React from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
const sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-op">
            <NavLink to='/add' className="side-op">
                <img src={assets.add} alt="" />
                <p>Add Items</p>
            </NavLink>
            <NavLink to='/list' className="side-op">
                <img src={assets.parcel} alt="" />
                <p>List Items</p>
            </NavLink>
            <NavLink to='/order' className="side-op">
                <img src={assets.booking} alt="" />
                <p>Order</p>
            </NavLink>
        </div>
    </div>
  )
}

export default sidebar
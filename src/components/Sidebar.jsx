import React, { useState } from 'react';
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
import logo_icon from '../components/images/logo.png'
import { TbLogout } from "react-icons/tb";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoChatboxEllipses } from "react-icons/io5";

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
            <img className='logo' src={logo_icon} alt="" />
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> My Account
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <BsFillArchiveFill className='icon'/> My Projects  
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <FaMapMarkerAlt className='icon'/> Maps
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <IoChatboxEllipses  className='icon'/> Chatbox
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                <TbLogout className='icon'/> Logout
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar
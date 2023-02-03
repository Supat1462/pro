import React from 'react'
import './sidebar.css'

import logo from '../../asset/logo.png'

import { BsLayoutTextWindowReverse } from "react-icons/bs";
import { BsArrowLeftRight } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { MdDevices } from "react-icons/md";
import { FcComboChart } from "react-icons/fc";


function Sidebar() {
  return (
    <div className='sideBar grid'>
      <div className="logoDiv flex">
        <img src={logo} alt="Image Name" />
        <h2>Pro.</h2>
      </div>

      <div className="menuDev">
        <h3 className='divTitle'>
          QUICK MENU
        </h3>
        <div className="menuLists grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BsLayoutTextWindowReverse className='icon' />
              <span className="smallText">Dash board</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BsArrowLeftRight className='icon' />
              <span className="smallText">Borrow and Return</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <AiOutlineUser className='icon' />
              <span className="smallText">Employee</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdDevices className='icon' />
              <span className="smallText">Device</span>
            </a>
          </li>
        </div>
      </div>

      <div className="settingsDiv">
        <h3 className='divTitle'>
          SETIINGS
        </h3>
        <div className="menuLists grid">
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <FcComboChart className='icon' />
              <span className="smallText">Dash board</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BsArrowLeftRight className='icon' />
              <span className="smallText">Borrow and Return</span>
            </a>
          </li>
          <li className="listItem">
            <a href="#" className="menuLink flex">
              <AiOutlineUser className='icon' />
              <span className="smallText">Employee</span>
            </a>
          </li>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
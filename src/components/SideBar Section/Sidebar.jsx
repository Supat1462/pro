import React from 'react'
import './sidebar.css'


import logo from '../../asset/logo-01.png'

import { BsLayoutTextWindowReverse } from "react-icons/bs";
import { BsArrowLeftRight } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { MdDevices } from "react-icons/md";
import { FcComboChart } from "react-icons/fc";
import { FiHelpCircle } from "react-icons/fi";
import { TbReport } from "react-icons/tb";


function Sidebar() {
  return (
    <div className='sideBar grid'>
      <div className="logoDiv flex">
        <img src={logo} alt="" />
        <h2>B&R System.</h2>
      </div>

      <div className="menuDiv">
        <h3 className='divTitle'>
          QUICK MENU
        </h3>
        <div className="menuLists grid">
          <li className="listItem">
            <a href="/" className="menuLink flex">
              <BsLayoutTextWindowReverse className='icon' />
              <span className="smallText">แดชบอร์ด</span>
            </a>
          </li>
          <li className="listItem">
            <a href="/" className="menuLink flex">
              <BsArrowLeftRight className='icon' />
              <span className="smallText">ยืม - คืน</span>
            </a>
          </li>
          <li className="listItem">
            <a href="/" className="menuLink flex">
              <AiOutlineUser className='icon' />
              <span className="smallText">พนักงาน</span>
            </a>
          </li>
          <li className="listItem">
            <a href="/" className="menuLink flex">
              <MdDevices className='icon' />
              <span className="smallText">อุปกรณ์</span>
            </a>
          </li>
          <li className="listItem">
            <a href="/" className="menuLink flex">
              <TbReport className='icon' />
              <span className="smallText">รายงาน</span>
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
            <a href="/" className="menuLink flex">
              <FcComboChart className='icon' />
              <span className="smallText">Dash board</span>
            </a>
          </li>
          <li className="listItem">
            <a href="/" className="menuLink flex">
              <BsArrowLeftRight className='icon' />
              <span className="smallText">Borrow and Return</span>
            </a>
          </li>
          <li className="listItem">
            <a href="/" className="menuLink flex">
              <AiOutlineUser className='icon' />
              <span className="smallText">Employee</span>
            </a>
          </li>
        </div>
      </div>

      <div className="sideBarCard">
        <FiHelpCircle className='icon' />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>

          <h3>Help Center</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, iure.</p>
          <button className='btn'>Go to help center</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
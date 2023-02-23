import React from 'react'
import './top.css'

import { BiSearchAlt } from "react-icons/bi";
import { BiMessageAltDetail } from "react-icons/bi";
import { MdNotifications } from "react-icons/md";
import { BsArrowRightSquareFill } from "react-icons/bs";

import img from '../../../asset/profile.jpg'
import video from '../../../asset/WannaOne.mp4'

function Top() {
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to B&R System.</h1>
          <p>ระบบยืม - คืน อุกปรณ์ของพนักงานบริษัท KDR Transport</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder='Search Daschborad' />
          <BiSearchAlt className="icon" />
        </div>

        <div className="adminDiv flex">
          <BiMessageAltDetail className='icon' />
          <MdNotifications className='icon' />
          <div className="adminImage">
            <img src={img} alt='Admin img'></img>
          </div>
        </div>
      </div>

      <div className="cardSection flex">

        <div className="rightCard flex">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, tempora.</p>

          <div className="buttons flex">
            <button className='btn'>Get Demo</button>
            <button className='btn transparent'>Get Full Activate</button>
          </div>

          <div className="videoDiv">
            <video src={video} autoPlay muted loop></video>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">

            <div className="textDiv">
              <h1>My Stat</h1>

              <div className="flex">
                <span>
                  Today <br /> <small>5 time</small>
                </span>
                <span>
                  This Month <br /> <small>10 time</small>
                </span>
                <span>
                  This Year <br /> <small>60 time</small>
                </span>
              </div>

              <span className='flex link'>
                Go to my report <BsArrowRightSquareFill className='icon' />
              </span>
            </div>

            <div className="imgDiv">
              <img src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80" alt="Image Name" />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Top
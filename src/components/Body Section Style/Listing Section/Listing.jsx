import React from 'react'
import './listing.css'

// import icons ========
import { BsArrowRightSquareFill } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

// import img =========
import img from '../../../asset/img2.png'
import img1 from '../../../asset/img3.png'
import img2 from '../../../asset/img4.png'
import img3 from '../../../asset/img5.png'
import imguser from '../../../asset/profile.jpg'


function Listing() {
  return (
    <div className='listingSection'>
      <div className="heading flex">
        <h1>My Listings</h1>

        <button className='btn flex'>See All <BsArrowRightSquareFill className='icon' /></button>
      </div>

      <div className="secContainer flex">
        <div className="singleItem">
          <BsHeartFill className='icon' />
          <img src={img} alt="img" />
          <h3>Devices</h3>
        </div>
        <div className="singleItem">
          <AiOutlineHeart className='icon' />
          <img src={img1} alt="img" />
          <h3>Employee</h3>
        </div>
        <div className="singleItem">
          <AiOutlineHeart className='icon' />
          <img src={img2} alt="img" />
          <h3>Office</h3>
        </div>
        <div className="singleItem">
          <AiOutlineHeart className='icon' />
          <img src={img3} alt="img" />
          <h3>Devices</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topSeller">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className='btn flex'>
              Sell All <BsArrowRightSquareFill className='icon' />
            </button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={imguser} alt="profile" />
            </div>
            <div className="cardText">
              <span>14.566 Devices <br />
                <small>21 seller <span className='date'>7 Days</span></small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing
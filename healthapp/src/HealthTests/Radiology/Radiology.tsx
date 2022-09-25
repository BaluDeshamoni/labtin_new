import { fontWeight } from '@mui/system';
import React, { useState } from 'react'
import CircleImage from '../../components/CircleImage';
import Modal from '../../components/PrescriptionDialog';
import SquareCard from '../../components/SquareCards';
import './Radiology.css';

function Radiology() {

  return (
    <div className='radiology'>
      <div className='radiology_cards'>
      {
        [1,2,3,4,5].map(() => {
          return (
            <div className='radiology_card'>
              <div className='heading_and_discount'>
              <div className='heading'>MRI Scan</div>
              <div className='discount'>
                Extra 30% OFF
              </div>
              </div>
            <div className='redtext'>No Special Permission Required</div>
            <div className='content_and_price'>
            <div className='content'>
              MRI magnetic resource imaging and is the most frequently recommended test
              <div style={{fontWeight:"bold"}}>(Know More)</div>
            </div>
            <div className='price'>
              <div style={{fontWeight:"light", fontStyle:"italic", color:"black", paddingBottom:"5px", fontSize:"20px"}}>Starts From</div>
              <div className='actual_price'>
                <s style={{color:"red", fontWeight:"bold", paddingBottom:"10px", fontSize:"20px"}}>₹5000</s>
                <div style={{fontWeight:"bold", fontSize:"20px"}}>₹1999</div>
              </div>
              <button>Book Now</button>
              <div style={{paddingTop:"15px", textAlign:"center"}}>Available in</div>
              <div style={{paddingTop:"5px", textAlign:"center", fontWeight:"bold"}}>3 Scan Centers</div>
            </div>
            </div> 
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Radiology
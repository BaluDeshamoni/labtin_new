import React from 'react'
import './BookingCard.css';

function BookingCard() {
  return (
    <div className='booking_card'>
       <img height={170} src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/03/26/1209071-meds.jpeg" />       
       <div className='booking_details'>
          <div className='other_details'>
          <p>Liver Profile</p>
          <p>Expected Delivery</p>
          <div className='price_display'>
              <s>700.RS</s>
              <p className='price'>&nbsp;&nbsp;350.RS</p>
              <p className='discount'>&nbsp;&nbsp;50% OFF</p>
          </div>
          </div>
        <div className='payment_details'>
          <p>Cash On Delivery</p>
          <button>Pay Now</button>
        </div>
                 
       </div>
    </div>
  )
}

export default BookingCard
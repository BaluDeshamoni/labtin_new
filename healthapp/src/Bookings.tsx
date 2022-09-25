import React from 'react'
import './Bookings.css';
import BookingCard from './components/BookingCard';

function Bookings() {
  return (
    <div className='bookings_page'>
      <h2 className='heading'>
          My Bookings(4)
      </h2>
      <div className='list_and_payment'>
      <div className='booking_list'>
        {
          [1,2,3,4].map(() => {
            return(
              <BookingCard />
            )
          })
        }
      </div>
      <div className='pay'>
        <h3>Payment Details</h3>
        <div className='pay_content'>
         <div className='sub_pay_detail'>
           <p className='sub_pay_detail1'>Total Price</p>
           <p className='sub_pay_detail2'>750.RS</p>
         </div>
         <div className='sub_pay_detail'>
           <p className='sub_pay_detail1'>Discount</p>
           <p className='sub_pay_detail2'>300.RS</p>
         </div>
         <div className='sub_pay_detail'>
           <p className='sub_pay_detail1'>Delivery Charges</p>
           <p className='sub_pay_detail2'>50.RS</p>
         </div>
         <hr/>
         <div className='sub_pay_detail'>
           <p className='total_pay1'>Total Amount</p>
           <p className='total_pay2'>1000.RS</p>
         </div>
        </div>
        <button>Make Payment</button>
      </div>
      </div>
    </div>
  )
}

export default Bookings
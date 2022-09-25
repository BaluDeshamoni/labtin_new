import React from 'react'
import './SquareCards.css';

function SquareCard(props : any) {
  return (
    <div className='square_card'>
       <h4>{props.heading}</h4>
       <span>{props.content}</span>
       <div className='price_setup'>
         <span className='strike_price'>
             <s>
               Rs.3200
             </s>
         </span>
         <span className='real_price'>
         &nbsp;Rs.1500 
         </span>
       </div>
      <button className='book_button'>
          BOOK NOW
      </button>
    </div>
  )
}

export default SquareCard
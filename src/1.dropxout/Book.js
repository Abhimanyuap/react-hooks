import React from 'react'
import "./Book.css";

const Book = () => {
  return (
    <div className='book'>
        <div className='bookImg'>
           <img src='https://res.cloudinary.com/bookbub/image/upload/t_ci_ar_6:9_padded,f_auto,q_auto,dpr_1/v1667267514/pro_pbid_14442.jpg' alt='mockingbird/book' />
        </div>
        <div className='bookInfo'>
          <h3 className='bookName'>To Kill a Mockingbird</h3>
          <p className='bookAuthor'>Author : Harper Lee</p>
          <p className='bookPrice'>$ 19</p>
          <button className='cartBtn'> Add to Cart</button>
        </div>
      
    </div>
  )
}

export default Book

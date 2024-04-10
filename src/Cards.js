import React from "react";
const Cards = ({ booksBS }) => {
 
  return booksBS.map((book) => (
    <div className="card" key={book.id}>
      <img src={book.image} alt="book cover" className="bookcover" />
      <h3>{book.name}</h3>
      <p>{book.author}</p>
      <p>Price : ₹ {book.price}</p>
      <button className="buynow">Buy Now</button>
      <br />
      <button className="cart">
       Add to cart
      </button>

     
    </div>
  ));
};

export default Cards;

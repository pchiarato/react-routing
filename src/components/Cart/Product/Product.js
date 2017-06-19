import React from 'react';
import { Link } from 'react-router-dom';

import './Product.css';

export default function Product( { title, img, id } ) {
  return (
    <div id="CartProduct__container">
      <Link to={"/details/"+id} id="CartProduct__navLink">
        <img alt="Product" src={ img } width="70px" height="70px" />
        <span id="CartProduct__title"> { title } </span>
      </Link>
      
    </div>
  )
}
import React from 'react'
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'; 
import axios from 'axios';

function Detaile() {

  const {selectedId} = useParams();
  const [selectedProduct, setSelectedProduct] = useState([]);
  
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${selectedId}`)
    .then(response => setSelectedProduct(response.data))
    .catch(err=>console.log(err))
  }, [])

  return (
  
    <div className = 'product-details-container'>
       <h2>{selectedProduct.title}</h2>
       <img className='detail-image' src = {selectedProduct.image}/>
       <p>{selectedProduct.description}</p>
       <h3>$ {selectedProduct.price}</h3>

    </div>
  )
}

export default Detaile
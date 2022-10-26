import React from 'react'
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'; 
import axios from 'axios';
import ProductCard from '../components/ProductCard';

function Category({products}) {
 
  const {selectedMenu} = useParams();
  const [selectedCategory, setSelectedCategory] = useState([]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/category/${selectedMenu}`)
    .then(response => setSelectedCategory(response.data))
    .catch(err=>console.log(err))
  }, [])

  return (
    <div className='products-container'>
        {selectedCategory.map(item => {
            return <ProductCard key={item.id} product={item}/>
          })}
    
    </div>
  )
}

export default Category
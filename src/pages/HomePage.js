import React from 'react'
import ProductCard from '../components/ProductCard'

function HomePage({products}) {
  


  return (
    <div className='products-container'>
        
        {
          products.map(item => {
            return <ProductCard key={item.id} product={item}/>
          })
        }

    </div>
  )
}

export default HomePage
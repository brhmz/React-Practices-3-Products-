import React from 'react'

function ProductCard({product}) {

  return (
    <div className='product-card'>
        <img className='product-image' src = {product.image} alt={product.title}/>
        <p>{product.title}</p>
        <p>$ {product.price}</p>
        <a href={`/productdetails/${product.id}`}><button>See Details</button></a>

    </div>
  )
}

export default ProductCard

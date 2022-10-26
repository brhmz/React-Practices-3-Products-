import React from 'react'

function Header() {
  return (
    <div className='header-container'>
        <div className='nav-container'>
            <a href='/'>Home</a>
            <a href='/products/category/electronics'>Electronics</a>
            <a href='/products/category/jewelery'>Jewelery</a>
            <a href="/products/category/men's clothing">Men's Clothing</a>
            <a href="/products/category/women's clothing">Women's Clothing</a>
        </div>
    </div>
  )
}

export default Header
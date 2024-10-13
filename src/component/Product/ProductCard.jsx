import React from 'react'
import './ProductCard.css'
const ProductCard = ({product}) => {
  if (!product || !product.image) {
    return <div>No image available</div>; // or handle the case appropriately
  }
  return (
    <div className='ProductCard m-3'>
      <div className='productsecond'>
      <img className='productsthird h-100 w-100' src={product.image} alt/>
</div>
    <div className='textpart bg-white p-3'>
        <div>
            <p className='fw-bold'>{product.brand}</p>
            <p>{product.title}</p>
        </div>
        <div className='productfour'>
            <p className='fw-500'>{product.selling_price}</p>
            <p className='text-secondary text-decoration-line-through'>{product.price}</p>
            <p className='text-success'>{product.disscount}</p>
           
        </div>
    </div>
    </div>
  )
}

export default ProductCard

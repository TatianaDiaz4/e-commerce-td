import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProductCart } from '../../store/slices/cart.slice'
import "./styles/ProductInfo.css"

const ProductInfo = ({product}) => {
  const [quantity, setQuantity] = useState(1)

  const dispatch = useDispatch()

  const handlePlus = () => {
    setQuantity(quantity + 1)
  }

  const handleMinus = () => {
    const newValue = quantity - 1
    if(newValue >= 1) {
      setQuantity(newValue)
    }
  }

  const handleAddProduct = () => {
    const data = {
      id: product.id,
      quantity: quantity
    }
    dispatch(addProductCart(data))
  }


  return (
    <article className='productInfo'>
      <div className='productInfo_img'>
        <img src={product?.productImgs[0]} alt="" />
      </div>
      <div className='productInfo_info'>
       <h2 className='productInfo_title'>{product?.title}</h2>
       <p className='productInfo_description'>{product?.description}</p>
       <footer className='productInfo_footer'>
        <div className='productInfo_container-price'>
          <h3 className='productInfo_price-title'>Price</h3>
          <span className='productInfo_price'>$ {product?.price}</span>
        </div>
        <div className='productInfo_container-quantity'>
          <h3 className='productInfo_quantity-title'>Quantity</h3>
          <div className='productInfo_container-counter'>
        <div className='productInfo_minus' onClick={handleMinus}>-</div>
        <div className='productInfo_counter'>{quantity}</div>
        <div className='productInfo_plus' onClick={handlePlus}>+</div>
        </div>
        </div>
        <button className='productInfo_btn'
        onClick={handleAddProduct}
        >Add to cart <i className='bx bx-cart'></i></button>
       </footer>
       </div>
    </article>
  )
}

export default ProductInfo
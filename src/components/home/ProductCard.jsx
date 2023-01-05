import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addProductCart } from '../../store/slices/cart.slice'
import "./styles/ProductCard.css"


const ProductCard = ({product}) => {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleClickProduct = () => {
      navigate(`/products/${product.id}`)
    }

    const handleClickAddCart = (e) => {
      e.stopPropagation()
      const data = {
        id:product.id,
        quantity: 1
      }
      dispatch(addProductCart(data))
    }

  return (
    <article className='productCard' onClick={handleClickProduct}>
        <header className='productCard_header'>
            <img className='productCard_header-img1' src={product.productImgs[0]} alt="" />
            <img className='productCard_header-img2' src={product.productImgs[2]} alt="" />
        </header>
        <hr />
        <div className='productCard_body'>
            <h3 className='productCard_title'>{product.title}</h3>
            <h4 className='productCard_title-price'>Price</h4>
            <span className='productCard_price'>$ {product.price}</span>
            <button className='productCard_btn' onClick={handleClickAddCart}>
                <i className='bx bx-cart'></i>
            </button>
        </div>
    </article>
  )
}

export default ProductCard
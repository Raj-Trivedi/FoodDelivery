import React, { useContext } from 'react'
import CartItem from '../Component/CartItem/CartItem'
import { StoreContext } from '../Context/StoreContext'

const Cart = () => {
  const {CartItems} = useContext(StoreContext)

  
  return (
    <div>
      {/* {CartItems && } */}
      {/* <CartHeader/> */}
      <CartItem/>
        
    </div>
  )
}

export default Cart
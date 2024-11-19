import React from 'react'
import './App.css'
import Products from './components/Products'
import Cart from './components/Cart'
import { useState } from 'react'
import Header from './components/Header'

const App = () => {
  const initCart = []

  const initProducts = [
    { id: 1, name: 'Water', price: 17 },
    { id: 2, name: 'Beer', price: 25 },
    { id: 3, name: 'Wine', price: 67 },
  ]

  const [products, setProducts] = useState(initProducts)
  const [cart, setCart] = useState(initCart)

  function addToCart(id) {
    const item = cart.find((product) => product.id == id)
    if (item != undefined) {
      item.quantity = item.quantity + 1
      setCart([...cart])
    } else {
      const p = products.find((product) => product.id == id)
      const cartItem = { ...p, quantity: 1 }

      setCart([...cart, cartItem])
    }
  }

  return (
    <div className='container'>
      <Header cart={cart} />
      <main className='main'>
        <section className='left-section'>
          <Products products={products} addToCart={addToCart} />
        </section>
        <section className='right-section'>
          <Cart cart={cart} />
        </section>
      </main>
    </div>
  )
}

export default App

function Cart({ cart }) {
  function totalPrice() {
    const sum = cart.reduce((acc, current) => acc + current.price * current.quantity, 0)
    return sum
  }
  return (
    <div>
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Quantity</th>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={crypto.randomUUID()}>
              <td>{item.quantity}</td>
              <td>{item.name}</td>
              <td>{item.price} kr.</td>
            </tr>
          ))}
          <tr>
            <td colSpan={2}>Total price</td>
            <td>{totalPrice()} kr</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Cart

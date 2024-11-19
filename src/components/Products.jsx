function Products({ products, addToCart }) {
  return (
    <div>
      <h1>Products</h1>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price} kr.</td>
              <td>
                <button onClick={() => addToCart(item.id)}>Add</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Products

function Header({ cart }) {
  function cartSize() {
    return cart.reduce((acc, current) => acc + current.quantity, 0)
  }
  return (
    <header className='header'>
      <nav className='menu'>
        <ul className='menu-list'>
          <li className='menu-item'>Home</li>
          <li className='menu-item'>About</li>
          <li className='menu-item'>Services</li>
          <li className='menu-item'>Contact</li>
          <li className='menu-item'>Cart ({cartSize()})</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

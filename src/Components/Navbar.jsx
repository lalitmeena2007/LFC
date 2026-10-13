import '../css/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo-box">

        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/050/418/381/small/a-bucket-full-of-fried-chicken-in-a-red-and-white-striped-bucket-free-vector.jpg"
          alt="LFC Logo"
        />

        <h1 className="logo">LFC</h1>

      </div>

      <ul className="nav-links">
        <li>Offers</li>
        <li>Order Now</li>
        <li>Address</li>
        <li>Cart</li>
      </ul>

      <button>Login</button>

    </nav>
  )
}

export default Navbar
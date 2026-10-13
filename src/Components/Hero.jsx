import '../css/Hero.css'
import heroImage from '../assets/LFC.png'

function Hero() {
  return (
    <section className="hero">

      <div className="hero-text">

        <h1>Lucky Fried Chicken</h1>

        <p>
          Crispy fried chicken, burgers, fries and drinks
          delivered hot and fresh to your doorstep.
        </p>

        <button>Order Now</button>

      </div>

      <img src={heroImage} alt="LFC" />

    </section>
  )
}

export default Hero
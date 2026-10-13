import '../css/FoodCart.css'

import { foods } from '../data/foodData'

function FoodCart() {
  return (
    <section className="food-section">

      <h2>Popular Foods</h2>

      <div className="food-grid">

        {
          foods.map((item) => (

            <div className="food-card" key={item.id}>

              <img src={item.image} alt="" />

              <h3>{item.name}</h3>

              <p>{item.price}</p>

              <button>Add+</button>

            </div>

          ))
        }

      </div>

    </section>
  )
}

export default FoodCart
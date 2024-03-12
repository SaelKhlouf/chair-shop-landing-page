import "./App.css";
import ChairComponent from "./Components/ChairComponent";

function App() {
  const chairs = [
    {
      id: "chair-1",
      name: "The Laid Back",
      features: [
        "Leisure and relaxing",
        "Comfortable for 4h",
        "Vegan leather",
        "Weighs 16 kg",
      ],
      price: 250,
    },
    {
      id: "chair-2",
      name: "The Worker Bee",
      features: ["Work", "Comfortable for 8h", "Vegan leather", "Weighs 22 kg"],
      price: 525,
    },
    {
      id: "chair-3",
      name: "The Chair 4/2",
      features: [
        "Leisure and relaxing",
        "Comfortable all day!",
        "Organic cotton",
        "Weighs 80 kg",
      ],
      price: 1450,
    },
  ];

  return (
    <div className="container">
      <header>
        <div className="header-text-box">
          <h1>We design and build better chairs, for a better life</h1>
          <p className="header-text">
            In a small shop in the heart of Lisbon, we spend our days
            relentlessly perfecting the chair. The result is a perfect blend of
            beauty and comfort, that will have a lasting impact on your health.
          </p>
          <a className="btn btn--big" href="#">
            Shop chairs
          </a>
        </div>
        <img src="hero.jpg" alt="Photo" />
      </header>

      <section>
        <h2>What makes our chairs special</h2>
        <div className="grid-3-cols">
          <div>
            <p className="features-title">
              <strong>Science meets design</strong>
            </p>
            <p className="features-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
              similique adipisci praesentium.
            </p>
          </div>

          <div>
            <p className="features-title">
              <strong>Maximal comfort</strong>
            </p>
            <p className="features-text">
              Reprehenderit optio placeat quasi excepturi architecto, explicabo
              facilis perspiciatis error maxime magnam.
            </p>
          </div>

          <div>
            <p className="features-title">
              <strong>Ethical and sustainable</strong>
            </p>
            <p className="features-text">
              Deleniti recusandae quidem nesciunt, eos dolorum iure, quaerat
              omnis est laudantium voluptatem voluptas!
            </p>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="grid-2-cols">
          <img src="customers.jpg" alt="People sitting on chairs" />
          <div className="testimonial-box">
            <h2>"We couldn't live without these chairs anymore"</h2>
            <blockquote className="testimonial-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              repellat at, nesciunt quia cum minima ipsum culpa totam sapiente
              recusandae earum debitis doloribus in quasi voluptatibus!
            </blockquote>
            <p className="testimonial-author">&mdash; Mary and Sarah Johnson</p>
          </div>
        </div>
      </section>

      <section>
        <h2>Our bestselling chairs</h2>
        <div className="grid-3-cols">
          {chairs.map((chair) => (
            <ChairComponent key={chair.id} {...chair}></ChairComponent>
          ))}
        </div>
      </section>

      <footer>Copyright &copy; 2024 Developed by Sael Khlouf.</footer>
    </div>
  );
}

export default App;

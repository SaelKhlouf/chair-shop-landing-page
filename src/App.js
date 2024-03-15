import "./App.css";
import ChairComponent from "./Components/ChairComponent";

function App() {
  const chairs = [
    {
      id: "chair-1",
      name: "The Laid Back",
      features: [
        {
          type: "leisure",
          desc: "Leisure and relaxing",
        },
        {
          type: "duration",
          desc: "Comfortable for 4h",
        },
        {
          type: "vegan",
          desc: "Vegan leather",
        },
        {
          type: "weight",
          desc: "Weighs 16 kg",
        },
      ],
      price: 250,
    },
    {
      id: "chair-2",
      name: "The Worker Bee",
      features: [
        {
          type: "work",
          desc: "Work",
        },
        {
          type: "duration",
          desc: "Comfortable for 8h",
        },
        {
          type: "vegan",
          desc: "Vegan leather",
        },
        {
          type: "weight",
          desc: "Weighs 22 kg",
        },
      ],
      price: 525,
    },
    {
      id: "chair-3",
      name: "The Chair 4/2",
      features: [
        {
          type: "leisure",
          desc: "Leisure and relaxing",
        },
        {
          type: "duration",
          desc: "Comfortable all day!",
        },
        {
          type: "organic",
          desc: "Organic cotton",
        },
        {
          type: "weight",
          desc: "Weighs 80 kg",
        },
      ],
      price: 1450,
    },
  ];

  return (
    <div className="container">
      <header>
        <div className="header-text-box">
          <h1 className="header-intro">
            Elevating Your Comfort with Chairs That Transform Lives
          </h1>
          <p className="header-text">
            It's an easy concept to understand — but not so easy for many
            manufacturers to make happen. Everyone deserves quality. A fusing of
            style and comfort ignited by the spark of ingenuity. In giving the
            ordinary that something extra, we deliver a unique elevated
            experience to any office environment.
          </p>
        </div>
        <img src="hero.jpg" alt="Photo" className="header-image" />
      </header>

      <section className="special-section">
        <h2>What makes our chairs special</h2>
        <div className="grid-3-cols">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="svg"
            >
              <path d="M218.27,201.83,156,98V36h12a4,4,0,0,0,0-8H88a4,4,0,0,0,0,8h12V98L37.73,201.83A12,12,0,0,0,48,220H208a12,12,0,0,0,10.29-18.17ZM107.43,101.2a4.07,4.07,0,0,0,.57-2.06V36h40V99.14a4.07,4.07,0,0,0,.57,2.06l41,68.33c-12.76,3.94-32.54,4.68-59.75-9.1-18-9.14-35-13.24-50.54-12.29ZM211.46,210a3.94,3.94,0,0,1-3.48,2H48a4,4,0,0,1-3.43-6.06l29.53-49.21c15.54-2.43,33.05,1.21,52.07,10.84C144.54,176.86,160,180,172.42,180a65,65,0,0,0,21.36-3.46l17.63,29.38A3.92,3.92,0,0,1,211.46,210Z"></path>
            </svg>
            <p className="features-title">
              <strong>Science meets design</strong>
            </p>
            <p className="features-text">
              our chairs are meticulously crafted to blend cutting-edge
              ergonomic research with sleek, contemporary aesthetics, ensuring
              unparalleled comfort and style in every seat.
            </p>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="svg"
            >
              <path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220ZM84,108a8,8,0,1,1,8,8A8,8,0,0,1,84,108Zm96,0a4,4,0,0,1-4,4H152a4,4,0,0,1,0-8h24A4,4,0,0,1,180,108Zm-8.54,46c-9.55,16.52-25.39,26-43.46,26s-33.91-9.48-43.46-26a4,4,0,0,1,6.92-4c8.21,14.19,21.19,22,36.54,22s28.33-7.81,36.54-22a4,4,0,1,1,6.92,4Z"></path>
            </svg>
            <p className="features-title">
              <strong>Maximal comfort</strong>
            </p>
            <p className="features-text">
              Experience maximal comfort with our chairs, where luxurious
              cushioning, perfect lumbar support, and adjustable features come
              together to cradle you in a haven of relaxation and ergonomic
              bliss.
            </p>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              className="svg"
            >
              <path d="M231,82.76A20,20,0,0,0,216,76H156V56a36,36,0,0,0-36-36,4,4,0,0,0-3.58,2.21L77.53,100H32a12,12,0,0,0-12,12v88a12,12,0,0,0,12,12H204a20,20,0,0,0,19.85-17.52l12-96A20,20,0,0,0,231,82.76ZM76,204H32a4,4,0,0,1-4-4V112a4,4,0,0,1,4-4H76ZM227.91,97.49l-12,96A12,12,0,0,1,204,204H84V104.94L122.42,28.1A28,28,0,0,1,148,56V80a4,4,0,0,0,4,4h64a12,12,0,0,1,11.91,13.49Z"></path>
            </svg>
            <p className="features-title">
              <strong>Ethical and sustainable</strong>
            </p>
            <p className="features-text">
              Embrace ethical and sustainable elegance with our chairs, crafted
              from responsibly sourced materials and designed with eco-friendly
              practices to ensure your comfort doesn't come at the earth's
              expense.
            </p>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div>
          <img
            src="customers.jpg"
            alt="People sitting on chairs"
            className="testimonial-section-img"
          />
        </div>

        <div className="testimonial-box">
          <h2>"We couldn't live without these chairs anymore"</h2>
          <blockquote className="testimonial-text">
            These chairs from your shop are not just seats; they're a lifestyle
            upgrade we didn't know we needed until now!
          </blockquote>
          <p className="testimonial-author">&mdash; Mai and Alex Johnson</p>
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

function ChairComponent({ name, id, features, price }) {
  return (
    <figure className="chair">
      <img src={`${id}.jpg`} alt="Chair" />
      <div className="chair-box">
        <h3>{name}</h3>
        <ul className="chair-details">
          {features.map((feature) => (
            <li key={feature}>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="chair-price">
          <strong>{price}€</strong>
          <a href="#" className="btn btn--small">
            Add to cart
          </a>
        </div>
      </div>
    </figure>
  );
}

export default ChairComponent;

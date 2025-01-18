import PropTypes from "prop-types";

const CarDetails = ({ car }) => {
  const { title, brand, year, price, isPremium } = car;
  return (
    <div className="shadow border rounded-md p-3">
      <h2 className="text-xl">{title}</h2>
      <p>
        <span className="font-bold">Brand: </span>
        {brand}
      </p>
      <p>
        <span className="font-bold">Year: </span>
        {year}
      </p>
      <p>
        <span className="font-bold">Price: </span>
        {price}
      </p>
      <p>
        <span className="font-bold">Premium: </span>
        {isPremium ? "Yen" : "No"}
      </p>
    </div>
  );
};

CarDetails.propTypes = {
  car: PropTypes.shape({
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
  }).isRequired,
};

export default CarDetails;

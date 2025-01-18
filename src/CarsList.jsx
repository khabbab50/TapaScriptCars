import PropTypes from "prop-types";
import CarDetails from "./CarDetails";

const CarsList = ({ cars, searchTram, checkPremiumCar }) => {
  const row = [];
  cars.forEach((car) => {
    if (car.title.toLowerCase().indexOf(searchTram.toLowerCase()) === -1) {
      return;
    }
    if (checkPremiumCar && !car.isPremium) {
      return;
    }
    row.push(<CarDetails key={car.id} car={car} />);
  });

  return <div className="grid grid-cols-3 gap-4">{row}</div>;
};

CarsList.propTypes = {
  cars: PropTypes.object.isRequired,
  searchTram: PropTypes.string.isRequired,
  checkPremiumCar: PropTypes.bool.isRequired,
};

export default CarsList;

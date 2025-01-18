import PropTypes from "prop-types";

const FilterOnlyPremiu = ({ onCheckCar, checkPremiumCar }) => {
  return (
    <div>
      <span className="flex gap-2">
        <input
          checked={checkPremiumCar}
          onChange={onCheckCar}
          type="checkbox"
          id="premium"
        />
        <label htmlFor="premium">Whow Premlum Only</label>
      </span>
    </div>
  );
};

FilterOnlyPremiu.propTypes = {
  checkPremiumCar: PropTypes.bool.isRequired,
  onCheckCar: PropTypes.func.isRequired,
};

export default FilterOnlyPremiu;

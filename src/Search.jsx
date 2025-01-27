import PropTypes from "prop-types";
import FilterOnlyPremiu from "./FilterOnlyPremiu";

const Search = ({ searchTram, onSearchCar, onCheckCar, checkPremiumCar }) => {
  return (
    <div className="flex items-center gap-4 my-4">
      <input
        type="text"
        value={searchTram}
        onChange={(event) => onSearchCar(event.target.value)}
        placeholder="Search Cars..."
        className="p-1 border rounded-md"
      />
      <FilterOnlyPremiu
        checkPremiumCar={checkPremiumCar}
        onCheckCar={onCheckCar}
      />
    </div>
  );
};

Search.propTypes = {
  searchTram: PropTypes.string.isRequired,
  onSearchCar: PropTypes.func.isRequired,
  onCheckCar: PropTypes.func.isRequired,
  checkPremiumCar: PropTypes.bool.isRequired,
};

export default Search;

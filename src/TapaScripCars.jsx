import CarsList from "./CarsList";
import Header from "./Header";
import Search from "./Search";

const TapaScripCars = () => {
  return (
    <div className="p-5">
      <Header />
      <Search />
      <CarsList />
    </div>
  );
};

export default TapaScripCars;

import { useState } from "react";
import CarsList from "./CarsList";
import Header from "./Header";
import Search from "./Search";

const TapaScripCars = () => {
  const CARS = [
    {
      id: 1,
      title: "Luxury Sedan",
      brand: "Mercedes",
      year: 2023,
      price: 80000,
      isPremium: true,
    },
    {
      id: 2,
      title: "Family SUV",
      brand: "Toyota",
      year: 2022,
      price: 45000,
      isPremium: false,
    },
    {
      id: 3,
      title: "Sports Car",
      brand: "Porsche",
      year: 2023,
      price: 120000,
      isPremium: true,
    },
    {
      id: 4,
      title: "Electric Hatchback",
      brand: "Nissan",
      year: 2022,
      price: 35000,
      isPremium: false,
    },
    {
      id: 5,
      title: "Luxury SUV",
      brand: "BMW",
      year: 2023,
      price: 90000,
      isPremium: true,
    },
  ];

  const [searchTram, setSerarchTram] = useState("");
  const [checkPremiumCar, setCheckPremiumCar] = useState(false);

  const onCheckCar = () => {
    setCheckPremiumCar(!checkPremiumCar);
  };

  return (
    <div className="p-5">
      <Header />
      <Search
        checkPremiumCar={checkPremiumCar}
        onCheckCar={onCheckCar}
        searchTram={searchTram}
        onSearchCar={setSerarchTram}
      />
      <CarsList
        checkPremiumCar={checkPremiumCar}
        searchTram={searchTram}
        cars={CARS}
      />
    </div>
  );
};

export default TapaScripCars;

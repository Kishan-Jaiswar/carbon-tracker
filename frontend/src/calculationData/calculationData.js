const transportOptions = {
  road: ["motorbike", "car", "bus", "truck", "autorickshaw"],
  rail: ["metro", "passengerTrain", "freightTrain"],
  air: ["privateJet", "commercialFlight", "cargoPlane"],
  water: ["cargoShip", "passengerShip", "ferry", "speedboat"],
};

const fuelOptions = {
  road: {
    motorbike: { petrol: "Petrol", diesel: "Diesel", electric: "Electric" },
    car: { petrol: "Petrol", diesel: "Diesel", electric: "Electric" },
    bus: { petrol: "Petrol", diesel: "Diesel", electric: "Electric" },
    truck: { petrol: "Petrol", diesel: "Diesel" },
    autorickshaw: { petrol: "Petrol", diesel: "Diesel", electric: "Electric" },
  },
  rail: {
    metro: { electric: "Electric" },
    passengerTrain: { diesel: "Diesel", electric: "Electric" },
    freightTrain: { diesel: "Diesel", electric: "Electric" },
  },
  air: {
    privateJet: { aviationFuel: "Aviation Fuel" },
    commercialFlight: { aviationFuel: "Aviation Fuel" },
    cargoPlane: { aviationFuel: "Aviation Fuel" },
  },
  water: {
    cargoShip: { diesel: "Diesel", heavyFuelOil: "Heavy Fuel Oil" },
    passengerShip: { diesel: "Diesel", heavyFuelOil: "Heavy Fuel Oil" },
    ferry: { diesel: "Diesel", electric: "Electric" },
    speedboat: { petrol: "Petrol", diesel: "Diesel" },
  },
};

const distanceUnits = [
  { value: "kilometer", label: "Kilometer" },
  { value: "mile", label: "Mile" },
  { value: "nauticalMile", label: "Nautical Mile" },
];

export { transportOptions, fuelOptions, distanceUnits };

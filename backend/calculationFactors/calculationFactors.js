const emissionFactors = {
  road: {
    motorbike: { petrol: 60, diesel: 70, electric: 0 },
    car: { petrol: 120, diesel: 130, electric: 0 },
    bus: { petrol: 80, diesel: 90, electric: 0 },
    truck: { petrol: 250, diesel: 300 },
    autorickshaw: { petrol: 90, diesel: 100, electric: 0 },
  },
  rail: {
    metro: { electric: 20 },
    passengerTrain: { diesel: 50, electric: 15 },
    freightTrain: { diesel: 80, electric: 20 },
  },
  air: {
    privateJet: { aviationFuel: 300 },
    commercialFlight: { aviationFuel: 250 },
    cargoPlane: { aviationFuel: 400 },
  },
  water: {
    cargoShip: { diesel: 200, heavyFuelOil: 500 },
    passengerShip: { diesel: 150, heavyFuelOil: 450 },
    ferry: { diesel: 100, electric: 0 },
    speedboat: { petrol: 180, diesel: 200 },
  },
};

// Distance conversion factors
const distanceConversion = {
  kilometer: 1,
  mile: 1.60934,
  nauticalMile: 1.852,
};

module.exports = { emissionFactors, distanceConversion };

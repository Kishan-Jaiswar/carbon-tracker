const callGemini = require("../config/geminiConfig");
const {
  emissionFactors,
  distanceConversion,
} = require("../calculationFactors/calculationFactors");

const calculateCarbonFootprint = async (req, res) => {
  const { distance, transportMode, vehicleType, fuelType, distanceUnit } =
    req.body;

  if (
    !distance ||
    !transportMode ||
    !vehicleType ||
    !fuelType ||
    !distanceUnit
  ) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Convert distance to kilometers
  const convertedDistance = distance * (distanceConversion[distanceUnit] || 1);

  // Validate transport mode, vehicle type, and fuel type
  if (!emissionFactors[transportMode]) {
    return res.status(400).json({ error: "Invalid transport mode" });
  }
  if (!emissionFactors[transportMode][vehicleType]) {
    return res
      .status(400)
      .json({ error: "Invalid vehicle type for selected transport mode" });
  }
  if (!emissionFactors[transportMode][vehicleType][fuelType]) {
    return res
      .status(400)
      .json({ error: "Invalid fuel type for selected vehicle type" });
  }

  // Get emission factor
  const emissionFactor = emissionFactors[transportMode][vehicleType][fuelType];

  // Calculate total emissions in kg CO2
  const totalEmissions = (convertedDistance * emissionFactor) / 1000;

  const prompt = `
      The user has calculated their carbon footprint for a journey.
      - Transport Mode: ${transportMode}
      - Vehicle Type: ${vehicleType}
      - Fuel Type: ${fuelType}
      - Distance: ${convertedDistance} km
      - Carbon Footprint: ${totalEmissions.toFixed(2)} kg CO2
      
      Based on this, provide 3 practical and actionable recommendations to reduce their carbon footprint.
    `;

  const recommendations = await callGemini(prompt);

  const responseData = {
    status: true,
    transportMode,
    vehicleType,
    fuelType,
    distance: convertedDistance,
    distanceUnit: "kilometer",
    carbonFootprint: `${totalEmissions.toFixed(2)} kg CO2`,
    recommendations,
  };

  res.status(200).json(responseData);
};

module.exports = { calculateCarbonFootprint };

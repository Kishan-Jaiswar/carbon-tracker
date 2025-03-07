// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import {
//   transportOptions,
//   fuelOptions,
//   distanceUnits,
// } from "../calculationData/calculationData";

// const CarbonFootPrintForm = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

//   const transportMode = watch("transportMode", "");
//   const vehicleType = watch("vehicleType", "");

//   const [result, setResult] = useState({});
//   console.log("result", result);

//   const onSubmit = async (data) => {
//     console.log("Form Data:", data);
//     try {
//       const response = await fetch("http://localhost:8080/api/calculate", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch");
//       }

//       const responseData = await response.json();
//       if (responseData?.status) {
//         setResult(responseData);
//       }
//     } catch (error) {
//       console.error("Error calculating carbon footprint:", error);
//     }
//   };

//   return (
//     <div className="p-6 bg-white shadow-md rounded-lg">
//       <h1 className="text-xl font-bold mb-4 text-center">
//         Carbon Footprint Calculator
//       </h1>

//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//         <div className="grid grid-cols-3 gap-6">
//           <div>
//             <label className="block font-medium">Transport Mode:</label>
//             <select
//               {...register("transportMode", {
//                 required: "Select a transport mode",
//               })}
//               className="w-full border rounded-md p-2"
//             >
//               <option value="">Select</option>
//               {Object.keys(transportOptions).map((mode) => (
//                 <option key={mode} value={mode}>
//                   {mode.toUpperCase()}
//                 </option>
//               ))}
//             </select>
//             {errors.transportMode && (
//               <p className="text-red-500">{errors.transportMode.message}</p>
//             )}
//           </div>
//           {transportMode && (
//             <div>
//               <label className="block font-medium">Vehicle Type:</label>
//               <select
//                 {...register("vehicleType", {
//                   required: "Select a vehicle type",
//                 })}
//                 className="w-full border rounded-md p-2"
//               >
//                 <option value="">Select</option>
//                 {transportOptions[transportMode]?.map((vehicle) => (
//                   <option key={vehicle} value={vehicle}>
//                     {vehicle.toUpperCase()}
//                   </option>
//                 ))}
//               </select>
//               {errors.vehicleType && (
//                 <p className="text-red-500">{errors.vehicleType.message}</p>
//               )}
//             </div>
//           )}
//           {vehicleType && (
//             <div>
//               <label className="block font-medium">Fuel Type:</label>
//               <select
//                 {...register("fuelType", { required: "Select a fuel type" })}
//                 className="w-full border rounded-md p-2"
//               >
//                 <option value="">Select</option>
//                 {Object.entries(fuelOptions[transportMode] || {}).map(
//                   ([key, value]) => (
//                     <option key={key} value={key}>
//                       {value.toUpperCase()}
//                     </option>
//                   )
//                 )}
//               </select>
//               {errors.fuelType && (
//                 <p className="text-red-500">{errors.fuelType.message}</p>
//               )}
//             </div>
//           )}
//           <div>
//             <label className="block font-medium">Distance:</label>
//             <input
//               type="number"
//               step="any"
//               {...register("distance", {
//                 required: "Enter distance",
//                 min: { value: 0.0001, message: "Must be positive" },
//               })}
//               className="w-full border rounded-md p-2"
//             />
//             {errors.distance && (
//               <p className="text-red-500">{errors.distance.message}</p>
//             )}
//           </div>
//           <div>
//             <label className="block font-medium">Distance Unit:</label>
//             <div className="flex space-x-4">
//               {distanceUnits.map(({ value, label }) => (
//                 <label key={value} className="flex items-center">
//                   <input
//                     type="radio"
//                     value={value}
//                     {...register("distanceUnit", {
//                       required: "Select a distance unit",
//                     })}
//                     className="mr-2"
//                   />
//                   {label.toUpperCase()}
//                 </label>
//               ))}
//             </div>
//             {errors.distanceUnit && (
//               <p className="text-red-500">{errors.distanceUnit.message}</p>
//             )}
//           </div>
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700"
//         >
//           Calculate Carbon Footprint
//         </button>
//       </form>

//       {/* Display Result */}
//       {result.status && (
//         <div className="mt-4 p-6 bg-gray-100 rounded-lg shadow-md">
//           {/* Carbon Footprint Section */}
//           <h2 className="text-xl font-bold text-gray-800">
//             Carbon Footprint Result
//           </h2>
//           <p className="text-lg text-gray-700 mt-2">
//             Your journey produces{" "}
//             <span className="font-semibold text-red-600">
//               {result.carbonFootprint}
//             </span>{" "}
//             of CO2 emissions.
//           </p>

//           {/* Recommendations Section */}
//           <div className="mt-4">
//             <h3 className="text-lg font-semibold text-gray-800">
//               How to Reduce Your Carbon Footprint
//             </h3>
//             <p className="text-gray-600 mt-1">
//               Based on your provided data, here are some personalized
//               recommendations to lower your emissions:
//             </p>

//             {/* Mapping Recommendations into Cards */}
//             <div className="mt-3 grid gap-4 md:grid-cols-2">
//               {result.recommendations
//                 ?.split("\n") // Split recommendations by new lines
//                 ?.filter((r) => r?.trim()) // Remove empty lines
//                 ?.map((recommendation, index) => (
//                   <div
//                     key={index}
//                     className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-green-500"
//                   >
//                     <p className="text-gray-700">{recommendation}</p>
//                   </div>
//                 ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CarbonFootPrintForm;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  transportOptions,
  fuelOptions,
  distanceUnits,
} from "../calculationData/calculationData";

const CarbonFootPrintForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { transportMode, vehicleType } = watch();

  const [result, setResult] = useState({});

  const storeCalculationInLocalStorage = (calculationData) => {
    try {
      // Get existing calculations from localStorage
      const previousCalculations =
        JSON.parse(localStorage.getItem("previousCalculations")) || [];

      // Add the new calculation
      previousCalculations.push(calculationData);

      // Save back to localStorage
      localStorage.setItem(
        "previousCalculations",
        JSON.stringify(previousCalculations)
      );
    } catch (error) {
      throw new Error("Error storing calculation:", error);
    }
  };

  const onSubmit = async (formData) => {
    try {
      const response = await fetch("http://localhost:8080/api/calculate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const responseData = await response.json();

      if (responseData?.status) {
        setResult(responseData);
        storeCalculationInLocalStorage({
          timestamp: new Date().toISOString(),
          payload: formData,
          result: responseData,
        });
      }
    } catch (error) {
      throw new Error("Error calculating carbon footprint:", error);
    }
  };

  return (
    <div className=" bg-white rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-3 gap-6">
          <div>
            <label className="block font-medium">Transport Mode:</label>
            <select
              {...register("transportMode", {
                required: "Select a transport mode",
              })}
              className="w-full border rounded-md p-2"
            >
              <option value="">Select</option>
              {Object.keys(transportOptions).map((mode) => (
                <option key={mode} value={mode}>
                  {mode.toUpperCase()}
                </option>
              ))}
            </select>
            {errors.transportMode && (
              <p className="text-red-500">{errors.transportMode.message}</p>
            )}
          </div>
          {transportMode && (
            <div>
              <label className="block font-medium">Vehicle Type:</label>
              <select
                {...register("vehicleType", {
                  required: "Select a vehicle type",
                })}
                className="w-full border rounded-md p-2"
              >
                <option value="">Select</option>
                {transportOptions[transportMode]?.map((vehicle) => (
                  <option key={vehicle} value={vehicle}>
                    {vehicle.toUpperCase()}
                  </option>
                ))}
              </select>
              {errors.vehicleType && (
                <p className="text-red-500">{errors.vehicleType.message}</p>
              )}
            </div>
          )}
          {vehicleType && (
            <div>
              <label className="block font-medium">Fuel Type:</label>
              <select
                {...register("fuelType", { required: "Select a fuel type" })}
                className="w-full border rounded-md p-2"
              >
                <option value="">Select</option>
                {Object.entries(
                  fuelOptions[transportMode]?.[vehicleType] || {}
                ).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value.toUpperCase()}
                  </option>
                ))}
              </select>
              {errors.fuelType && (
                <p className="text-red-500">{errors.fuelType.message}</p>
              )}
            </div>
          )}
          <div>
            <label className="block font-medium">Distance:</label>
            <input
              type="number"
              step="any"
              {...register("distance", {
                required: "Enter distance",
                min: { value: 0.0001, message: "Must be positive" },
              })}
              className="w-full border rounded-md p-2"
            />
            {errors.distance && (
              <p className="text-red-500">{errors.distance.message}</p>
            )}
          </div>
          <div>
            <label className="block font-medium">Distance Unit:</label>
            <div className="flex space-x-4">
              {distanceUnits.map(({ value, label }) => (
                <label key={value} className="flex items-center">
                  <input
                    type="radio"
                    value={value}
                    {...register("distanceUnit", {
                      required: "Select a distance unit",
                    })}
                    className="mr-2"
                  />
                  {label.toUpperCase()}
                </label>
              ))}
            </div>
            {errors.distanceUnit && (
              <p className="text-red-500">{errors.distanceUnit.message}</p>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Calculate Carbon Footprint
        </button>
      </form>

      {result.status && (
        <div className="mt-4 p-6 bg-gray-100 rounded-lg">
          <h2 className="text-xl font-bold text-gray-800">
            Carbon Footprint Result
          </h2>
          <p className="text-lg text-gray-700 mt-2">
            Your journey produces{" "}
            <span className="font-semibold text-red-600">
              {result.carbonFootprint}
            </span>{" "}
            of CO2 emissions.
          </p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">
              How to Reduce Your Carbon Footprint
            </h3>
            <p className="text-gray-600 mt-1">
              Based on your provided data, here are some personalized
              recommendations to lower your emissions:
            </p>
            <div className="mt-3 grid gap-4 md:grid-cols-2">
              {result?.recommendations
                ?.split("\n")
                ?.filter((r) => r?.trim())
                ?.map((recommendation, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white rounded-lg shadow-sm border-l-4 border-green-500"
                  >
                    <p className="text-gray-700">{recommendation}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarbonFootPrintForm;

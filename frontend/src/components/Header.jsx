import React, { useState } from "react";
import PopUp from "./PopUp";

const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  const getPreviousCalculations = () => {
    try {
      return JSON.parse(localStorage.getItem("previousCalculations")) || [];
    } catch (error) {
      return [];
    }
  };

  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-gray-100 p-4 rounded-lg mb-5">
        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800">
          🌱 Carbon Footprint Calculator
        </h1>

        {/* Button */}
        <button
          type="button"
          className="mt-3 md:mt-0 px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          onClick={() => setOpenModal(true)}
        >
          📊 Show Previous Calculations
        </button>
      </div>

      {/* Modal */}
      {openModal && (
        <PopUp
          setOpenModal={setOpenModal}
          previousCalculationsInLocalStorage={getPreviousCalculations()}
        />
      )}
    </>
  );
};

export default Header;
import React from "react";

const PopUp = ({ setOpenModal, previousCalculationsInLocalStorage }) => {
  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-lg flex justify-center items-center z-50">
      <div className="bg-white w-[80%] h-[70%] overflow-auto rounded-lg shadow-lg p-6 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-xl font-bold text-gray-800">
            Previous Calculations
          </h2>
          <button
            onClick={() => setOpenModal(false)}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            &times;
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-grow mt-3 space-y-6">
          {previousCalculationsInLocalStorage?.length === 0 ? (
            <p className="text-gray-500 text-center text-lg">
              No previous calculations found.
            </p>
          ) : (
            previousCalculationsInLocalStorage?.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md border border-gray-200 p-6 transition-all duration-300 hover:shadow-lg"
              >
                {/* Calculation Summary */}
                <div className="border-l-4 border-blue-500 p-4 rounded-lg bg-gray-50 flex justify-between items-center">
                  <p className="text-sm text-gray-600">
                    <strong>Date:</strong>{" "}
                    {new Date(item.timestamp).toLocaleString()}
                  </p>
                  <h3 className="text-xl font-semibold text-gray-800 mt-1">
                    {item.result.transportMode} - {item.result.vehicleType}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-4">
                    <p className="text-gray-700 bg-gray-100 px-3 py-1 rounded-md">
                      <strong>Distance:</strong> {item.result.distance}{" "}
                      {item.result.distanceUnit}
                    </p>
                    <p className="text-red-500 bg-red-100 px-3 py-1 rounded-md">
                      <strong>Carbon Footprint:</strong>{" "}
                      {item.result.carbonFootprint}
                    </p>
                  </div>
                </div>

                {/* Recommendations Section */}
                {item?.result?.recommendations && (
                  <div className="mt-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      Recommendations 🌿
                    </h4>
                    <div className="grid gap-4 md:grid-cols-2">
                      {item?.result?.recommendations
                        ?.split("\n")
                        ?.filter((r) => r?.trim())
                        ?.map((recommendation, index) => (
                          <div
                            key={index}
                            className="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg shadow-sm transition-all duration-300 hover:bg-green-100"
                          >
                            <p className="text-gray-700">{recommendation}</p>
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PopUp;

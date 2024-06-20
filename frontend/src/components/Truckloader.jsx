import React, { useState } from "react";
import HelpTruckLoaderModal from "./HelpTruckLoaderModal";
import Select from "react-select";

function TruckLoadingSimulator() {
  // State variables to store the maximum allowed load, pallet weight, trucks, and current truck
  const [maxLoad, setMaxLoad] = useState(0);
  const [palletWeight, setPalletWeight] = useState(0);
  const [trucks, setTrucks] = useState([]);
  const [currentTruck, setCurrentTruck] = useState({
    id: 0,
    weight: 0,
    pallets: [],
  });
  const [maxPallets, setMaxPallets] = useState(0);

  // Handle changes to the maximum allowed load input field
  const handleMaxLoadChange = (e) => {
    setMaxLoad(parseInt(e.target.value));
  };

  // Handle changes to the pallet weight input field
  const handlePalletWeightChange = (e) => {
    setPalletWeight(parseInt(e.target.value));
  };

  // Handle changes to the truck type select field
  const handleTruckTypeChange = (option) => {
    setMaxPallets(parseInt(option.value));
  };

  // Add a pallet to the current truck or create a new truck if the current truck is full
  const addPallet = () => {
    if (
      currentTruck.weight + palletWeight <= maxLoad &&
      currentTruck.pallets.length < maxPallets
    ) {
      // Add the pallet to the current truck
      setCurrentTruck((prevTruck) => ({
        ...prevTruck,
        weight: prevTruck.weight + palletWeight,
        pallets: [
          ...prevTruck.pallets,
          { id: `pallet-${prevTruck.pallets.length}`, weight: palletWeight },
        ],
      }));
    } else {
      // Create a new truck and add the pallet to it
      setTrucks((prevTrucks) => [...prevTrucks, currentTruck]);
      setCurrentTruck({
        id: currentTruck.id + 1,
        weight: palletWeight,
        pallets: [{ id: `pallet-0`, weight: palletWeight }],
      });
    }
  };

  const options = [
    { value: "28", label: "Large - 26 Pallets" },
    { value: "14", label: "Medium - 14 Pallets" },
    { value: "8", label: "Small - 8 Pallets" },
  ];

  const MyComponent = () => (
    <Select options={options} onChange={handleTruckTypeChange} />
  );

  return (
    <div className="flex flex-col items-center p-8 ">
      {/* // Header section */}
      <div className="p-8 bg-slate-400">
        <h1 className="text-3xl font-bold mb-4">Truck Loading Simulator</h1>
        {/* // Input fields for maximum allowed load and pallet weight */}
        <div className="flex flex-col mb-4">
          <label className="block mb-2">
            Maximum allowed load (kg):
            <input
              type="number"
              value={maxLoad}
              onChange={handleMaxLoadChange}
              className="block w-full p-2 pl-10 text-sm text-gray-700"
            />
          </label>
          <label className="block mb-2">
            Pallet weight (kg):
            <input
              type="number"
              value={palletWeight}
              onChange={handlePalletWeightChange}
              className="block w-full p-2 pl-10 text-sm text-gray-700"
            />
          </label>
          <MyComponent />
        </div>
        {/* // Add pallet button */}
        <button
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          onClick={addPallet}
        >
          Add Pallet
        </button>
        <div className="w-full flex flex-row justify-end">
          <HelpTruckLoaderModal />
        </div>
      </div>
      {/* // Display trucks and their pallets */}
      <div className=" justify-center mt-4 grid grid-cols-5 gap-4">
        {/* flex flex-wrap */}
        {[...trucks, currentTruck].map((truck, index) => (
          <div
            key={index}
            className="bg-gray-200 p-4 m-2 w-64 flex flex-col justify-center h-fit"
          >
            <h2 className="text-lg font-bold">{`Truck ${truck.id + 1}`}</h2>
            <p>Weight: {truck.weight} kg</p>
            <ul className="list-none mb-0 ">
              {truck.pallets.map((pallet) => (
                <li key={pallet.id} className="text-sm">
                  Pallet {pallet.id} - {pallet.weight} kg
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TruckLoadingSimulator;

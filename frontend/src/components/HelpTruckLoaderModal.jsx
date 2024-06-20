import React, { useState } from "react";

const HelpTruckLoaderModal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("overflow-y-hidden");
  } else {
    document.body.classList.remove("overflow-y-hidden");
  }

  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
      >
        Help
      </button>

      {modal && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
          <div
            onClick={toggleModal}
            className="absolute top-0 left-0 w-full h-full bg-gray-800 opacity-80"
          ></div>
          <div
            className="bg-white rounded px-4 py-2 max-w-md mx-auto flex flex-row min-w-[35%]"
            style={{ zIndex: 1 }} // Add z-index to bring it to the front
          >
            <img
              src="./src/assets/trucks.png"
              alt="Pallet amount explanation"
              className="size-[45%]"
            />
            <div className="flex flex-col flex-nowrap justify-center items-center justify-items-center pl-4">
              <span>
                There are three truck sizes to choose from in this simulator.
              </span>
              <button
                onClick={toggleModal}
                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HelpTruckLoaderModal;

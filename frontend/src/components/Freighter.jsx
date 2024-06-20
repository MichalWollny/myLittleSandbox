import React from "react";

const Freighter = () => {
  return (
    <div>
      <div>
        <form className="flex flex-col p-4 bg-red-400">
          <label className="pt-2 mt-2">
            Company:
            <input type="text" name="company" />
          </label>
          <label className="p-2 mb-2">
            Weight:
            <input type="number" name="weight" />
          </label>
          <button
            type="submit"
            value="Submit"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded border border-black"
          >
            Add Container
          </button>
        </form>
      </div>
      <br />
      <div>
        {/* freighter display section */}

        <section className="border border-black bg-blue-200 w-fit">
          <img src="./src/assets/freighter.png" alt="" className="w-full" />
        </section>
        <p className="text-center">Example freighter</p>
      </div>
    </div>
  );
};

export default Freighter;

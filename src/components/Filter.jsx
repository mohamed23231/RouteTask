import React from "react";

function Filter({ setNameFilter, setMinAmount, setMaxAmount }) {
  return (
    <>
      {" "}
      <div className="w-4/6 mx-auto ">
        <input
          onChange={(e) => setNameFilter(e.target.value)}
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-green-200"
          placeholder="Search For Employee..."
        />
      </div>
      <div className="lg:flex my-3">
        <div className="lg:w-1/2 px-2 lg:my-0 my-3">
          <input
            onChange={(e) => setMinAmount(e.target.value)}
            type="number"
            id="default-search"
            className="block lg:w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-green-200 w-5/6 m-auto"
            placeholder="Min Amount"
          />
        </div>
        <div className="lg:w-1/2 px-2 lg:my-0 my-3">
          <input
            onChange={(e) => setMaxAmount(e.target.value)}
            type="number"
            id="default-search"
            className="block lg:w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:border-green-200 w-5/6 m-auto"
            placeholder="Max Amount"
          />
        </div>
      </div>
    </>
  );
}

export default Filter;

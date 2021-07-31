import React, { useState } from "react";

const Trending = () => {
  const [tab, setTab] = useState("offers");
  const handleTab = (value) => {
    setTab(value);
  };
  const buttonclasses = 'p-2 rounded-md mx-3 transition duration-500 ease-in-out bg-red-400 hover:bg-red-600 text-white';
  return (
    <div className="bg-red-50 p-4 rounded-lg text-center max-w-lg m-auto mt-5">
      <button
        className={tab === 'offers' ? `${buttonclasses} bg-green-600` : `${buttonclasses}`}
        onClick={() => handleTab("offers")}
      >
        Offers
      </button>
      <button
        className={tab === 'trendings' ? `${buttonclasses} bg-green-600` : `${buttonclasses}`}
        onClick={() => handleTab("trendings")}
      >
        Trending
      </button>
      {tab === "offers" ? (
        <div>
          <div>
            <h1 className="text-red-500 font-bold">Offer1</h1>
            <div className="inline-block m-1 bg-yellow-500 p-1">Product 1</div>
            <div className="inline-block m-1 bg-yellow-500 p-1">Product 2</div>
            <div className="inline-block m-1 bg-yellow-500 p-1">Product 3</div>
          </div>
          <div>
            <h1 className="text-red-500 font-bold">Offer2</h1>
            <div className="inline-block m-1 bg-yellow-500 p-1">Product 1</div>
            <div className="inline-block m-1 bg-yellow-500 p-1">Product 2</div>
            <div className="inline-block m-1 bg-yellow-500 p-1">Product 3</div>
          </div>
          <div>
            <h1 className="text-red-500 font-bold">Offer3</h1>
            <div className="inline-block m-1 bg-yellow-500 p-1">Product 1</div>
            <div className="inline-block m-1 bg-yellow-500 p-1">Product 2</div>
            <div className="inline-block m-1 bg-yellow-500 p-1">Product 3</div>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <h1 className="text-red-500 font-bold">Bata</h1>
            <div className="inline-block m-1 bg-yellow-500 p-1">Product 1</div>
            <div className="inline-block m-1 bg-yellow-500 p-1">Product 2</div>
            <div className="inline-block m-1 bg-yellow-500 p-1">Product 3</div>
          </div>
          <div>
            <h1 className="text-red-500 font-bold">Apex</h1>
            <div className="inline-block m-1 bg-yellow-500 p-1">Product 1</div>
            <div className="inline-block m-1 bg-yellow-500 p-1">Product 2</div>
            <div className="inline-block m-1 bg-yellow-500 p-1">Product 3</div>
          </div>
          <div>
            <h1 className="text-red-500 font-bold">Lotto</h1>
            <div className="inline-block m-1 bg-yellow-500 p-1">Product 1</div>
            <div className="inline-block m-1 bg-yellow-500 p-1">Product 2</div>
            <div className="inline-block m-1 bg-yellow-500 p-1">Product 3</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Trending;

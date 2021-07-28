import React from "react";
import { Link } from "react-router-dom";

const Shop = ({ shop }) => {
  const { shopname, shopid } = shop;
//   console.log(shop);
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <Link to={{
            pathname: `/shop/${shopid}`,
            state: shop
        }} >
        <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{shopname}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
          <p className="mt-1">$16.00</p>
        </div>
        </Link>
    </div>
  );
};

export default Shop;

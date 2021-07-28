import React from "react";
import Shop from "../Shop/Shop";

const Categories = ({ category }) => {
  // console.log(category);
  const { title, shoplist } = category;
  return (
    <div className="px-5">
      <h1 className="text-lg text-red-900 italic font-bold">{title}</h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {shoplist.map((shop) => (
              <Shop shop={shop} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Categories;

import React from "react";

const Categories = ({ category }) => {
  // console.log(category);
  const { title, img } = category;
  return (
    <div className="mx-5 my-8 p-4 bg-red-200 rounded-2xl shadow-xl">
      <h1 className="text-red-500 text-2xl font-semibold text-center">{title}</h1>
      <div className="flex flex-row flex-wrap flex-auto justify-center">
        <img src={img} alt="logo" width={50} style={{margin: '5px'}} className="rounded-md shadow-lg" />
        <img src={img} alt="logo" width={50} style={{margin: '5px'}} className="rounded-md shadow-lg" />
        <img src={img} alt="logo" width={50} style={{margin: '5px'}} className="rounded-md shadow-lg" />
        <img src={img} alt="logo" width={50} style={{margin: '5px'}} className="rounded-md shadow-lg" />
        <img src={img} alt="logo" width={50} style={{margin: '5px'}} className="rounded-md shadow-lg" />
        <img src={img} alt="logo" width={50} style={{margin: '5px'}} className="rounded-md shadow-lg" />
      </div>
    </div>
  );
};

export default Categories;

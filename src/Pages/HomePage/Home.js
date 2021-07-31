import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Categories from "../../components/Categories/Categories";
import Trending from "../../components/Trending/Trending";

const Home = () => {
  const [shopdata, setShopdata] = useState({});
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setShopdata(data));
  }, []);
  return (
    <div className="grid lg:grid-cols-4 sm:grid-cols-1 p-1">
      <Link
        to="/trendings"
        className="lg:hidden sm:block text-center text-red-600 font-semibold"
      >
        See today's trendings
      </Link>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:col-span-3 sm:col-span-1">
        {/* category section */}
        {shopdata.categories &&
          shopdata.categories.map((category) => (
            <Categories category={category} />
          ))}
      </div>
      {/* top & trending shops with product section */}
      <div className="hidden lg:block">
        <Trending />
      </div>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from 'react';

import Categories from '../../components/Categories/Categories';

const Home = () => {
  const [shopdata, setShopdata] = useState({});
  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setShopdata(data));
  }, []);
  return (
    <div>
      {/* <SearchProsddssduct /> */}
      {shopdata.categories &&
        shopdata.categories.map((category) => (
          <Categories category={category} />
        ))}
    </div>
  );
};

export default Home;

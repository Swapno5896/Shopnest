import React from 'react';

const Product = () => {
return (
<div>
 <p>Service</p>
 <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
 <label for="vehicle1"> I have a bike</label>
 <br />

 <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
 <label for="vehicle2"> I have a car</label> <br />
 <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
 <label for="vehicle3"> I have a boat</label> <br />
 <hr />
 <p>Location</p>
 <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
 <label for="vehicle2">China</label> <br />
 <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
 <label for="vehicle3"> Bangladesh</label> <br />
 <hr />
 <input type="text" /> <input type="text" />
 <hr />
</div>
);
};

export default Product;
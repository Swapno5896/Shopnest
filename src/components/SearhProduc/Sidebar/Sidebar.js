import React from 'react';

const Product = () => {
return (
<div class="pl-16">
 <div class="m-8">
  <p class="font-semibold text-4xl">Service</p>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
  <label class="text-xl " for="vehicle1"> I have a bike</label>
  <br />

  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
  <label class="text-xl" for="vehicle2"> I have a car</label> <br />
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
  <label class="text-xl" for="vehicle3"> I have a boat</label> <br />
  <hr />
 </div>
 <div class="m-8">
  <p class="text-4xl">Location</p>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
  <label class="text-xl" for="vehicle2">China</label> <br />
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
  <label class="text-xl" for="vehicle3"> Bangladesh</label> <br />
  <hr />
 </div>
 <div class="pl-16">
  <input class="w-14 border-2 border-green-200 focus:border-blue-100 " placeholder="Min" type="text" />
  <input class="ml-3 w-16 border-2 border-red-500 focus:border-blue-500 " placeholder="Max" type="text" />
 </div>
 <hr />
 <div class="m-8">
  <p class="text-4xl">Warranty Type</p>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
  <label class="text-xl" for="vehicle2">Brand Warranty</label> <br />
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
  <label class="text-xl" for="vehicle3"> Seller Warranty</label> <br /> <input type="checkbox" id="vehicle2"
   name="vehicle2" value="Car" />
  <label class="text-xl" for="vehicle2">No Warranty</label> <br />
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
  <label class="text-xl" for="vehicle3"> International Manufacturer Warranty</label> <br />
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
  <label class="text-xl" for="vehicle2">Local seller warranty</label> <br />
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
  <label class="text-xl" for="vehicle2">International Seller Warranty</label> <br />
 </div>
</div>
);
};

export default Product;


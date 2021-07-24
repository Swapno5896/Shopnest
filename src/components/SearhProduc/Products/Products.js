import React from 'react';

const Product = (props) => {
const {img,title,price} = props.pd;
console.log(img,title,price)
return (
<div class=" p-6 border-4 border-light-blue-500 border-opacity-50 ">
 <img src={img} alt="" />
 <h3>{title}</h3>
 <p>{price}</p>
</div>
);
};

export default Product;
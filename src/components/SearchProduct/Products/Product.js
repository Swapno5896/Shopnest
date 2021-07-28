import React from 'react';

const Product = (props) => {
    const { img, title, price } = props.pd;
    return (
        <div class="hover:shadow-2xl cursor-pointer h-80 p-6 border-4 border-red-900 rounded-md border-light-blue-500 border-opacity-50 ">
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>{price}</p>
        </div>
    );
};

export default Product;
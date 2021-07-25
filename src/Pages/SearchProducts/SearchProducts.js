import React from 'react';
import Products from '../../components/SearhProduct/Products/Products';
import Sidebar from '../../components/SearhProduct/Sidebar/Sidebar';
import img1 from '../../images/pd.png';
const SearchProduct = () => {
    const fakeProduct = [
        {
            img: img1, title: 'DELL NoteBook Intel Quad Core, 8GB RAM, 256GB SSD, 14 inch Laptop-', price: 26000
        },
        {
            img: img1, title: 'DELL NoteBook Intel Quad Core, 8GB RAM, 256GB SSD, 14 inch Laptop-', price: 26000
        },

        {
            img: img1, title: 'DELL NoteBook Intel Quad Core, 8GB RAM, 256GB SSD, 14 inch Laptop-', price: 26000
        },
        {
            img: img1, title: 'DELL NoteBook Intel Quad Core, 8GB RAM, 256GB SSD, 14 inch Laptop-', price: 26000
        },
        {
            img: img1, title: 'DELL NoteBook Intel Quad Core, 8GB RAM, 256GB SSD, 14 inch Laptop-', price: 26000
        },
        {
            img: img1, title: 'DELL NoteBook Intel Quad Core, 8GB RAM, 256GB SSD, 14 inch Laptop-', price: 26000
        }, {
            img: img1, title: 'DELL NoteBook Intel Quad Core, 8GB RAM, 256GB SSD, 14 inch Laptop-', price: 26000
        }, {
            img: img1, title: 'DELL NoteBook Intel Quad Core, 8GB RAM, 256GB SSD, 14 inch Laptop-', price: 26000
        }, {
            img: img1, title: 'DELL NoteBook Intel Quad Core, 8GB RAM, 256GB SSD, 14 inch Laptop-', price: 26000
        }, {
            img: img1, title: 'DELL NoteBook Intel Quad Core, 8GB RAM, 256GB SSD, 14 inch Laptop-', price: 26000
        },
    ]
    return (
        <div style={{ height: '1300px'}}>
            <div class="h-64 grid grid-cols-4 mt-10 gap-2">
                <div class="border-r-2 border-fuchsia-600  border-indigo-600  ">
                    <Sidebar />
                </div>
                <div class="col-span-3">
                    <div class="grid grid-cols-3 gap-4 pr-5">
                        {
                            fakeProduct.map(pd =>
                                <Products pd={pd} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchProduct;
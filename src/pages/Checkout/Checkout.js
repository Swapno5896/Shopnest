import React from 'react';
import backpack from '../../assets/images/backpack.jpg';
import './Checkout.scss';

const Checkout = () => {
    const product = [
        { name: 'bagpack' },
        { name: 'laptop' }
    ]
    return (
        <div className='order-checkout'>
            <div className='order-list'>
                <div className='delivery-option'>
                    <h5><strong>Preferred Delivery Option</strong></h5>
                    <div>
                        <p>
                            <h6>Please Select item(s)</h6>
                            Availabilty and promotions will be <br />
                            shown here
                        </p>
                    </div>
                </div>
                <div className='select-all-checkbox'>
                    <label>
                        <input type="checkbox" name="" id="" />
                        <div>
                            <p>SELECT ALL(15 ITEM(S))</p>
                            <p>D</p>
                        </div>
                    </label>
                </div>
                <div className='checout-product-wrapper'>
                    {
                        product?.map(product => <div className='single-checkout-product'>
                            <div className='seller-checkbox'>
                                <input type="checkbox" name="seller" id="seller" />
                                <label for='seller'>
                                    <p>JANANI COMPUTERS (CTG)  </p>
                                </label>
                            </div>
                            <div className='product-checkbox'>
                                <input type="checkbox" name="product" id="product" />
                                <label for='product'>
                                    <div className='product-details'>
                                        <img src={backpack} alt="" />
                                        <div>
                                            <p>Dell Gaming Backpack</p>
                                            <span>Dell, Backpack capacity:Not Specified, Color Family: Black</span>
                                            <p>Only 1 item(s) in stock</p>
                                        </div>
                                    </div>
                                    <div className='product-price'>
                                        <h3>4,200</h3>
                                        <strike>4,500</strike>
                                        <h6>-7%</h6>
                                        <p>
                                            <p>L</p>
                                            <p>D</p>
                                        </p>
                                    </div>
                                    <div className='product-quantity'>
                                        <p>-</p>
                                        <p>1</p>
                                        <p>+</p>
                                    </div>
                                </label>
                            </div>
                        </div>)
                    }
                </div>
            </div>
            <div className='order-summary'>
                <div className='order-subtotal'>
                    <h3>Order Summary</h3>
                    <div>
                        <p>Subtotal (o items)</p>
                        <p>0</p>
                    </div>
                </div>
                <div className='apply-voucher'>
                    <input type="text" placeholder='Enter Voucher Code' />
                    <button>APPLY</button>
                </div>
                <div className='order-total'>
                    <div>
                        <p>Total</p>
                        <p>0</p>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
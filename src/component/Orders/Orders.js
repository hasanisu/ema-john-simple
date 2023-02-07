import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import OrderDetails from '../OrderDetails/OrderDetails';

const Orders = () => {
    const {products, storedCart} = useLoaderData();
    const [cart, setCart] = useState(storedCart);
    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product => <OrderDetails
                    key={product.id}
                    product={product}
                    ></OrderDetails>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;
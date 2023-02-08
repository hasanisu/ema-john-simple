import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import OrderDetails from '../OrderDetails/OrderDetails';

const Orders = () => {
    const {products, storedCart} = useLoaderData();
    const [cart, setCart] = useState(storedCart);


    const clearCart =()=>{
        setCart([]);
        deleteShoppingCart();

    }

    return (
        <div className='shop-container'>
            <div className='orders-container'>
                {
                    cart.map(product => <OrderDetails
                    key={product.id}
                    product={product}
                    ></OrderDetails>)
                }

                {
                    cart.length === 0 && <h2>Please go to the shop cart for order <Link to='/'>Shop Now</Link></h2>
                }

            </div>
            <div className='cart-container'>
                <Cart clearCart={clearCart} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;
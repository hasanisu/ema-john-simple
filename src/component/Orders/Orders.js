import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import OrderDetails from '../OrderDetails/OrderDetails';

const Orders = () => {
    const {products, storedCart} = useLoaderData();
    const [cart, setCart] = useState(storedCart);


    const handleRemoveItem = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

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
                    handleRemoveItem={handleRemoveItem}
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
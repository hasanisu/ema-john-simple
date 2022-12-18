import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    

    useEffect( ()=>{
        console.log('product load before fetch')
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedCart = products.find(product => product.id === id);
            if(addedCart){
                const quantity = storedCart[id];
                addedCart.quantity = quantity;
                savedCart.push(addedCart);
            }
        }
        setCart(savedCart);
    } ,[products])

    const handleAddToCart = (product) =>{
        console.log(product);
        // cart.push(product); eita normal process
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
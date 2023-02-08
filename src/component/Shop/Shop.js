import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart,  } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const products = useLoaderData();
    // old style
    // const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    
    // old style
    // useEffect( ()=>{
    //     console.log('product load before fetch')
    //     fetch('products.json')
    //     .then(res => res.json())
    //     .then(data => setProducts(data))
    // },[]);

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

    const handleAddToCart = (selectedProduct) =>{
        console.log(selectedProduct);
        let newCart = [];
        // cart.push(product); eita normal process
        const exists = cart.find(product => product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
    }


    const clearCart =()=>{
        setCart([]);
        deleteShoppingCart();

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
                <Cart clearCart={clearCart} cart={cart}>
                    <Link to='/orders'>
                    <button>View Orders</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;
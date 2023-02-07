import { getStoredCart } from "../utilities/fakedb";

export const addToCartProduct = async()=>{
    const addProducts = await fetch('products.json');
    const products = await addProducts.json();
    // console.log(products);

    // get cart
    const savedCart = getStoredCart();
    let storedCart = [];
    for(const id in savedCart){
        const findId = products.find(product => product.id === id);
        if(findId){
            const quantity = savedCart[id];
            findId.quantity = quantity;
            storedCart.push(findId);
        }
    }

    return {products, storedCart};
}
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './OrderDetails.css';

const OrderDetails = ({product, handleRemoveItem}) => {
    const {name, img, price, quantity, shipping, id } = product;
    return (
        <div className='order-contianer'>
            <div>
            <img src={img} alt="" />
            </div>
            <div className='details-container'>
                <div className='review-details'>
                    <p>Name: {name}</p>
                    <p>Price: ${price}</p>
                    <p><small>Shipping: ${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                    
                </div>
                <dir className="btn-delete">
                    <button onClick={()=>handleRemoveItem(id)} className='btn-del'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </dir>
            </div>
        </div>
    );
};

export default OrderDetails;
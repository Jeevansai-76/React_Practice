import { useState } from "react";

function MyComponent(){

    const [name,setName] = useState("");
    const [quantity,setQuantity] = useState();
    const [comment,setComment] = useState("");
    const [payment,setPayment] = useState("");
    const [shipment,setShipment] = useState("");

    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShipmentChange(event){
        setShipment(event.target.value);
    }

    return(
        <div>
            <input type="text" value={name}
                onChange={handleNameChange}
            />
            <p>Name: {name}</p>

            <input type="number" value={quantity}
                onChange={handleQuantityChange}
            />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} placeholder="Enter addtional details..."
                onChange={handleCommentChange}
            />
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="Pick Up" 
               checked = {shipment === "Pick Up"} onChange={handleShipmentChange}
                />
                Pick Up
            </label>

            <label>
                <input type="radio" value="Delivery" 
               checked = {shipment === "Delivery"} onChange={handleShipmentChange}
                />
                Delivery
            </label>
            <p>Shipment : {shipment}</p>
        </div>
    );
}

export default MyComponent
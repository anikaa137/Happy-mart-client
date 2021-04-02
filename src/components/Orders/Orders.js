import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import OrderDetailes from "../OrderDetailes/OrderDetailes";

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [purchasingProducts, setPurchasingProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:9000/orders?email=" + loggedInUser.email)
            .then((res) => res.json())
            .then((data) => setPurchasingProducts(data));
    }, []);
    return (
        <div>
            <div
                class="alert alert-warning alert-dismissible fade show"
                role="alert"
            >
                <h1>Order Details</h1>
            </div>
            <h3>Order SUMMARY : {purchasingProducts.length} items </h3>

            {purchasingProducts.map((pProduct) => (
                <OrderDetailes pProduct={pProduct}></OrderDetailes>
            ))}
        </div>
    );
};

export default Orders;

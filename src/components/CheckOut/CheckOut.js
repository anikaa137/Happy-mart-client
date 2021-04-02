import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../App";
import Header from "../Header/Header";

const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [product, setProduct] = useState({});
    // console.log(product);
    const { id } = useParams();
    // console.log(id)
    useEffect(() => {
        fetch(`http://localhost:9000/checkOut/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, []);

    const handleCheckOut = () => {
        const productInfo = {
            ProductName: product.name,
            Quantity: 1,
            price: product.price,
            image: product.imageURL,
            wight: product.wight,
            email: loggedInUser.email,
            shopper: loggedInUser.displayName,
            orderTime: new Date().toDateString("dd/MM/yyy"),
        };
        // console.log(productInfo)
        fetch("http://localhost:9000/addConfirmOrder", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(productInfo),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    };
    return (
        <div>
            <Header></Header>
            <h2>checkOut</h2>
            <table class="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td>{product.name}</td>
                        <td>1</td>
                        <td>{product.price}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <td colspan="3" class="text-center">
                        Total
                    </td>
                    <td colspan="3">{product.price}</td>
                </tfoot>
            </table>
            <button
                type="button"
                onClick={handleCheckOut}
                class="btn btn-success"
            >
                Check Out
            </button>
        </div>
    );
};

export default CheckOut;

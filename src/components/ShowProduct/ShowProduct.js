import React from "react";
import { useHistory } from "react-router";

const ShowProduct = ({ product }) => {
    console.log(product);
    let history = useHistory();

    const buyNowHandler = (id) => {
        // console.log(id)
        history.push(`/checkOut/${id}`);
    };
    return (
        <div class="card col-md-3">
            <img src={product.imageURL} class="card-img-top" alt="..." />
            <div class="card-body">
                <h3 class="card-text">
                    {product.name} - {product.wight}
                </h3>
            </div>
            <div class="card-body">
                <h4 class="card-link">{product.price}</h4>
                <button
                    class="btn btn-primary"
                    onClick={() => buyNowHandler(product._id)}
                >
                    Buy now
                </button>
            </div>
        </div>
    );
};

export default ShowProduct;

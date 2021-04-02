import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import ShowProduct from "../ShowProduct/ShowProduct";

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:9000/booking")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <div className="row">
            <Header></Header>
            {products.length === 0 && (
                <div class="text-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}
            {products.map((product) => (
                <ShowProduct product={product}></ShowProduct>
            ))}
        </div>
    );
};

export default Home;

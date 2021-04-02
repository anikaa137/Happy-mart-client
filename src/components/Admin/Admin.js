import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Admin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = (data) => {
        console.log(data);
        const eventDta = {
            name: data.name,
            wight: data.wight,
            price: data.price,
            imageURL: imageURL,
        };
        // console.log(eventDta)
        const url = `http://localhost:9000/admin`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(eventDta),
        }).then((res) => console.log("ser sid res", res));
    };
    const handleImageUpload = (event) => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set("key", "d371491237d968517d992b8f6982be6a");
        imageData.append("image", event.target.files[0]);

        axios
            .post("https://api.imgbb.com/1/upload", imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    const [showProduct, setShowProduct] = useState(true);
    const [product, setProduct] = useState([]);
    console.log(product);
    useEffect(() => {
        fetch("http://localhost:9000/booking")
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, []);

    function deleteProduct(id) {
        // console.log(id)
        fetch(`http://localhost:9000/delete/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((result) => {
                console.log("deleted success");
            });
    }
    return (
        <div id="viewport">
            <div id="sidebar">
                {/* <header>
                    <h1 className="text-white">Daily Needs</h1>
                </header> */}
                <div className="nav" class="d-flex" >
                    <div class="d-flex justify-content-around">
                        <button
                            onClick={() => setShowProduct(true)}
                            className="btn btn-primary"
                        >
                            Manage Product
                        </button>
                    </div>
                    <div class="d-flex justify-content-around">
                        <button
                            onClick={() => setShowProduct(false)}
                            className="btn btn-primary mt-3"
                        >
                            Add Product
                        </button>
                    </div>
                </div>
            </div>

            <div id="content">
                <div className="container-fluid">
                    {showProduct ? (
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Product Name</th>
                                    <th scope="col">Weight</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {product.map((products) => (
                                    <tr key={products._id}>
                                        <td>{products.name}</td>
                                        <td>{products.wight}</td>
                                        <td>$ {products.price}</td>
                                        <td>
                                            <button
                                                onClick={() =>
                                                    deleteProduct(products._id)
                                                }
                                                className="btn btn-primary"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} class="row g-2">
                            <div class="col-md-6">
                                <label for="inputname" class="form-label">
                                    Product Name
                                </label>
                                <input
                                    name="name"
                                    defaultValue="New product"
                                    ref={register}
                                    type="text"
                                    class="form-control"
                                    id="name"
                                />
                            </div>

                            <div class="col-md-6">
                                <label for="inputWight" class="form-label">
                                    Wight
                                </label>
                                <input
                                    name="wight"
                                    ref={register}
                                    type="text"
                                    class="form-control"
                                    id="wight"
                                />
                            </div>

                            <div class="col-md-6">
                                <label for="inputPrice" class="form-label">
                                    Add Price
                                </label>
                                <input
                                    name="price"
                                    ref={register}
                                    type="text"
                                    class="form-control"
                                    id="price"
                                />
                            </div>

                            <div class="col-md-6">
                                <label for="inputPhoto" class="form-label">
                                    Add Photo
                                </label>
                                <input
                                    type="file"
                                    class="form-control"
                                    onChange={handleImageUpload}
                                    id="Photo"
                                />
                            </div>

                            <input type="submit" class="col-md-1" />
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Admin;

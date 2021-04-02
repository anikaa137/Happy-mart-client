import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div>
            <div className="header">
                <nav class="navbar navbar-expand-lg navbar-light ">
                    <div class="container-fluid">
                        <Link
                            to="/home"
                            class="navbar-brand justify-content-center"
                            style={{ color: "#ff5050", textDecoration: "none" }}
                        >
                            <h1>Happy Mart</h1>
                        </Link>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div
                            class="collapse navbar-collapse justify-content-end"
                            id="navbarNavAltMarkup"
                        >
                            <div class="navbar-nav ">
                                <Link to="/home" class="nav-link active">
                                    <h4>Home</h4>
                                </Link>

                                <Link to="/orders" class="nav-link active">
                                    <h4>Orders</h4>
                                </Link>

                                <Link to="/admin" class="nav-link active">
                                    <h4>Admin</h4>
                                </Link>
                                <Link to="/deals" class="nav-link active">
                                    <h4>Deals</h4>
                                </Link>

                                {loggedInUser.email ? (
                                    <h5
                                        style={{
                                            background: " #79d2a6",
                                            color: "#ff3300",
                                            padding: "12px 20px",
                                            borderRadius: "5px",
                                        }}
                                    >
                                        {loggedInUser.email}
                                    </h5>
                                ) : (
                                    <Link
                                        to="/login"
                                        className="header-link"
                                        class="nav-link"
                                        style={{
                                            background: " #79d2a6",
                                            color: "#ff3300",
                                            padding: "12px 20px",
                                            borderRadius: "5px",
                                        }}
                                    >
                                        <h5>Login</h5>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;

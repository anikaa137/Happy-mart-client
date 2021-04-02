import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";

if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                setLoggedInUser(user);
                history.replace(from);
                console.log(user);
            })
            .catch((error) => {
                // Handle Errors here.
                var errorMessage = error.message;
                var email = error.email;
                console.log(errorMessage, email);
            });
    };
    return (
        <div class="text-center mt-5">
            <form class="row g-3 needs-validation" novalidate>
                <div class="col-md-4 position-relative">
                    <label for="validationTooltip01" class="form-label">
                        First name
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="validationTooltip01"
                        value="Mark"
                        required
                    />
                    <div class="valid-tooltip">Looks good!</div>
                </div>
                <div class="col-md-4 position-relative">
                    <label for="validationTooltip02" class="form-label">
                        Last name
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="validationTooltip02"
                        value="Otto"
                        required
                    />
                    <div class="valid-tooltip">Looks good!</div>
                </div>
                <div class="col-md-4 position-relative">
                    <label for="validationTooltipUsername" class="form-label">
                        Username
                    </label>
                    <div class="input-group has-validation">
                        <span
                            class="input-group-text"
                            id="validationTooltipUsernamePrepend"
                        >
                            @
                        </span>
                        <input
                            type="text"
                            class="form-control"
                            id="validationTooltipUsername"
                            aria-describedby="validationTooltipUsernamePrepend"
                            required
                        />
                        <div class="invalid-tooltip">
                            Please choose a unique and valid username.
                        </div>
                    </div>
                </div>
                <div class="col-md-6 position-relative">
                    <label for="validationTooltip03" class="form-label">
                        City
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="validationTooltip03"
                        required
                    />
                    <div class="invalid-tooltip">
                        Please provide a valid city.
                    </div>
                </div>
                <div class="col-md-3 position-relative">
                    <label for="validationTooltip04" class="form-label">
                        State
                    </label>
                    <select
                        class="form-select"
                        id="validationTooltip04"
                        required
                    >
                        <option selected disabled value="">
                            Choose...
                        </option>
                        <option>...</option>
                    </select>
                    <div class="invalid-tooltip">
                        Please select a valid state.
                    </div>
                </div>
                <div class="col-md-3 position-relative">
                    <label for="validationTooltip05" class="form-label">
                        Zip
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="validationTooltip05"
                        required
                    />
                    <div class="invalid-tooltip">
                        Please provide a valid zip.
                    </div>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" type="submit">
                        {" "}
                        login{" "}
                    </button>
                </div>
            </form>
            <br />
            <br />
            <div>
                {" "}
                <button class="btn btn-primary" onClick={handleGoogleSignIn}>
                    Sign In using Google
                </button>
            </div>
        </div>
    );
};

export default Login;

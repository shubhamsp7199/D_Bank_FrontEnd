import axios from "axios";
import { useState } from "react";
// import { useHistory } from "react-router/cjs/react-router.min";
import { useHistory } from "react-router-dom";
import AppUser from "./models/AppUser";

const Register = (props) => {
    const history = useHistory();

    const [appUser, setAppUser] = useState(new AppUser());
    const [credentials, setCredentials] = useState("");

    const handleAppUser = (event) => {
        console.log(event.target.name);
        console.log(event.target.value);
        setAppUser({
            ...appUser,
            [event.target.name]: event.target.value,
        });
    };
    
    const submitAppUser = (event) => {
        axios
            .post(`http://localhost:8081/user/register`, appUser)
            .then((response) => {
                console.log(response.data);                
                localStorage.setItem("appUser", appUser);
                alert("You are registered successfully. Please login now...");
                history.push("/login");
            })
            .catch((error) => {
                console.log(error.response);
                setCredentials("Enter proper credentials...");
            });
            event.preventDefault();
    };
    return(
        <div class="container register">
            <div class="row">
                <div class="col-md-3 register-left">
                    <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                    <h3>Welcome</h3>
                    <p>You are 30 seconds away</p>
                    {/* <a href="/login">
                        <input type="submit" name="" value="login" src="/login" />
                    </a> */}
                    <br/>
                </div>
                <div class="col-md-9 register-right">
                    <ul class="nav nav-tabs nav-justified" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a
                                class="nav-link active"
                                id="home-tab"
                                data-toggle="tab"
                                href="#home"
                                role="tab"
                                aria-controls="home"
                                aria-selected="true"
                                >
                                    Admin
                                </a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                id="profile-tab"
                                data-toggle="tab"
                                href="#profile"
                                role="tab"
                                aria-controls="profile"
                                aria-selected="false"
                            >
                                Customer
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div
                            class="tab-pane fade show active"
                            id="home"
                            role="tabpanel"
                            aria-labelledby="home-tab"
                        >
                            <h3 class="register-heading">Apply  as a Admin</h3>
                            <div class="row register-form">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="userName"
                                            id="userName"
                                            className="form-control mb-3"
                                            placeholder="Enter username *"
                                            value={appUser.userName}
                                            onChange={handleAppUser}
                                            required
                                        />
                                    </div>
                                    <div class="form-group">
                                        <input
                                            type="password"
                                            class="form-control mb-3"
                                            placeholder="Password *"
                                            className="form-control"
                                            name="password"
                                            id="password"
                                            value={appUser.password}
                                            onChange={handleAppUser}
                                        />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <select
                                            class="form-control mb-3"
                                            name="role"
                                            id="role"
                                            onChange={handleAppUser}
                                        >
                                        <option class="hidden" selected disabled>
                                            Select Role
                                        </option>
                                        <option value="ADMIN">ADMIN</option>
                                        </select>
                                    </div>
                                    {/* <div class="form-group">
                                        <input
                                            type="password"
                                            class="form-control"
                                            placeholder="Confirm Password *"
                                            value={appUser.password}
                                            onChange={handleAppUser}
                                        />
                                    </div> */}
                                    <input
                                        type="submit"
                                        id="submit"
                                        name="submit"
                                        class=" btnRegister form-control btn btn-primary mb-3"
                                        value="Register"
                                        onClick={submitAppUser}

                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            class="tab-pane fade show"
                            id="profile"
                            role="tabpanel"
                            aria-labelledby="profile-tab"
                        >
                            <h3 class="register-heading">Apply as a Customer</h3>
                            <div class="row register-form">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input
                                             type="text"
                                             class="form-control"
                                             name="userName"
                                             id="userName"
                                             className="form-control mb-3"
                                             placeholder="Enter username *"
                                             value={appUser.userName}
                                             onChange={handleAppUser}
                                             required
                                        />
                                    </div>
                                    <div class="form-group">
                                        <input
                                            type="password"
                                            class="form-control mb-3"
                                            placeholder="Password *"
                                            className="form-control"
                                            name="password"
                                            id="password"
                                            value={appUser.password}
                                            onChange={handleAppUser}
                                        />
                                    </div>
                                </div>{" "}
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <select
                                            class="form-control mb-3"
                                            name="role"
                                            id="role"
                                            onChange={handleAppUser}
                                        >
                                            <option class="hidden" selected disabled>
                                                Select Role
                                            </option>
                                            <option value="CUSTOMER">Customer</option>
                                        </select>
                                    </div>
                                    {/* <div class="form-group">
                                        <input
                                            type="password"
                                            class="form-control"
                                            placeholder="Confirm Password *"
                                            value={appUser.password}
                                            onChange={handleAppUser}
                                        />
                                    </div> */}
                                    <input
                                        type="submit"
                                        id="submit"
                                        name="submit"
                                        class=" btnRegister form-control btn btn-primary mb-3"
                                        value="Register"
                                        onClick={submitAppUser}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
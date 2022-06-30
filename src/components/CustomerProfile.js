import axios from "axios";
import { useState } from "react"
import { useDispatch } from "react-redux";
import Customer from "./models/Customer"

const CustomerProfile = () => {
    const [newCustomerObj, setNewCustomerObj] = useState(new Customer());
    const [displayCustomerObj, setDisplayCustomerObj] = useState(new Customer());
    const dispatch = useDispatch();

    const handleAddCustomer = (e) => {
        console.log(e.target.value);
        setNewCustomerObj({
            ...newCustomerObj,
            [e.target.name]: e.target.value,
        });
    };

    const submitAddCustomer = (evt) => {
        evt.preventDefault();
        axios
        .post(`http://localhost:8081/customer/addCustomer`, newCustomerObj)
        .then((response) => {
            setDisplayCustomerObj(response.data);
            alert("Customer Added Successfully");
            setNewCustomerObj({
                accountNumber: "",
                firstName: "",
                lastName: "",
                mobileNumber: "",
                address: "",
                accountType: "",
            });
        })
        .catch(() => {
            alert("Customer could not be added.");
        });
    };

    // ..............................................................................
    
    return(
        <div className="container">
            <h1 className="display-4 text-primary mt-3 mb-3">Customer Table</h1>
            <div class="container register-form">
                <div class="form">
                    <div class="note">
                        <p>Add Customer Profile</p>
                    </div>

                    <div class="form-content">
                        <div class="row">
                            <div className="col-md-6">
                            <div className="form-group">
                                    <input
                                        type="text"
                                        id="accountNumber"
                                        name="accountNumber"
                                        className="form-control"
                                        placeholder="Account Number*"
                                        onChange={handleAddCustomer}
                                        value={newCustomerObj.accountNumber}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        className="form-control"
                                        placeholder="First Name*"
                                        onChange={handleAddCustomer}
                                        value={newCustomerObj.firstName}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        className="form-control"
                                        placeholder="Last Name*"
                                        onChange={handleAddCustomer}
                                        value={newCustomerObj.lastName}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id=" mobileNumber"
                                        name="mobileNumber"
                                        className="form-control"
                                        placeholder="mobileNumber*"
                                        onChange={handleAddCustomer}
                                        value={newCustomerObj.mobileNumber}
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id=" address"
                                        name="address"
                                        className="form-control"
                                        placeholder="Address*"
                                        onChange={handleAddCustomer}
                                        value={newCustomerObj.address}
                                    />
                                </div>
                                <div class="form-group">
                                    <select
                                        class="form-control mb-3"
                                        name="accountType"
                                        id="accountType"
                                        onChange={handleAddCustomer}
                                        >
                                            <option value="accountStatus">Account Type</option>
                                            <option value="saving">SAVING</option>
                                            <option value="current">CURRENT</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <button
                           type="button"
                           class="btnSubmit   btn btn-primary"
                           value="Add Customer"
                           onClick={submitAddCustomer}
                        >Submit</button> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerProfile;
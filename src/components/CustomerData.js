import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getAllCustomer, getCustomerByAccountNumber } from "../redux/CustomerSlice";
import Customer from "./models/Customer"
import { getAllCustomerService, getCustomerByAccountNumberService } from "./services/CustomerService";

const CustomerData = () => {
    const [accountNumber, setAccountNumber] = useState("");
    const dispath = useDispatch();

    const customerDataFromStoreAc = useSelector(
        (state) => state.customer.customerState
    );
    const customerList = useSelector(
        (state) => state.customer.customerList
    );

    

    const handleCustomerAccountNumber = (e) =>{
        console.log("handleCustomerAccountNumber");
        setAccountNumber(e.target.value);
    };


    const submitGetCustomerByAccountNumber = (evt) =>{
        evt.preventDefault();
        console.log("submitGetCustomerByAccountNumber");
        getCustomerByAccountNumberService(accountNumber)
        .then((response) => {
            dispath(getCustomerByAccountNumber(response.data));
        })
        .catch(() => {
            alert(`Customer with account number- ${accountNumber} is not found.`)
        });
        console.log(Object.keys(customerList));
        setAccountNumber("");
    };

    const submitGetAllCustomer = (evt) =>{
        evt.preventDefault();
        console.log("submitGetAllCustomer");
        getAllCustomerService()
        .then((response) => {
            dispath(getAllCustomer(response.data));
        })
        .catch(() =>{
            alert(`Something is wrong!`);
        });
    };

// .....................................................................................

return(
    <div class="container-fluid p-4">
        <h1 className="display-4 text-primary mt-3 mb-3">Customer Data</h1>
        <p>Below table contain all customer Details</p>
        <div class="row">

            <div className="col-2 mr-2 border border-light shadow p-3 mb-5 bg-white">
                <p>Find Customer By Account Number</p>
                <form
                className="form form-group form-primary"
                onSubmit={submitGetCustomerByAccountNumber}
                >
                    <input
                        className="form-control mt-3"
                        type="number"
                        id="accountNumber"
                        name="accountNumber"
                        value={accountNumber}
                        onChange={handleCustomerAccountNumber}
                        placeholder="Enter Account Number to search"
                        autoFocus
                        required
                        />
                        <input
                            className="form-control mt-3 btn btn-primary"
                            type="submit"
                            value="Find Customer"
                            />
                </form>
                <p>
                Details of Customer:
                    <th>
                        {" "}
                        {"Account Number:"}
                        {customerDataFromStoreAc.accountNumber}
                    </th>
                    <br></br>
                    <th>
                        {" "}
                        {"Customer Id:"}
                        {customerDataFromStoreAc.customerId}
                    </th>
                    <br></br>
                    <th>
                        {" "}
                        {"First Name:"}
                        {customerDataFromStoreAc.firstName}
                    </th>
                    <br></br>
                    <th>
                        {" "}
                        {"Last Name:"}
                        {customerDataFromStoreAc.lastName}
                    </th>
                    <br></br>
                    <th>
                        {" "}
                        {"Mobile Number:"}
                        {customerDataFromStoreAc.mobileNumber}
                    </th>
                    <br></br>
                    <th>
                        {" "}
                        {"Address:"}
                        {customerDataFromStoreAc.address}
                    </th>
                    <br></br>
                    <th>
                        {" "}
                        {"Account Type:"}
                        {customerDataFromStoreAc.accountType}
                    </th>
                    <br></br>
                </p>
            </div>

            <div className="container-xxl">
                <div className="col-100 border border-light shadow p-3 mb-5 bg-white">
                    <p>Show All Customer</p>
                <div>
                    <form className="form form-group form-primary">
                        <input
                            className="mt-3 btn btn-primary btn-block"
                            type="button"
                            onClick={submitGetAllCustomer}
                            value="Find All Customer"
                        />
                    </form>
                </div>
                <table className="table table-light">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Customer Id</th>
                                    <th>Account Number</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Mobile Number</th>
                                    <th>Address</th>
                                    <th>Account Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {customerList.map((customer,k) => {
                                    return (
                                        <tr k={k}>
                                            <td>{customer.customerId}</td>{" "}
                                            <td>{customer.accountNumber}</td>{" "}
                                            <td>{customer.firstName}</td>{" "}
                                            <td>{customer.lastName}</td>{" "}
                                            <td>{customer.mobileNumber}</td>{" "}
                                            <td>{customer.address}</td>{" "}
                                            <td>{customer.accountType}</td>{" "}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </table>
            </div>
        </div>
    </div>
</div>
);

};

export default CustomerData;
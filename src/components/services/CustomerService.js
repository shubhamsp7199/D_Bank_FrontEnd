import axios from "axios";

const getCustomerByAccountNumberService = (accountNumber) => {
    console.log(`getCustomerByAccountNumberService`);
    return axios.get(`http://localhost:8081/customer/getCustomerByAccountNumber/${accountNumber}`);
}

const getAllCustomerService = () =>{
    console.log(`getAllCustomer`);
    return axios.get(`http://localhost:8081/customer/getAllCustomer`);
}

export { getCustomerByAccountNumberService, getAllCustomerService};
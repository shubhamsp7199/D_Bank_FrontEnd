import { createSlice } from "@reduxjs/toolkit";
import Customer from "../components/models/Customer";

const CustomerSlice = createSlice({
    name: "customer",

    initialState: {
        customerState: new Customer(),
        customerList: [],
    },

    reducers:{
        
        getCustomerByAccountNumber: (state, action) => {
            console.log("CustomerSlice reducers getCutomerByAccountNumber ");
            state.customerState = action.payload;
        },
        getAllCustomer: (state, action) => {
            console.log("CustomerSlice reducers getAllCustomer");
            state.customerList = action.payload;
        },
    },
});

export const { getCustomerByAccountNumber, getAllCustomer } = CustomerSlice.actions;

export default CustomerSlice.reducer;
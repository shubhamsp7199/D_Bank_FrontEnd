import { configureStore } from "@reduxjs/toolkit";
import customerReducer from "./CustomerSlice";

console.log("store");
const store = configureStore({  
    reducer: {
        customer: customerReducer
    },
});

export default store;
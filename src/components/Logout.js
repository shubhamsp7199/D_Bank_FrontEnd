import { useHistory } from "react-router-dom"

const Logout = () => {
    const history = useHistory();
    sessionStorage.setItem("isUserLoggedIn", false);
    sessionStorage.clear();
    alert("Logged out successfully...");
    window.location.assign("/home");
    return null;
};

export default Logout;
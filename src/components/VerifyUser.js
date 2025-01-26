import useUserIsLogged from "../stores/useUserIsLogged.js";
import { Navigate } from "react-router-dom";

function VerifyUser({children}) {
const userIsLogged = useUserIsLogged((state) => state.userIsLogged);
    console.log(userIsLogged)
    return userIsLogged ? children : <Navigate to="/register" replace />;
}

export default VerifyUser
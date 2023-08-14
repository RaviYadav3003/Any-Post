import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./Context/AuthContext";

export const RequiresAuth = ({ children }) => {
    const { isLoggedIn } = useContext(AuthContext);
    const location = useLocation();
    return (
        isLoggedIn
            ? (
                children
            )
            : (
                <Navigate to="/login" state={{ from: location }} />
            ));
};
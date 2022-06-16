import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
    const [componentMounted, setComponentMounted] = useState(true);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const logout = async () => {
        setError(null);
        setIsPending(true);

        // sign the user out
        try {
            await projectAuth.signOut();

            // dispatch lougout action
            dispatch({ type: "LOGOUT" });

            if (componentMounted) {
                setIsPending(false);
                setError(null);
            }
        } catch (err) {
            if (componentMounted) {
                console.log(err.message);
                setError(err.message);
                setIsPending(false);
            }
        }
    };

    useEffect(() => {
        return () => setComponentMounted(false);
    }, []);

    return { logout, error, isPending };
};

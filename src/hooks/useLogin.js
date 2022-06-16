import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [componentMounted, setComponentMounted] = useState(true);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setError(null);
        setIsPending(true);

        // login user
        try {
            const response = await projectAuth.signInWithEmailAndPassword(
                email,
                password
            );

            if (!response) {
                throw new Error("Login failed.");
            }

            // dispatch login action
            dispatch({ type: "LOGIN", payload: response.user });

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

    return { login, error, isPending };
};

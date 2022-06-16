import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
    const [componentMounted, setComponentMounted] = useState(true);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const signup = async (email, password, displayName) => {
        setError(null);
        setIsPending(true);

        try {
            // signup user
            const response = await projectAuth.createUserWithEmailAndPassword(
                email,
                password
            );
            if (!response) {
                throw new Error("Signup failed.");
            }
            await response.user.updateProfile({ displayName });

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

    return { error, isPending, signup };
};

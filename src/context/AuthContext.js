import { createContext, useEffect, useReducer } from "react";
import { projectAuth } from "../firebase/config";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload };
        case "LOGOUT":
            return { ...state, user: null };
        case "AUTH_IS_READY":
            return { ...state, authIsReady: true, user: action.payload };
        default:
            return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null,
        authIsReady: false,
    });

    useEffect(() => {
        const unsubscribe = projectAuth.onAuthStateChanged(user => {
            dispatch({ type: "AUTH_IS_READY", payload: user });
            // This is the way Shaun Pelling does it:
            // it is a little difficult to visualize for me
            unsubscribe();
        });
        // This is the way I would prefer to do it, just
        // because I can visualize it better.
        //     return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

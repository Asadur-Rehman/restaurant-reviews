import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase/fire";

const UserContext = createContext();

export const UserAuth = () => {
    return useContext(UserContext);
}

export default function AuthContextProvider({ children }) {
    const [isLoggedOut, setIsLoggedOut] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged( auth, (currentUser) => {
            if (currentUser) {
                setIsLoggedOut(false);
                onSnapshot(doc(db, "users", currentUser.uid), (doc) => {
                    setUser(doc.data());
                });

                console.log("User is logged in");
            } else {
                setIsLoggedOut(true);
                setUser(null);
                console.log("User is logged out");
            };
        })
    }, []);

    return (
        <UserContext.Provider value={{ isLoggedOut, user }}>
            {children}
        </UserContext.Provider>
    );
}
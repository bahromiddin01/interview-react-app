import React, { createContext, useEffect, useState } from "react";
import { supabase } from "../supabase/supabase";

export const UserContext = createContext()

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null)


    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
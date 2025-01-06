import React, { createContext, useState } from "react";

export const BookingContext = createContext()

export const BookingProvider = ({ children }) => {

    const [interviewFocus, setInterviewFocus] = useState();
    const [interviewType, setInterviewType] = useState();

    return (
        <BookingContext.Provider value={{
            interviewFocus,
            setInterviewFocus,
            interviewType,
            setInterviewType
        }}>
            {children}
        </BookingContext.Provider>
    )
}
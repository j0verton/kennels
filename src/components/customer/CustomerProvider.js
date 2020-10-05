import React, { useState, createContext } from "react"
import { unstable_renderSubtreeIntoContainer } from "react-dom"

export const CustomerContext = createContext()

export const CustomerProvider = (props) => {
    const [customers, setCustomers] = useState([])
    
    const getCustomers = () => {
        return fetch("http://localhost:8088/customers")
            .then(res => res.json())
            .then(setCustomers)
    }

    const addCustomers = customer => {
        return fetch("http://localhost:8088/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customer)
        })
            .then(getCustomers)
    }
    return (
        <CustomerContext.Provider value={{
            customers, getCustomers, addCustomers
        }}>
            {props.children}
        </CustomerContext.Provider>
    )
}


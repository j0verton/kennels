import React from "react"
import "./Customer.css"
import { CustomerList } from "./CustomerList"

export const CustomerCard = ({ customer }) => (
    <section className="customer">
        <h3 className="customer__name">{customer.name}</h3>
        <address className="customer__address">{customer.address} </address>
    </section>
)


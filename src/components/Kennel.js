import React from "react"
import { AnimalCard } from "./animal/AnimalCard.js"
import "./animal/Animal.css"
import "./Kennel.css"
import { EmployeeCard } from "./employee/Employee.js"
import { LocationCard } from "./location/Location.js"
import { CustomerCard } from "./customer/Customer.js"


export const Kennel = (props) => (
    <>
        <h2>{props.kennelName}</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>{props.address}</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>

        <h2>Animals</h2>
        <article className="employees">
        <EmployeeCard />
        </article>

        <h2>Locations</h2>
        <article className="locations">
        <LocationCard />
        </article>

        <h2>Customer</h2>
        <article className="customers">
        <CustomerCard />
        </article>
        

    </>
)

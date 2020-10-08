import React from "react"
import { Link } from "react-router-dom"
import "./Location.css"

export const LocationCard = ({ location }) => (
    <section className="location">
        <Link to={`/locations/detail/${location.id}`}>
            <h3 className="location__name">{location.name}</h3>
        </Link>
        <div className="location__employees">employees: {location.employees.length}</div>
        <div className="location__animals">animals: {location.animals.length}</div>
    </section>
    
)
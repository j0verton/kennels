import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalList } from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <Route path="/animals">
                <h2>Animals</h2>
                    <AnimalList />
                </Route>
            </AnimalProvider>

            <CustomerProvider>
                <Route path="/customers">
                <h2>Customers</h2>
                    <CustomerList />
                </Route>
            </CustomerProvider>

            <EmployeeProvider>
                <Route path="/employees">
                <h2>Employees</h2>
                    <EmployeeList />
                </Route>
            </EmployeeProvider>

            <LocationProvider>
                <Route path="/locations">
                <h2>Locations</h2>
                    <LocationList />
                </Route>    
            </LocationProvider>                                    
        </>
    )
}


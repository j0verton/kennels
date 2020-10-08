import React, { useContext, useRef, useEffect } from "react"
import { LocationContext } from "../location/LocationProvider"
import { EmployeeContext } from "../employee/EmployeeProvider"
import "./Employee.css"
import { useHistory } from 'react-router-dom';

export const EmployeeForm = (props) => {
    const { addEmployee, getEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    const name = useRef(null)
    const location = useRef(null)

    useEffect(() => {
        getEmployees().then(getLocations)
     }, [])

     const constructNewEmployee= () => {
        /*
            The `location` and `customer` variables below are
            the references attached to the input fields. You
            can't just ask for the `.value` property directly,
            but rather `.current.value` now in React.
        */
        const locationId = parseInt(location.current.value)

        if (locationId === 0) {
            window.alert("Please select a location")
        } else { addEmployee({
                name: name.current.value,
                locationId
            })
            .then(() => history.push("/employees"))
        }
    }

    const history = useHistory();

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Employee name: </label>
                    <input type="text" id="employeeName" ref={name} required autoFocus className="form-control" placeholder="Employee name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue="" name="location" ref={location} id="employeeLocation" className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewEmployee()
                }}
                className="btn btn-primary">
                Save Employee
            </button>
        </form>
    )
}
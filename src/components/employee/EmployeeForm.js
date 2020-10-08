import React, { useContext, useRef, useEffect, useState  } from "react"
import { LocationContext } from "../location/LocationProvider"
import { EmployeeContext } from "../employee/EmployeeProvider"
import "./Employee.css"
import { useHistory, useParams } from 'react-router-dom';

export const EmployeeForm = (props) => {
    const { addEmployee, getEmployees, updateEmpolyee, getEmployeeById } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    const [ employee, setEmployee ] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const {employeeId} = useParams()
    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newEmployee = { ...employee }
        newEmployee[event.target.name] = event.target.value
        setEmployee(newEmployee)
    }

    useEffect(() => {
        getEmployees().then(getLocations).then(()=> {
            if (employeeId){
                getEmployeeById(employeeId)
                .then(employee => {
                    setEmployee(employee)
                    setIsLoading(false)
                })
            } else {
                setIsLoading(false)
            }
       })
    }, [])


     const constructNewEmployee= () => {
        
        if (parseInt(employee.locationId === 0)) {
            window.alert("Please select a location")
        } else { 
            setIsLoading(true)
            if(employeeId){
                updateEmpolyee({
                    id:employee.id,
                    name: employee.name,
                    locationId: parseInt(employee.locationId)  
                })

            }else{
                addEmployee({
                    name: employee.name,
                    locationId: parseInt(employee.locationId) 
                })
                .then(() => history.push("/employees"))
            }
        }
    }

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">{employeeId ? `Edit ${employee.name}`: 'New Employee'}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Employee name: </label>
                    <input type="text" id="employeeName" name="name" required autoFocus className="form-control" 
                    placeholder="Employee name" 
                    onChange={handleControlledInputChange}
                    defaulValue={employee.name}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue={employee.locationID} name="location" id="employeeLocation" className="form-control"  
                    onChange={handleControlledInputChange}>
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
                className="btn btn-primary"
                disabled={isLoading}
                onClick={evt => {
                    evt.preventDefault() // Prevent browser from submitting the form
                    constructNewEmployee()
                }}>
                {employeeId ? "Save Employee": "Add Employee"}
            </button>
        </form>
    )
}
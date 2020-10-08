import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"
import { useParams, useHistory } from "react-router-dom"

export const EmployeeDetail = () => {
    const { fireEmployee, getEmployeeById } = useContext(EmployeeContext)

    const [employee, setEmployee] = useState()

    const {employeeId} = useParams();
    const history = useHistory()
    
    useEffect(()=> {
        console.log("useEffect", employeeId)
        getEmployeeById(employeeId)
        .then((response) => {
			setEmployee(response)
			
		})
            }, [])
            
    return (
        <section className="employee">
            <h3 className="employee">{employee?.name}</h3>
			<div className="employee">Location: {employee?.location.name}</div>
            {/* <h3 className="animal__name">{animal.name}</h3>
            <div className="animal__breed">{animal.breed}</div>
			<div className="animal__location">Location: {location.name}</div>
			<div className="animal__owner">Customer: {customer.name}</div> */}
			<button onClick={
                () => {
                    fireEmployee(employee.id)
                        .then(() => {
                            history.push("/employee")
                        })
                }}>Fire Employee
            </button>
            
        </section>
    )
}
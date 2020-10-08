import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams, useHistory, Link } from "react-router-dom"


export const LocationDetail = () => {
    const { closeLocation, getLocationById } = useContext(LocationContext)
	
	const [location, setLocation] = useState({})
	
	const {locationId} = useParams();
	const history = useHistory();

    useEffect(() => {
		console.log("useEffect", locationId)
        getLocationById(locationId)
        .then((response) => {
            console.log(response)
			setLocation(response)
		})
			}, [])

    return (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>
            <div className="location__address">{location.address}</div>
            <h4>Employees</h4>
            {
                location.employees?.map(employee=>{
			        return <div className="location__employee">Employee: <Link to={`/employees/detail/${employee.id}`}>
                    { employee.name }
            </Link></div>
                })
            }
			<h4>Current Residents</h4>
            {
                location.animals?.map(animal=>{
                    return <div className="location__animal">Animal: <Link to={`/animals/detail/${animal.id}`}>
                    { animal.name }
                </Link></div>
                })
            }
            			<button onClick={
                () => {
                    closeLocation(location.id)
                        .then(() => {
                            history.push("/locations")
                        })
                }}>Close Location
            </button>
            <button onClick={() => {
                history.push(`/location/edit/${location.id}`)
            }}>Edit</button>
        </section>
    )
}
import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import { AnimalContext } from "../animal/AnimalProvider"
import { CustomerContext } from "../customer/CustomerProvider"
import "./Location.css"
import { useHistory, useParams } from 'react-router-dom';

export const LocationForm = () => {
    const { addLocation, getLocationById, updateLocation } = useContext(LocationContext)

    //for edit, hold on to state of animal in this view
    const [location, setLocation] = useState({})
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    const {locationId} = useParams();
	const history = useHistory();

    const handleControlledInputChange = (event) => { 
        const newLocation = { ...location }
        newLocation[event.target.name] = event.target.value
        setLocation(newLocation)
    }

    useEffect(() => {
            if (locationId){
                getLocationById(locationId)
                .then(location => {
                    setLocation(location)
                    setIsLoading(false)
                })
            } else {
                setIsLoading(false)
            }
    }, [])

    const constructLocationObject = () => {
            //disable the button - no extra clicks
        setIsLoading(true);
        if (locationId){
            //PUT - update
            updateLocation({
                id: location.id,
                name: location.name,
                address: location.address
            })
            .then(() => history.push(`/location/detail/${location.id}`))
        }else {
            //POST - add
            addLocation({
                name: location.name,
                address: parseInt(location.address)
            })
            .then(() => history.push("/locations"))

        }
    }
    
    return (
        <form className="locationForm">
            <h2 className="LocationForm__title">{locationId ? `Edit ${location.name}` : "New Location"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationName">Location name: </label>
                    <input type="text" id="locationName" name="name" required autoFocus className="form-control" 
                    placeholder="Location name" 
                    onChange={handleControlledInputChange} 
                    defaultValue={location.name}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="locationAddress">Location address: </label>
                    <input type="text" id="locationAddress" name="address" required autoFocus className="form-control" 
                    placeholder="Location address" 
                    onChange={handleControlledInputChange} 
                    defaultValue={location.address}/>
                </div>
            </fieldset>
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form
                    constructLocationObject()
                }}>
            {locationId ? <>Save Location</> : <>Add Location</>}</button>
        </form>
    )
}
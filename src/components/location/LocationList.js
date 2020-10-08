import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import "./Location.css"
import { useHistory } from "react-router-dom"

export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)
    
    useEffect(() => {
        console.log("LocationList: useEffect - getLocations")
        getLocations()
    }, [])
    const history = useHistory()
    return (
        <div className="locations">
            {console.log("LocationList: Render")}
            {
                locations.map(location => {
                    return <LocationCard key={location.id} location={location} />
                })
            }
            <button onClick={() => {history.push("/location/create")}}>
            Open a New Location
        	</button>
        </div>
    )
}
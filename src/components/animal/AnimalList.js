import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { AnimalCard } from "./AnimalCard"
import "./Animal.css"
import { useHistory } from "react-router-dom"

export const AnimalList = () => {
    const { animals, getAnimals } = useContext(AnimalContext)
	
	//useEffect - Side effects are things that cannot be done during render 
	//for example: reaching out to the world for something
    useEffect(() => {
		console.log("AnimalList: useEffect - getAnimals")
		getAnimals()
		
    }, [])

	const history = useHistory()
    return (	
		<div className="animals">
			{console.log("AnimalList: Render")}
			<h2>Animals</h2>
			<button onClick={() => {history.push("/animals/create")}}>
            Add Animal
        	</button>
            {
			animals.map(animal => {
				return <AnimalCard key={animal.id} animal={animal} />
			})
            }
        </div>
    )
}

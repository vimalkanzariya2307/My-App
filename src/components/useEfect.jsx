import React from 'react'
import { useState } from 'react'

function MyCar() {
    const [name, setName] = useState("BMW M5")
    const [brand, setBrand] = useState("BMW")
    const [year, setYear] = useState("2001")
    const [color, setColor] = useState("Black")

    const [allNames, setAllNames] = useState({
        firstName: "Meet",
        lastName: "Parsana",

    })



    const handleName = () => {
        setName("BMW M2")
    }

    const handleBrand = () => {
        setBrand("Mahindra")
    }

    const handleYear = () => {
        setYear("2000")
    }

    const handleColor = () => {
        setColor("White")
    }



    return (
        <>
            <p>I have car of brand {brand}, named {name} with a {color} colour. I have purchased it in the year {year}.</p>

            <button onClick={handleName} >Change Car Name</button>
            <button onClick={handleBrand} >Change Car Brand</button>
            <button onClick={handleYear} >Change Car Year</button>
            <button onClick={handleColor} >Change Car Color</button>

        </>

    )
}

export default MyCar
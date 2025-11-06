import { useState } from "react"

function MyComponent(){

    const [car,setCar] = useState(
        {
            Year:2024,
            make:"Ford",
            model:"Mustang"
        }
    );

    function handleYearChange(event){
        setCar(c => ({...c,Year:event.target.value}))
    }

    function handleMakeChange(event){
        setCar(c => ({...c,make:event.target.value}))
    }

    function handleModelChange(event){
         setCar(c => ({...c,model:event.target.value}))
    }

    return(<>
        <p>My car is {car.Year} {car.make} {car.model}</p>
        <input type="number" value={car.Year} onChange={handleYearChange}/><br></br>
        <input type="text" value={car.make} onChange={handleMakeChange}/><br></br>
        <input type="text" value={car.model} onChange={handleModelChange}/><br></br>
    </>);

}

export default MyComponent
import { useState } from "react";

function MyComponent(){

    const [name,setName] = useState("Guest");

    const [age,setAge] = useState(0);

    const [isEmployed,setIsEmployed] = useState(false);

    const updateName = () =>{
        setName("Bob Marlin");
    }

    const incrementAge = () =>{
        setAge(age + 1);
    }

    const toggleEmployeeStatus = ()=>{
        setIsEmployed(!isEmployed);
    }

    return(
    <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Update Name</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>

        <p>isEmployed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleEmployeeStatus}>Toggle Status</button>
    </div>
    );
}

export default MyComponent
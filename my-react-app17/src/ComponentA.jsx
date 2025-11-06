import { useState } from "react";
import ComponentB from "./ComponentB.jsx";
import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

function ComponentA(){

    const [user] = useState("Bro Code");

    return(
    <div className="box">
        <h2>ComponentA</h2>
        <p>Hello, {user}</p>
        <UserContext.Provider value={user}>
            <ComponentB />
        </UserContext.Provider>
    </div>
    );
}

export default ComponentA
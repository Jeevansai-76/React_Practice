import { useState } from "react";

function MyComponent(){

    const [foods,setFoods] = useState(["Apple","Orange","Mango"])

    function handleAddFood(){
        const foodItem = document.getElementById("foodItem").value;
        document.getElementById("foodItem").value = "";
        setFoods(f => [...f,foodItem])
    }

    function handleRemoveFood(index){
        setFoods(f => (f.filter((_,i)=> i!=index)));
    }

    return(
        <div>
            <h1>My Food Items</h1>
            <ul>
                {foods.map((food,index)=>
                    <li key={index} onClick={()=>handleRemoveFood(index)}>{food}</li>
                )}
            </ul>
            <input type="text" id="foodItem" placeholder="Enter a food.." />
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    );
}

export default MyComponent
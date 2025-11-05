
function List({items=[{ id: 0, name: "No items", calories: 0 }],category="category"}){

    
    //fruits.sort((a,b)=>a.name.localeCompare(b.name)); //Alphabetic order
   // fruits.sort((a,b)=>b.name.localeCompare(a.name)); //Reverse Alphabetic order
   //fruits.sort((a,b)=>a.calories-b.calories) // low to high
   // fruits.sort((a,b)=>b.calories-a.calories) // high to low

   //const LowCalItems = fruits.filter(fruit=>fruit.calories<80)
   //const HighCalItem = fruits.filter(fruit=>fruit.calories>100)

    const listItems = items.map(item=><li key={item.id}>
                        {item.name}:&nbsp; 
                        <b>{item.calories}</b></li>)

    return(<>
    <h2 className="list-category">{category}</h2>
    <ol className="list-items">{listItems}</ol>
    </>);
}

export default List
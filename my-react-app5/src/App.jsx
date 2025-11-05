import List from "./List"

function App() {

  const fruits = [{id:1,name:"apple",calories:101},
                    {id:2,name:"orange",calories:75},
                    {id:3,name:"banana",calories:105},
                    {id:4,name:"grapes",calories:23},
                    {id:5,name:"pineapple",calories:54}];

  const Vegetables = [{id:1,name:"carrot",calories:101},
                    {id:2,name:"brinjal",calories:75},
                    {id:3,name:"potato",calories:105},
                    {id:4,name:"cauliflower",calories:83},
                    {id:5,name:"lady's finger",calories:94}];

  return(<>
    {fruits.length>0 ? <List items={fruits} category="Fruits" />: null}
   { Vegetables.length>0 ? <List items={Vegetables} category="Vegetables"  /> : null}
  </>)
}

export default App

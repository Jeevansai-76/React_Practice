
function Button(){

    //const handleClick = () => console.log("OUCH!!");

   // const handleClick1 = (name) => console.log(`${name} stop clicking me!`);
//    let count = 0;

//    const handleClick = (name) => {
//         if(count < 3){
//             count++;
//             console.log(`${name} You clicked me ${count} time's`);
//         }
//         else{
//             console.log(`${name} stop clicking me!!!`);
//         }
//    }

   // return(<button onClick={handleClick}>Click me😂</button>);
   //return(<button onClick={()=>handleClick1("Bro")}>Click me😂</button>);
  // return(<button onClick={()=>handleClick("Bro")}>Click me😂</button>);

  const handleClick = (e) => e.target.textContent = "OUCH!!";
  
  return(<button onDoubleClick={(e)=>handleClick(e)}>Click me😂</button>);
}

export default Button
import { useEffect, useRef} from "react";


function MyComponent(){

    // const number = useRef(0);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(()=>{
        console.log("COMPONENT RENDERED")
    })

    function handleClick1(){
        // number.current++;
        // console.log(number);
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "Yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2(){
        // number.current++;
        // console.log(number);
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "Yellow";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3(){
        // number.current++;
        // console.log(number);
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "Yellow";
    }

    return(<>
        <button onClick={handleClick1}>
            Click me1
        </button>
        <input ref={inputRef1}/> <br/>

        <button onClick={handleClick2}>
            Click me2
        </button>
        <input ref={inputRef2}/><br/>

        <button onClick={handleClick3}>
            Click me3
        </button>
        <input ref={inputRef3}/>
    </>);
}

export default MyComponent
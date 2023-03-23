import { useState } from "react";
import { CounterContext } from "./counterContext";

const StateComponent = ({children}) => {

    const [counter, setCounter] = useState(0);

    const increment = () =>{
        setCounter(counter + 1);
    }

    const decrement = () =>{
        setCounter(counter - 1);
    }

    return (
        <CounterContext.Provider value={{counter, increment, decrement}}>
            {children}
        </CounterContext.Provider>
    )
}

export default StateComponent
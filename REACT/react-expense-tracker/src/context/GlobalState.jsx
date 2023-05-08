import { createContext, useContext, useReducer } from "react";





export const Context = createContext();

export const useGlobalState = ()=>{
    const context = useContext(Context);
    return context;
}


export const GlobalProvider = ({children})=>{

    useState [state, setState] = useReducer(reducer,  [])


    return (
        <Context.Provider 
            value={{
                state,
                setState,
            }}
        >
            {children}
        </Context.Provider>
    )
};

import { createContext, useState } from "react";

const GlobalContext = createContext();

function GlobalProvider({children}) {
    const [cartItems, setCartItems] = useState([])

    return(
        <GlobalContext.Provider value={{cartItems , setCartItems}}>
            {children}
        </GlobalContext.Provider>
    )
}

export {
    GlobalContext,
    GlobalProvider,
}
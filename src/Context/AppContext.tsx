import { createContext, useState } from "react";

export const AppContext = createContext<any>({});

const AppContextContainer = ({children}: {children: any}) => {
    const [addToCart,SetAddToCart] = useState(0);
    return(
        <AppContext.Provider value={{ addToCart,SetAddToCart}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextContainer;
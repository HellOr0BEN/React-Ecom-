import { createContext } from "react";

export const AppContext = createContext<any>({});

const AppContextContainer = ({children}: {children: any}) => {
    return(
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextContainer;
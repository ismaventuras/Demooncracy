import { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    
    const CONVICTION_TIME = {
        'MOOONBASE': '',
        'MOONRIVER': '',
        'MOONBEAM': ''
    }
    const GAS_TOKEN = {
        1284: "GLMR",
        1285: "MOVR",
        1287: "DEV"
    }
    const CHAIN_NAMES = {
        1284: "moonbeam",
        1285: "moonriver",
        1287: "moonbase"
    }

    let value = {
        CONVICTION_TIME, GAS_TOKEN, CHAIN_NAMES
    }

    return (    
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}



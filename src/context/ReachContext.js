import { createContext,useState,useEffect } from "react";
import { loadStdlib,ALGO_MyAlgoConnect as MyAlgoConnect, } from "@reach-sh/stdlib";
import * as backend from '../Reach/build/index.main.mjs';

const reach = loadStdlib('ALGO');

reach.setWalletFallback(
    reach.walletFallBack({
        providerEnv: 'TestNet',
        MyAlgoConnect,
    })
)

export const AppContext = createContext();
const {standardUnit} = reach;
const deadline = {ETH:10,ALGO:100,CFX:1000}[reach.connector];

const AppContextProvider = (children) =>{
    const [defaults,setDefaults] = useState({
        standardUnit,
        defaultAmount,
    })



    const AppContextValue = {

    }

    return(
        <AppContext.Provider value={AppContextValue}>
            {children}
        </AppContext.Provider>
    )

}

export default AppContextProvider;








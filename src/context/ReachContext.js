import { createContext,useState,useEffect } from "react";
import { loadStdlib,ALGO_MyAlgoConnect as MyAlgoConnect} from "@reach-sh/stdlib";
//import * as backend from '../Reach/build/index.main.mjs';

const reach = loadStdlib('ALGO');

reach.setWalletFallback(
    reach.walletFallback({
        providerEnv: "TestNet",
        MyAlgoConnect,
    })
)

export const AppContext = createContext();
const {standardUnit} = reach;
const deadline = {ETH:10,ALGO:100,CFX:1000}[reach.connector];

const AppContextProvider = ({children}) =>{
    const [defaults,setDefaults] = useState({
        standardUnit,
        defaultAmount:10,
    });
    const [amount,setAmount] = useState(defaults.defaultAmount);
    const [player,setPlayer] = useState(null);
    const [account,setAccount] = useState(null);
    const [balance,setBalance] = useState(0);
    const [contract,setContract] = useState(null);
    const [views,setViews] = useState({view:'Welcome',wrapper:'AppWrapper'});
    const [fortune,setFortune] = useState('');
    const [resolveFortune,setResolveFortune] = useState(null);
    const [resolveAcceptAmount,setResolveAcceptAmouont] = useState(null);
    const [resolveAcceptFortune,setResolveAcceptFortune] = useState(null);


    const AppContextValue = {
        defaults,
        setDefaults,
        views,
        setViews,
        amount,
        setAmount,
    }

    useEffect(()=>{
        setViews({view:'Deploy',wrapper:'DeployerWrapper'})
    },[])

    return(
        <AppContext.Provider value={AppContextValue}>
            {children}
        </AppContext.Provider>
    )

}

export default AppContextProvider;








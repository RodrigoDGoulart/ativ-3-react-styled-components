import { createContext, useEffect, useState } from "react";
import { LoteriaContextProps, LoteriaProps } from "../types";
import Loteria from "../services/Loteria";

const Contexto = createContext({} as LoteriaContextProps);

function ContextoProvider({children}: any){
    const [megasena, setMegasena] = useState({} as LoteriaProps);
    const [lotofacil, setLotofacil] = useState({} as LoteriaProps);
    const [quina, setQuina] = useState({} as LoteriaProps); 
  
    useEffect(() => {
      (async () => {
        const resp = await Loteria.get();
        setMegasena(resp.megasena);
        setLotofacil(resp.lotofacil);
        setQuina(resp.quina);
      })();
    }, []);
    return(
      <Contexto.Provider value={{megasena, lotofacil, quina}}>
        {children}
      </Contexto.Provider>
    );
  }

  export {ContextoProvider, Contexto}
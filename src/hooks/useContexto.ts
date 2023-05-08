import { useContext } from "react";
import { Contexto } from "../context/contexto";

function useContexto () {
    const contexto = useContext(Contexto); // retorna {logado, setLogado}
    return contexto;
}

export default useContexto;
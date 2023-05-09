import { useContexto } from "../../hooks";
import { Carregando } from "../../components/Carregando";
import Principal from "../../components/P`rincipal";

export default function Megasena() {
  const { megasena } = useContexto();

  return (
    <>
      {
        megasena.dataApuracao ? <>
          <Principal jogo={megasena} />
        </> :
          <Carregando />
      }
    </>
  )
}
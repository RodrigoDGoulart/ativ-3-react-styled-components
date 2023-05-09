import { useContexto } from "../../hooks";
import { Carregando } from "../../components/Carregando";
import Principal from "../../components/Principal";

export default function Quina() {
  const { quina } = useContexto();

  return (
    <>
      {
        quina.dataApuracao ? <>
          <Principal jogo={quina} />
        </> :
          <Carregando />
      }
    </>
  )
}
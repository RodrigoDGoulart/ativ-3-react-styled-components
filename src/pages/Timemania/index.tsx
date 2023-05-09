import { useContexto } from "../../hooks";
import { Carregando } from "../../components/Carregando";
import Principal from "../../components/Principal";

export default function Timemania() {
  const { timemania } = useContexto();

  return (
    <>
      {
        timemania.dataApuracao ? <>
          <Principal jogo={timemania} />
        </> :
          <Carregando />
      }
    </>
  )
}
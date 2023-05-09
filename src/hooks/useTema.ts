import { useContext } from "react";
import { Tema } from "../context/tema";

export default function useTema () {
  const context = useContext(Tema);
  return context;
}
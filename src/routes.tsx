import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Megasena from "./pages/Megasena";
import Lotofacil from "./pages/Lotofacil";
import Quina from "./pages/Quina";
import Menu from "./components/Menu";

export default function AppRouter () {
    
    return(
        <BrowserRouter>
            <Menu />
            <Routes>
                    <Route path="/" index element={<Navigate to='/lotofacil' replace />} />
                    <Route path='/lotofacil' index element={<Lotofacil />} />
                    <Route path='/megasena' element={<Megasena />} />
                    <Route path='/quina' element={<Quina />} />
            </Routes>
        </BrowserRouter>
    )
}
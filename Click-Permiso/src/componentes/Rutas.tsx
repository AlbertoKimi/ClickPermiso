import { Routes, Route } from "react-router-dom";
import { Formulario } from "./Formulario";
import { Nocturno } from "../pages/nocturno";
import { Perfil } from "../pages/perfil";
import { Ausencia } from "../pages/ausencia";
import { Solicitados } from "../pages/mis-dias";

export const Rutas = () =>(
    <Routes>
        <Route path= "/solicitar-diurno" element= {<Formulario/>}></Route>
        <Route path= "/solicitar-nocturno" element= {<Nocturno/>}></Route>
        <Route path= "/perfil" element= {<Perfil/>}></Route>
        <Route path= "/solicitado" element= {<Solicitados/>}></Route>
        <Route path= "/ausencia" element= {<Ausencia/>}></Route>
    </Routes>
)
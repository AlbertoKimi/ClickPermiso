import { Undo2 } from "lucide-react";
import { Header } from "../componentes/Header";
import { MiPerfil_form } from "../componentes/MiPerfil_form";

export const Perfil = () => (
    <>
        <div className="flex flex-col items-center justify-center min-h-[50vh] gap-10">
            <Header titulo="Mi Perfil" texto={"Volver"} icono={Undo2}></Header>
            <MiPerfil_form></MiPerfil_form>
        </div>
    </>
)


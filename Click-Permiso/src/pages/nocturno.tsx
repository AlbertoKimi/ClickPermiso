import { Formulario } from "../componentes/Formulario";

export const Nocturno = () =>(
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-10">
        <h2 className="text-3xl font-bold text-indigo-400 mb-6 tracking-widest uppercase border-b-2 border-indigo-500/50 pb-2">
            NOCTURNO
        </h2>
        <Formulario></Formulario>
    </div>
)
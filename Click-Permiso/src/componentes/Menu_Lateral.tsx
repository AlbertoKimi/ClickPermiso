import { NavLink } from "react-router-dom";


export const MenuLateral = () => {

    return (
        <aside className="w-64 bg-white border-r-2 border-slate-200 flex flex-col shadow-xl z-20">

            <div className="h-20 flex items-center justify-center border-b-2 border-amber-950 bg-white p-2">
                <img
                    src="/src/assets/Logo.jpg"
                    className="h-full w-auto object-contain"
                />
            </div>

            <nav className="border-t-0 flex flex-col gap-4 p-4 space-y-1 overflow-y-auto">

                <NavLink
                    to="/solicitar-diurno"
                >Sol. dia diurno</NavLink>

                <NavLink
                    to="/solicitar-nocturno"
                > Sol. dia nocturno</NavLink>

                <NavLink
                    to="/perfil"
                > Mi Perfil</NavLink>

                <NavLink
                    to="/solicitado"
                >Mis dias solicitados</NavLink>

                <NavLink
                    to="/ausencia"
                >Mis ausencias</NavLink>


            </nav>

        </aside>
    );
};
import { NavLink } from "react-router-dom";
import { ItemLateral } from "./ItemsLateral";
import { CalendarPlus, Moon, User, CalendarCheck, CalendarX } from "lucide-react";

export const MenuLateral = () => {

    return (
        <aside className="w-64 bg-white border-r-2 border-slate-200 flex flex-col shadow-xl z-20 h-full">

            <div className="h-20 flex items-center justify-center border-b-2 border-slate-100 bg-white p-2">
                <img
                    src="/src/assets/Logo.jpg"
                    className="h-full w-auto object-contain"
                />
            </div>

            <nav className="flex-1 flex flex-col gap-4 p-6 overflow-y-auto">

                <NavLink to="/solicitar-diurno">
                    {({ isActive }: { isActive: boolean }) => (
                        <ItemLateral label="Sol. día diurno" icon={CalendarPlus} active={isActive} onClick={() => { }} />
                    )}
                </NavLink>

                <NavLink to="/solicitar-nocturno">
                    {({ isActive }: { isActive: boolean }) => (
                        <ItemLateral label="Sol. día vespertino" icon={Moon} active={isActive} onClick={() => { }} />
                    )}
                </NavLink>

                <NavLink to="/perfil">
                    {({ isActive }: { isActive: boolean }) => (
                        <ItemLateral label="Mi Perfil" icon={User} active={isActive} onClick={() => { }} />
                    )}
                </NavLink>

                <NavLink to="/solicitado">
                    {({ isActive }: { isActive: boolean }) => (
                        <ItemLateral label="Mis días Solicitados" icon={CalendarCheck} active={isActive} onClick={() => { }} />
                    )}
                </NavLink>

                <NavLink to="/ausencia">
                    {({ isActive }: { isActive: boolean }) => (
                        <ItemLateral label="Mis ausencias" icon={CalendarX} active={isActive} onClick={() => { }} />
                    )}
                </NavLink>

            </nav>

        </aside>
    );
};
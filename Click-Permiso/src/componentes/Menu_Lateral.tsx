import { Map, Users, Calendar, UserCog } from 'lucide-react';
import { ItemLateral } from './ItemsLateral';
import { useState } from 'react';

export const MenuLateral = () => {
    const [seccionActiva, setSeccionActiva] = useState('mi-perfil');

    return (
        <aside className="w-64 bg-white border-r-2 border-slate-200 flex flex-col shadow-xl z-20">

            <div className="h-20 flex items-center justify-center border-b-2 border-amber-950 bg-white p-2">
                <img
                    src="/src/assets/Logo.jpg"
                    className="h-full w-auto object-contain"
                />
            </div>

            <nav className="border-t-0 flex flex-col gap-4 p-4 space-y-1 overflow-y-auto">

                <ItemLateral
                    icon={Map}
                    label="Sol. Día Diurno"
                    active={seccionActiva === 'dia-diurno'}
                    onClick={() => setSeccionActiva('dia-diurno')}
                />

                <ItemLateral
                    icon={Map}
                    label="Sol. Día Diurno"
                    active={seccionActiva === 'sol-diurno'}
                    onClick={() => setSeccionActiva('sol-diurno')}
                />

                <ItemLateral
                    icon={Users}
                    label="Sol. Día Vespertino"
                    active={seccionActiva === 'sol-vespertino'}
                    onClick={() => setSeccionActiva('sol-vespertino')}
                />

                <ItemLateral
                    icon={Calendar}
                    label="Mi Perfil"
                    active={seccionActiva === 'mi-perfil'}
                    onClick={() => setSeccionActiva('mi-perfil')}
                />

                <ItemLateral
                    icon={UserCog}
                    label="Mis Días Solicitados"
                    active={seccionActiva === 'dias-solicitados'}
                    onClick={() => setSeccionActiva('dias-solicitados')}
                />

                <ItemLateral
                    icon={UserCog}
                    label="Mis Ausencias"
                    active={seccionActiva === 'ausencias'}
                    onClick={() => setSeccionActiva('ausencias')}
                />

            </nav>

        </aside>
    );
};
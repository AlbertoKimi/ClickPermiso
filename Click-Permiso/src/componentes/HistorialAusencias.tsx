import { Calendar, CornerUpLeft, FileText } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export const HistorialAusencias = () => {
    return (
        <div className="bg-white rounded-lg shadow-sm w-full mx-auto border border-gray-100 p-6">

            <div className="flex justify-between items-center mb-6 border-b pb-4 border-gray-100">
                <div className="flex items-center gap-2 text-slate-800">
                    <Calendar className="h-5 w-5 text-slate-600" />
                    <h2 className="text-lg font-bold">Historial de Ausencias Justificadas</h2>
                </div>

                <NavLink to="/perfil" className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors">
                    <CornerUpLeft className="h-4 w-4" />
                    Volver
                </NavLink>
            </div>

            <div className="grid grid-cols-6 text-sm text-slate-500 font-medium py-3 border-b border-gray-100 text-center bg-slate-50/50 rounded-t-lg">
                <div className="col-span-1">Período ausencia</div>
                <div className="col-span-1">Estado</div>
                <div className="col-span-1">Última Modificación</div>
                <div className="col-span-1">Anexo V</div>
                <div className="col-span-1">Adjuntos</div>
                <div className="col-span-1">Acciones</div>
            </div>

            <div className="grid grid-cols-6 items-center text-sm py-4 border-b border-gray-50 hover:bg-slate-50 transition-colors text-center">
                <div className="col-span-1 font-medium text-slate-800">
                    14/01/2026 al 15/01/2026
                </div>
                <div className="col-span-1 text-slate-600">
                    Pendiente de Justificación
                </div>
                <div className="col-span-1 text-slate-500 text-xs">
                    15/01/2026 23:30
                </div>

                <div className="col-span-1 flex justify-center">
                    <span className="text-red-500 font-bold text-lg select-none">✗</span>
                </div>

                <div className="col-span-1 flex justify-center">
                    <span className="text-red-500 font-bold text-lg select-none">✗</span>
                </div>

                <div className="col-span-1 flex justify-center">
                    <button className="flex items-center gap-1.5 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-md text-xs font-medium hover:bg-blue-100 transition-colors">
                        <FileText className="h-3.5 w-3.5" />
                        Justificar día
                    </button>
                </div>
            </div>

            <div className="h-4"></div>

        </div>
    );
};

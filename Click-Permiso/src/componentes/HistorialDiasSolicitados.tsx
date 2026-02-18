import { Calendar } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabaseClient';

interface DiaSolicitado {
    id: string;
    DiaSolicitado: string;
    jornada: string;
    turno: string;
    horas_afectadas: number;
    telefono: number;
}

export const HistorialDiasSolicitados = () => {
    const [dias, setDias] = useState<DiaSolicitado[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDias = async () => {
            try {
                const { data, error } = await supabase
                    .from('DiaSolicitado')
                    .select('*')
                    .order('DiaSolicitado', { ascending: false });

                if (error) {
                    console.error('Error fetching dias:', error);
                } else {
                    setDias(data || []);
                }
            } catch (error) {
                console.error('Error:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDias();
    }, []);

    if (loading) {
        return <div className="p-6 text-center text-slate-500">Cargando historial...</div>;
    }

    return (
        <div className="bg-white rounded-lg shadow-sm w-full mx-auto border border-gray-100 p-6">
            <div className="flex justify-between items-center mb-6 border-b pb-4 border-gray-100">
                <div className="flex items-center gap-2 text-slate-800">
                    <Calendar className="h-5 w-5 text-slate-600" />
                    <h2 className="text-lg font-bold">Historial de Días Solicitados</h2>
                </div>
            </div>

            <div className="grid grid-cols-4 text-sm text-slate-500 font-medium py-3 border-b border-gray-100 text-center bg-slate-50/50 rounded-t-lg">
                <div className="col-span-1">Fecha Solicitada</div>
                <div className="col-span-1">Jornada</div>
                <div className="col-span-1">Turno</div>
                <div className="col-span-1">Horas Afectadas</div>
            </div>

            {dias.length === 0 ? (
                <div className="p-8 text-center text-slate-500">
                    No hay días solicitados registrados.
                </div>
            ) : (
                dias.map((dia) => (
                    <div key={dia.id} className="grid grid-cols-4 items-center text-sm py-4 border-b border-gray-50 hover:bg-slate-50 transition-colors text-center">
                        <div className="col-span-1 font-medium text-slate-800">
                            {new Date(dia.DiaSolicitado).toLocaleDateString()}
                        </div>
                        <div className="col-span-1 text-slate-600">
                            {dia.jornada}
                        </div>
                        <div className="col-span-1 text-slate-600">
                            {dia.turno}
                        </div>
                        <div className="col-span-1 text-slate-600">
                            {dia.horas_afectadas}
                        </div>
                    </div>
                ))
            )}

            <div className="h-4"></div>
        </div>
    );
};

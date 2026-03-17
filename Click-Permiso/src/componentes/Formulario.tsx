import { Undo2 } from "lucide-react"
import { Header } from "./Header"
import { ItemsForm } from "./ItemsForm"
import { ItemsCheck } from "./ItemsCheck"
import { useState } from "react"
import { Boton } from "./Boton"
import { ItemsSelect } from "./ItemsSelect"
import { supabase } from "../utils/supabaseClient"

export const Formulario = () => {

    const [formData, setFormData] = useState({
        solicitado: '',
        telefono: '',
        jornada: '',
        turno: '',
        numHoras: '',
        numDias: '',
        permisoR: false
    });

    const [enviando, setEnviando] = useState(false);
    const [exito, setExito] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const opcionesJornada = [
        { value: "completa", label: "Completa" },
        { value: "parcial", label: "Parcial" }
    ];

    const opcionesTurno = [
        { value: "diurno", label: "Diurno" },
        { value: "vespertino", label: "Vespertino" }
    ];

    const manejarCambio = (e: any) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({
            ...formData,
            [e.target.name]: value
        });
    };

    // Convierte dd/mm/yyyy → yyyy-mm-dd (formato que acepta Supabase)
    const convertirFecha = (fecha: string): string => {
        const partes = fecha.split('/');
        if (partes.length !== 3) return fecha;
        const [dia, mes, anio] = partes;
        return `${anio}-${mes}-${dia}`;
    };

    const manejarEnvio = async (e: any) => {
        e.preventDefault();
        setEnviando(true);
        setErrorMsg('');
        setExito(false);

        try {
            const { error } = await supabase
                .from('DiaSolicitado')
                .insert([{
                    DiaSolicitado: convertirFecha(formData.solicitado),
                    telefono: Number(formData.telefono),
                    jornada: formData.jornada,
                    turno: formData.turno,
                    horas_afectadas: Number(formData.numHoras),
                    dias_solicitados: Number(formData.numDias),
                }]);

            if (error) {
                console.error('Error al insertar:', error);
                setErrorMsg(`Error: ${error.message}`);
            } else {
                setExito(true);
                // Limpiamos el formulario
                setFormData({
                    solicitado: '',
                    telefono: '',
                    jornada: '',
                    turno: '',
                    numHoras: '',
                    numDias: '',
                    permisoR: false
                });
            }
        } catch (err) {
            console.error('Error inesperado:', err);
            setErrorMsg('Error inesperado al enviar el formulario.');
        } finally {
            setEnviando(false);
        }
    };

    const manejarCancelar = () => {
        setFormData({
            solicitado: '',
            telefono: '',
            jornada: '',
            turno: '',
            numHoras: '',
            numDias: '',
            permisoR: false
        });
        setExito(false);
        setErrorMsg('');
    };

    return (
        <div className=" bg-gray-50 p-6 flex flex-col justify-center">
            <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-sm">
                <Header titulo={`Día Solicitado: ${formData.solicitado}`} texto="Volver" icono={Undo2} estiloExtra="border-b-2 border-gray-100 mb-6 py-6"></Header>

                {exito && (
                    <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-lg border border-green-200">
                        ✅ Solicitud guardada correctamente.
                    </div>
                )}
                {errorMsg && (
                    <div className="mb-4 p-3 bg-red-100 text-red-800 rounded-lg border border-red-200">
                        ❌ {errorMsg}
                    </div>
                )}

                <form className="flex flex-col gap-6" onSubmit={manejarEnvio}>
                    <div className="grid grid-cols-2 gap-6">
                        <ItemsForm
                            label="Día Solicitado"
                            input="text"
                            placeholder="ej: 21/01/2026"
                            name={"solicitado"}
                            value={formData.solicitado}
                            onChange={manejarCambio}
                            regex={/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/}
                            error={"No tiene el formato dd/mm/yyyy"}>
                        </ItemsForm>

                        <ItemsForm
                            label="Número de Teléfono"
                            input="tel"
                            placeholder="ej:634890001"
                            name={"telefono"}
                            value={formData.telefono}
                            onChange={manejarCambio}
                            regex={/^[6-9]\d{8}$/}
                            error={"Debe empezar por 6, 7, 8 o 9 y tener 9 dígitos"}>
                        </ItemsForm>

                        <ItemsSelect
                            label="Jornada"
                            name="jornada"
                            value={formData.jornada}
                            options={opcionesJornada}
                            placeholder="-- Elige tu jornada --"
                            onChange={manejarCambio}
                            required={true}
                            error="Selecciona el tipo de jornada"
                        />

                        <ItemsSelect
                            label="Turno Solicitado"
                            name="turno"
                            value={formData.turno}
                            options={opcionesTurno}
                            placeholder="-- Elige tu turno --"
                            onChange={manejarCambio}
                            required={true}
                            error="Selecciona el turno"
                        />
                        <ItemsForm
                            label="Núm de horas de docencia directa y guardias afectadas"
                            input="number"
                            placeholder="0"
                            name={"numHoras"}
                            value={formData.numHoras}
                            onChange={manejarCambio}
                            regex={/^[1-7]$/}
                            error={""}>
                        </ItemsForm>

                        <ItemsForm
                            label="Núm de días de permisos solicitados en el centro"
                            input="number"
                            placeholder="0"
                            name={"numDias"}
                            value={formData.numDias}
                            onChange={manejarCambio}
                            regex={/^[1-7]$/}
                            error={""}>
                        </ItemsForm>
                    </div>

                    <div className="mt-4">
                        <ItemsCheck
                            label="Estoy solicitando un día de permiso no retribuido"
                            name={"permisoR"}
                            checked={Boolean(formData.permisoR)}
                            onChange={manejarCambio}>
                        </ItemsCheck>
                    </div>

                    <div className="flex justify-end gap-4 mt-6">
                        <Boton
                            texto="Cancelar"
                            className="bg-gray-200 text-gray-700 hover:bg-gray-300"
                            onClick={manejarCancelar}>
                        </Boton>
                        <Boton
                            texto={enviando ? "Guardando..." : "Guardar Solicitud"}
                            className="bg-blue-800 text-white hover:bg-blue-900"
                            type="submit">
                        </Boton>
                    </div>
                </form>
            </div>
        </div>
    )
}
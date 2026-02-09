import { Undo2 } from "lucide-react"
import { Header } from "./Header"
import { ItemsForm } from "./ItemsForm"
import { ItemsCheck } from "./ItemsCheck"
import { useState } from "react"
import { Boton } from "./Boton"
import { ItemsSelect } from "./ItemsSelect"

export const Formulario = () => {
    const [formData, setFormData] = useState({
        solicitado: '',
        telefono: '',
        jornada: '',
        turno: '',
        numHoras: '',
        numDias: '',
        permisoR: ''
    });

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

    const manejarEnvio = (e: any) => {
        e.preventDefault();
        console.log("Datos enviados:", formData);
        alert("Formulario enviado con éxito");
    };

    return (
        <div className=" bg-gray-50 p-6 flex flex-col justify-center">
            <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-sm">
                <Header titulo={`Día Solicitado: ${formData.solicitado}`} texto="Volver" icono={Undo2} estiloExtra="border-b-2 border-gray-100 mb-6 py-6"></Header>
                <form className="flex flex-col gap-6">
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
                            checked={false}
                            onChange={manejarCambio}>
                        </ItemsCheck>
                    </div>

                    <div className="flex justify-end gap-4 mt-6">
                        <Boton texto="Cancelar" className="bg-gray-200 text-gray-700 hover:bg-gray-300" onClick={() => manejarEnvio}></Boton>
                        <Boton texto="Guardar Solicitud" className="bg-blue-800 text-white hover:bg-blue-900" onClick={() => manejarEnvio}></Boton>
                    </div>
                </form>
            </div>
        </div>
    )
}
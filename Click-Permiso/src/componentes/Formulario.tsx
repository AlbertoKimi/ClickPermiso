import { Undo2 } from "lucide-react"
import { Header } from "./Header"
import { ItemsForm } from "./ItemsForm"
import { ItemsCheck } from "./ItemsCheck"
import { useState } from "react"
import { Boton } from "./Boton"

export const Formulario = () => {
    const [activa, setActiva] = useState(false)

    return (
        <div className="flex-1 bg-gray-50 p-6 flex flex-col justify-center">
            <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-sm">
                <Header titulo="Solicitar Día: 21 de enero de 2026" texto="Volver" icono={Undo2} estiloExtra="border-b-2 border-gray-100 mb-6 py-6"></Header>
                <form className="flex flex-col gap-6">
                    <div className="grid grid-cols-2 gap-6">
                        <ItemsForm label="Día Solicitado" input="text" placeholder="21/01/2026"></ItemsForm>
                        <ItemsForm label="Número de Teléfono" input="tel" placeholder=""></ItemsForm>
                        <ItemsForm label="Jornada" input="select" placeholder="--------"></ItemsForm>
                        <ItemsForm label="Turno Solicitado" input="select" placeholder="Diurno"></ItemsForm>
                        <ItemsForm label="Núm de horas de docencia directa y guardias afectadas" input="number" placeholder="0"></ItemsForm>
                        <ItemsForm label="Núm de días de permisos solicitados en el centro" input="number" placeholder="0"></ItemsForm>
                    </div>

                    <div className="mt-4">
                        <ItemsCheck label="Estoy solicitando un día de permiso no retribuido"></ItemsCheck>
                        <ItemsCheck label="¿Causa sobrevenida?"></ItemsCheck>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Justificación de la causa sobrevenida</label>
                        <textarea rows={4} className="w-full border-gray-300 rounded-md shadow-sm p-3 text-gray-700 focus:border-blue-500 focus:ring-blue-500 resize-none"></textarea>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Documento Justificativo en PDF</label>
                        <input type="file" className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                    </div>

                    <div className="flex justify-end gap-4 mt-6">
                        <Boton texto="Cancelar" className="bg-gray-200 text-gray-700 hover:bg-gray-300" onClick={() => setActiva(activa)}></Boton>
                        <Boton texto="Guardar Solicitud" className="bg-blue-800 text-white hover:bg-blue-900" onClick={() => setActiva(activa)}></Boton>
                    </div>
                </form>
            </div>
        </div>
    )
}
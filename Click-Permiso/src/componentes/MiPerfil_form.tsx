import { Undo2, User, Mail, CreditCard, Briefcase, Calendar, UserPen } from "lucide-react"
import { Header } from "./Header"
import { ItemsForm } from "./ItemsForm"
import { ItemsCheck } from "./ItemsCheck"
import { useState } from "react"
import { Boton } from "./Boton"
import { ItemsSelect } from "./ItemsSelect"

export const MiPerfil_form = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        email: '',
        DNI: '',
        juridica: '',
        anioServ: '',
        sustitucion: ''
    });

    const rJuridica = [
        { value: "otro", label: "Otro" },
        { value: "indefinido", label: "Indefinido" },
        { value: "temporal", label: "Temporal" }
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
        <div className="flex flex-col h-full w-full">
            <Header
                titulo={"Editar Mi Perfil"}
                texto="Volver"
                icono={Undo2}
                tituloIcono={UserPen}
                estiloExtra="border-b border-gray-100 mb-6 py-4 h-auto"
            ></Header>
            <form className="flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-6">
                    <ItemsForm
                        label="Nombre"
                        input="text"
                        placeholder="ej: Borja"
                        name={"nombre"}
                        value={formData.nombre}
                        onChange={manejarCambio}
                        regex={/^[A-Z][a-zA-Z\s]*$/}
                        error={"El nombre debe comenzar por mayúscula y contener solo letras"}

                    >

                    </ItemsForm>

                    <ItemsForm
                        label="Apellidos"
                        input="text"
                        placeholder="ej: Martínez"
                        name={"apellidos"}
                        value={formData.apellidos}
                        onChange={manejarCambio}
                        regex={/^[A-Z][a-zA-Z\s]*\s[A-Z][a-zA-Z\s]*$/}
                        error={"Debe de haber 2 apellidos y comenzar por mayúscula los dos"}

                    >

                    </ItemsForm>

                    <ItemsForm
                        label="Correo Electrónico"
                        input="email"
                        placeholder="ej: borja@ies.com"
                        name={"email"}
                        value={formData.email}
                        onChange={manejarCambio}
                        regex={/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/}
                        error={"El correo electrónico no es válido"}

                    >
                    </ItemsForm>

                    <ItemsForm
                        label="DNI"
                        input="text"
                        placeholder="ej: 12345678A"
                        name={"DNI"}
                        value={formData.DNI}
                        onChange={manejarCambio}
                        regex={/^[0-9]{8}[A-Za-z]$/}
                        error={"El DNI no es válido"}

                    >

                    </ItemsForm>

                    <ItemsSelect
                        label="Relación Jurídica"
                        name={"juridica"}
                        value={formData.juridica}
                        options={rJuridica}
                        placeholder="-- Elige tu relación jurídica --"
                        onChange={manejarCambio}
                        required={true}
                        error="Selecciona la relación jurídica"

                    >
                    </ItemsSelect>

                    <ItemsForm
                        label="Años de Servicio"
                        input="number"
                        placeholder="Ej:30"
                        name={"anioServ"}
                        value={formData.anioServ}
                        onChange={manejarCambio}
                        regex={/^([0-9]|[1-4][0-9])$/}
                        error={"El número de años debe estar entre 1 y 49"}

                    >
                    </ItemsForm>

                </div>

                <div className="mt-4">
                    <ItemsCheck
                        label="Hace sustitución de otro docente"
                        name={"sustitucion"}
                        checked={false}
                        onChange={manejarCambio}>
                    </ItemsCheck>
                </div>

                <div className="flex justify-end gap-4 mt-6">
                    <Boton texto="Cancelar" className="bg-gray-200 text-gray-700 hover:bg-gray-300" onClick={() => manejarEnvio}></Boton>
                    <Boton texto="Guardar Cambios" className="bg-blue-800 text-white hover:bg-blue-900" onClick={() => manejarEnvio}></Boton>
                </div>
            </form>
        </div>
    )
}
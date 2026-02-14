import { type LucideIcon } from "lucide-react"

interface HeaderProps {
    titulo: string,
    texto: string
    icono: LucideIcon,
    estiloExtra?: string
}

export const Header = ({ titulo, texto, icono: Icono, estiloExtra }: HeaderProps) => {
    return (
        <header className={`flex items-center justify-between px-6 bg-white h-20 border-b-2 border-slate-100 ${estiloExtra}`}>
            <h1 className="text-xl font-bold text-gray-900">
                {titulo}
            </h1>
            <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium">
                <Icono className="h-5 w-5" />
                {texto}
            </button>
        </header>
    )
}
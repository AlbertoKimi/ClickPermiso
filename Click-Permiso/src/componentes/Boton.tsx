interface BotonProps {
    onClick?: () => void,
    texto: string,
    className?: string,
    type?: "button" | "submit" | "reset"
}

export const Boton = ({onClick, texto, className="", type="button"}: BotonProps) => {
  return (
    <button type={type} onClick={onClick} className={`px-4 py-2 rounded-md text-sm font-medium ${className}`}>{texto}</button>
  )
}
interface BotonProps {
    onClick: () => void,
    texto: string,
    className?: string
}

export const Boton = ({onClick, texto, className=""}: BotonProps) => {
  return (
    <button onClick={onClick} className={`px-4 py-2 rounded-md text-sm font-medium ${className}`}>{texto}</button>
  )
}
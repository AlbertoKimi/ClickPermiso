import { useState } from "react"

interface ItemsFormProps {
  label: string,
  input: string,
  name: string,
  value: string,
  placeholder: string,
  onChange: (valorInput: string) => void,
  regex: RegExp,
  error: string
}

export const ItemsForm = ({ label, input, name, value, placeholder, onChange, regex, error }: ItemsFormProps) => {

  const [smError, setsmError] = useState(false)

  const handleBlur = () => {
    if (regex) {
      if (!regex.test(value)) {
        setsmError(true);
      } else {
        setsmError(false);
      }
    }
  };

  const handleChangeInternal = (e: any) => {
    setsmError(false);
    onChange(e); // Propagamos el evento al padre
  };

  return (
    <div className="grupo-input">
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <input
        type={input}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChangeInternal}
        onBlur={handleBlur}
        className={error ? 'input-error' : "w-full border-gray-300 rounded-md shadow-sm p-3 text-gray-700 focus:border-blue-500 focus:ring-blue-500"}
      />
      {/* Renderizado condicional del error */}
      {smError && <span className="mensaje-error">{error}</span>}
    </div>

  )
}






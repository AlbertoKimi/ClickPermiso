// ... imports
import { type LucideIcon } from "lucide-react"
import { useState } from "react";

interface ItemsFormProps {
  label: string,
  input: string,
  name: string,
  value: string,
  placeholder: string,
  onChange: (valorInput: any) => void,
  regex?: RegExp,
  error: string,
  icon?: LucideIcon
}

export const ItemsForm = ({ label, input, name, value, placeholder, onChange, regex, error, icon: Icon }: ItemsFormProps) => {

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
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" />
          </div>
        )}
        <input
          type={input}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={handleChangeInternal}
          onBlur={handleBlur}
          className={`${error && smError ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"} w-full rounded-md shadow-sm p-3 text-gray-700 ${Icon ? 'pl-10' : ''}`}
        />
      </div>
      {/* Renderizado condicional del error */}
      {smError && <span className="mensaje-error text-red-500 text-sm mt-1">{error}</span>}
    </div>

  )
}






import { useState } from "react"
import { type LucideIcon } from "lucide-react"

interface Option {
    value: string
    label: string
}

interface ItemsSelectProps {
    label: string
    name: string
    value: string
    options: Option[]
    placeholder?: string
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    error?: string
    required?: boolean
    icon?: LucideIcon
}

export const ItemsSelect = ({ label, name, value, options, placeholder, onChange, error, required, icon: Icon }: ItemsSelectProps) => {

    const [smError, setSmError] = useState(false)

    const handleBlur = () => {

        if (required && value === "") {
            setSmError(true);
        } else {
            setSmError(false);
        }
    };

    const handleChangeInternal = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSmError(false);
        onChange(e);
    };

    const baseClasses = "w-full border-gray-300 rounded-md shadow-sm p-3 text-gray-700 focus:border-blue-500 focus:ring-blue-500 bg-white"
    const errorClasses = "w-full border-red-500 rounded-md shadow-sm p-3 text-red-900 focus:border-red-500 focus:ring-red-500 bg-white"

    return (
        <div className="grupo-input mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>

            <div className="relative">
                {Icon && (
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Icon className="h-5 w-5 text-gray-400" />
                    </div>
                )}
                <select
                    name={name}
                    value={value}
                    onChange={handleChangeInternal}
                    onBlur={handleBlur}
                    className={`${smError ? errorClasses : baseClasses} ${Icon ? 'pl-10' : ''}`}
                >
                    <option value="" disabled>
                        {placeholder || "-- Seleccionar --"}
                    </option>

                    {options.map((op) => (
                        <option key={op.value} value={op.value}>
                            {op.label}
                        </option>
                    ))}
                </select>
            </div>

            {smError && error && (
                <span className="text-xs text-red-500 mt-1 block">{error}</span>
            )}
        </div>
    )
}
import { useState } from "react"

interface ItemsCheckProps {
    label: string
    name: string
    checked: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    error?: string 
    required?: boolean
}

export const ItemsCheck = ({ label, name, checked, onChange, error, required }: ItemsCheckProps) => {
    
    const [smError, setSmError] = useState(false)

    const handleBlur = () => {
        if (required && !checked) {
            setSmError(true);
        } else {
            setSmError(false);
        }
    };

    const handleChangeInternal = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSmError(false); 
        onChange(e);   
    };

    return (
        <div className="flex flex-col my-4">
            <div className="flex items-start gap-3">
                <input 
                    type="checkbox" 
                    name={name}
                    checked={checked}
                    onChange={handleChangeInternal}
                    onBlur={handleBlur}
                    className={`h-4 w-4 rounded mt-1 focus:ring-blue-500 ${
                        smError 
                        ? "border-red-500 text-red-600 focus:ring-red-500" 
                        : "border-gray-300 text-blue-600"
                    }`}
                />
                <label className={`text-sm font-medium ${smError ? "text-red-700" : "text-gray-700"}`}>
                    {label}
                </label>
            </div>
            
            {smError && error && (
                <span className="text-xs text-red-500 mt-1 ml-7">{error}</span>
            )}
        </div>
    )
}
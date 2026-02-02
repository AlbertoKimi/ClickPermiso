interface ItemsFormProps {
    label: string,
    input: string,
    placeholder: string
}

export const ItemsForm=({ label, input, placeholder }: ItemsFormProps) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
            <input 
                type={input}        
                placeholder={placeholder}
                className="w-full border-gray-300 rounded-md shadow-sm p-3 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
            />
        </div>
    )
}      
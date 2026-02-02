interface ItemsCheck {
    label: string
}

export const ItemsCheck = ({ label }: ItemsCheck) => {
    return (
        <div className="flex items-start gap-3 my-4">
            <input type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"></input>
            <label className="text-sm font-medium text-gray-700">{label}</label>
        </div>
    )
}
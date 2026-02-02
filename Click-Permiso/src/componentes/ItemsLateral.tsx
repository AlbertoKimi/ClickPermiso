import {type LucideIcon } from 'lucide-react';

interface ItemsProps {
    onClick: () => void,
    icon: LucideIcon,
    active: boolean,
    label: string,
  
}

export const ItemLateral = ({ onClick, icon:Icon, active,label }:ItemsProps) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${active
        ? 'bg-blue-50 text-blue-700 shadow-sm'
        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
      }`}
  >
    <Icon className={`w-5 h-5 ${active ? 'text-blue-600' : 'text-slate-400'}`} />
    {label}
  </button>
);
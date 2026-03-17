import { LogOut } from "lucide-react"
import { Header } from "../componentes/Header"
import { MenuLateral } from "../componentes/Menu_Lateral"
import { useAuthStore } from "../store/AuthStore"
import { supabase } from "../utils/supabaseClient"
import { Outlet } from "react-router-dom"


export const Dashboard = () => {
  const signOut = useAuthStore((state: any) => state.signOut)
  
  const handleLogout = async () => {
    await supabase.auth.signOut()
    signOut()
  }

  return (
<div className="flex h-screen bg-slate-100 w-full">
      <MenuLateral />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header
          titulo={"I.E.S Albarregas"}
          texto={"Hola, Prof. Borja"}
          icono={LogOut}
          estiloExtra="h-20 border-b-2 border-slate-200"
        signOut={handleLogout}
        />
        <main className="flex-1 overflow-y-auto p-10">

          <div className="flex justify-center items-center bg-white rounded-3xl h-full shadow-sm p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
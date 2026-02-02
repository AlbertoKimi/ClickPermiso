
import { LogOut } from 'lucide-react'
import './App.css'
import { Header } from './componentes/Header'
import { MenuLateral } from './componentes/Menu_Lateral'
import { Formulario } from './componentes/Formulario'

function App() {

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <MenuLateral></MenuLateral>
      <div className="flex flex-col flex-1">
        <Header titulo="I.E.S. ALBARREGAS" texto="Hola, Prof.Borja" icono={LogOut} estiloExtra='h-20 border-b-2 border-amber-950'></Header>
        <main className=" p-8 h-full flex flex-col justify-center items-center gap-4 bg-white m-4 rounded-lg shadow-lg">

          <Formulario></Formulario>

        </main>
      </div>
    </div>
  )
}

export default App

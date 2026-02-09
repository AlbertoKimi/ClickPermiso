import { Header } from "./componentes/Header";
import { MenuLateral } from "./componentes/Menu_Lateral"; 
import { Rutas } from "./componentes/Rutas"; 
import { LogOut } from 'lucide-react';

function App() {
  return (
    <div className="flex flex-col h-screen bg-slate-100 w-full">
      <Header 
        titulo={"I.E.S Albarregas"} 
        texto={"Hola, Prof. Borja"} 
        icono={LogOut}
      />
      <div className="flex flex-1 overflow-hidden">
        
        <MenuLateral />
    
        <main className="flex-1 overflow-y-auto p-10">

           <div className="flex justify-center items-center bg-white rounded-3xl h-full shadow-sm p-8">
               <Rutas />
           </div>
        </main>

      </div>
    </div>
  );
}

export default App;
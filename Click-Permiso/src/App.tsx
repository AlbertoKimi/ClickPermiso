import { MenuLateral } from "./componentes/Menu_Lateral"; 
import { Rutas } from "./componentes/Rutas"; 

function App() {
  return (
    <div className="flex h-screen bg-slate-100 w-full">
      <MenuLateral />
      <div className="flex-1 h-full overflow-y-auto p-10">
        <Rutas />
        
      </div>
    </div>
  );
}

export default App;


import { useAuthStore } from "./store/AuthStore";
import { useEffect } from "react";
import { supabase } from "./utils/supabaseClient";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./componentes/FormularioSesion";
import { ProtectedRoute } from "./componentes/ProtectedRoute";
import { Dashboard } from "./pages/inicioSesion";
import { Diurno } from "./pages/diurno";
import { Nocturno } from "./pages/nocturno";
import { Perfil } from "./pages/perfil";
import { Solicitados } from "./pages/mis-dias";
import { Ausencia } from "./pages/ausencia";


function App() {

  const setSession = useAuthStore((state: any) => state.setSession)

  useEffect(() => {
    // 1. Obtener sesión inicial
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    // 2. Escuchar cambios (login, logout, token refresh) en tiempo real
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [setSession])

  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta Pública */}
        <Route path="/login" element={<Login />} />

        {/* Rutas Protegidas - Dashboard actúa como Layout (menú + header) */}
        <Route element={<ProtectedRoute />}>
          <Route element={<Dashboard />}>
            {/* Redirige la raíz del área privada a /solicitar-diurno */}
            <Route path="dashboard" element={<Navigate to="/solicitar-diurno" replace />} />
            <Route path="/solicitar-diurno" element={<Diurno />} />
            <Route path="/solicitar-nocturno" element={<Nocturno />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/solicitado" element={<Solicitados />} />
            <Route path="/ausencia" element={<Ausencia />} />
          </Route>
        </Route>

        {/* Redirección por defecto */}
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
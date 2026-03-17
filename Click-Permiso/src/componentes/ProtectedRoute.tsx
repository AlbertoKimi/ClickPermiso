// src/components/ProtectedRoute.jsx
import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStore } from '../store/AuthStore'

export const ProtectedRoute = () => {
  const { session, loading } = useAuthStore() as { session: any; loading: boolean } //tenemos que poner el tipo any porque no hemos definido un tipo específico para la sesión en el store

  // 1. Si aún estamos verificando la sesión con Supabase, mostramos un loader
  if (loading) return <div>Cargando autenticación...</div>

  // 2. Si no hay sesión, redirigimos al Login
  if (!session) return <Navigate to="/login" replace />

  // 3. Si hay sesión, renderizamos el contenido de la ruta (Outlet)
  return <Outlet />
}
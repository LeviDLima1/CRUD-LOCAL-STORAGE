import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    // Verifica se o usuário está autenticado
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    // Se não estiver autenticado, redireciona para a página de login
    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    // Se estiver autenticado, renderiza a rota desejada (neste caso, a Home)
    return <Outlet />;
};

export default PrivateRoute;
import { Route, Routes } from 'react-router-dom';
import Login from "./Pages/login.jsx"
import Register from "./Pages/register.jsx"
import Home from "./Pages/Home/home.jsx"
import PrivateRoute from './privateRoute'; // Importando o componente PrivateRoute
import FuncionarioTabela from "./Pages/funcionarios.jsx";
import EditEmployee from "./Pages/editFuncionario.jsx";
function MainRoutes() {

    return (
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                {/* Protege a rota da Home */}
                <Route element={<PrivateRoute />}>
                    <Route path="/home" element={<Home />} />
                </Route>
                <Route path="/funcionarios" element={<FuncionarioTabela />} />
                <Route path="/edit-employee" element={<EditEmployee />} />
            </Routes>
    )
}



export default MainRoutes;
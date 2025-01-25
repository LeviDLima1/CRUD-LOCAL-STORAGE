import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Home/components/header';

export default function EmployeeList() {
    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Recupera os funcionários cadastrados do localStorage
        const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        setEmployees(storedEmployees);
    }, []);

    const handleDelete = (email) => {
        // Filtra o funcionário a ser removido
        const updatedEmployees = employees.filter(employee => employee.email !== email);
        setEmployees(updatedEmployees);

        // Atualiza o localStorage com a lista de funcionários atualizada
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    };

    const handleEdit = (employee) => {
        // Redireciona para a página de edição, passando os dados do funcionário
        navigate('/edit-employee', { state: { employee } });
    };

    return (
        <>
        <Header />
            
            <div className="bg-gray-50 dark:bg-gray-900 p-6 h-screen flex items-center">
                <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <h2 className="text-2xl text-center font-bold text-gray-900 dark:text-white mb-6">Lista de Funcionários</h2>
                    {employees.length === 0 ? (
                        <p className="text-gray-500 dark:text-gray-300">Nenhum funcionário cadastrado.</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {employees.map((employee, index) => (
                                <div key={index} className="bg-white p-4 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                                    <h3 className="font-semibold text-gray-900 dark:text-white">{employee.name}</h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-300">E-mail: {employee.email}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-300">Cargo: {employee.position}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-300">Telefone: {employee.phone}</p>
                                    <div className="mt-4 flex justify-between">
                                        <button
                                            onClick={() => handleEdit(employee)}
                                            className="text-blue-500 hover:text-blue-700 cursor-pointer"
                                        >
                                            Editar
                                        </button>
                                        <button
                                            onClick={() => handleDelete(employee.email)}
                                            className="text-red-500 hover:text-red-700 cursor-pointer"
                                        >
                                            Excluir
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

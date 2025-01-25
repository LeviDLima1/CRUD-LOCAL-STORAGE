import React, { useState } from 'react';

export default function Body() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [position, setPosition] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !position || !phone) {
            setError('Todos os campos são obrigatórios!');
            return;
        }

        const newEmployee = {
            name,
            email,
            position,
            phone
        };

        // Aqui você pode armazenar o novo funcionário no localStorage ou enviar para uma API
        const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
        storedEmployees.push(newEmployee);
        localStorage.setItem('employees', JSON.stringify(storedEmployees));

        // Limpar os campos após o cadastro
        setName('');
        setEmail('');
        setPosition('');
        setPhone('');
        setError('');

        alert('Funcionário cadastrado com sucesso!');
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900 p-6 h-screen flex items-center">
            <div className="max-w-2xl sm:min-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Cadastro de Funcionário</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="position" className="block text-sm font-medium text-gray-900 dark:text-white">Cargo</label>
                        <input
                            type="text"
                            id="position"
                            value={position}
                            onChange={(e) => setPosition(e.target.value)}
                            className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-900 dark:text-white">Telefone</label>
                        <input
                            type="text"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full p-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            required
                        />
                    </div>

                    {error && <div className="text-red-500 text-sm mb-2">{error}</div>}

                    <button
                        type="submit"
                        className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Cadastrar Funcionário
                    </button>
                </form>
            </div>
        </div>
    );
}

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.svg';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Verificar se os usuários existem no localStorage
        const storedUsers = localStorage.getItem('users');
        if (storedUsers) {
            const users = JSON.parse(storedUsers);
            // Procurar o usuário com o email correspondente
            const user = users.find(user => user.email === email);

            if (!user) {
                setError('Este e-mail não está registrado!');
                return;
            }

            if (user.password !== password) {
                setError('Senha incorreta!');
                return;
            }

            // Caso o login seja bem-sucedido, redireciona para a página inicial
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/home');
        } else {
            setError('Nenhum usuário registrado!');
        }
    };

    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        {/* Logo ou título da página */}
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <div className='flex items-center justify-center gap-5'>
                                <img src={Logo} alt="Logo" className='w-14' />
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Entre com sua conta
                                </h1>
                            </div>
                            
                            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} id="form-login">
                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seu Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="nome@exemplo.com"
                                        required
                                    />
                                </div>

                                {/* Senha */}
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha</label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required
                                    />
                                </div>

                                {/* Erro */}
                                {error && (
                                    <div className="text-red-500 text-sm mb-2">
                                        {error}
                                    </div>
                                )}

                                {/* Botão de Login */}
                                <button
                                    type="submit"
                                    className="w-full cursor-pointer text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Entrar  
                                </button>

                                {/* Link para a página de registro */}
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Não possui uma conta ainda? <a href="/register" className="font-medium cursor-pointer text-blue-600 hover:underline dark:text-blue-500">Registrar-se</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

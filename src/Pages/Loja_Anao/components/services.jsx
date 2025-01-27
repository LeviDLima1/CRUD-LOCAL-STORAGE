import React from 'react';
import { Link } from 'react-router-dom';
import bandaRock from '../Assets/Banda_rockinho.webp';
import casamentoAnoes from '../Assets/casamento.jpg';
import viagem from '../Assets/Viagem_baixo_custo.webp';
import guardaDiferente from '../Assets/Ninjinhas.webp';

const products = [
  {
    id: 1,
    name: 'Metal Little Titans',
    imageSrc: bandaRock,
    imageAlt: 'Banda de rock formada por anões.',
    price: 'R$ 5.000 - R$ 10.000 por evento',
  },
  {
    id: 2,
    name: 'Wedding of Wonders',
    imageSrc: casamentoAnoes,
    imageAlt: 'Casamento especial para anões.',
    price: 'R$ 15.000 - R$ 30.000 por casamento',
  },
  {
    id: 3,
    name: 'Enigma dos Pequenos Reinos',
    imageSrc: viagem,
    imageAlt: 'Viagem para a Cidade dos Anões.',
    price: 'R$ 2.000 - R$ 5.000 por pessoa',
  },
  {
    id: 4,
    name: 'Shadow Guardians',
    imageSrc: guardaDiferente,
    imageAlt: 'Equipe de anões ninjas.',
    price: 'R$ 20.000 - R$ 50.000 por missão ou contrato',
  },
];

export default function Services() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Nossos Serviços</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 gap-x-6">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-700">
                <Link to={`/product/${product.id}`}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </Link>
              </h3>
              <p className="mt-1 text-md font-medium text-gray-900">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

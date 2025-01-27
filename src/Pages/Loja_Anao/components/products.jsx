import React from 'react';
import { Link } from 'react-router-dom';

// Imagens dos produtos
import anaoAmirzinho from '../Assets/Amirzinho.webp';
import irmaosBasqueteiros from '../Assets/basket_anao.jpg';
import anaoJacinto from '../Assets/Guardinha.webp';
import marinhoLuiguinho from '../Assets/Mariozinho_Luiguinho.webp';
import messiAnão from '../Assets/Messinho.webp';
import peletequinho from '../Assets/Pouca_graça.jpg';
import fulero from '../Assets/Pra_correria.webp';
import herold from '../Assets/Viking_anao.jpg';
import teletube from '../Assets/Winkinho.jpg';
import fisiculturista from '../Assets/Projeto_anao.jpg';

const products = [
  {
    id: 5,
    name: 'Anão Amirzinho',
    imageSrc: anaoAmirzinho,
    imageAlt: 'Anão de filmagem indiano.',
    price: 'R$ 10.000',
  },
  {
    id: 6,
    name: 'Irmãos Basqueteiros (Chocoball e Dreadzada)',
    imageSrc: irmaosBasqueteiros,
    imageAlt: 'Irmãos anões no basquete.',
    price: 'R$ 7.000',
  },
  {
    id: 7,
    name: 'Anão Jacinto',
    imageSrc: anaoJacinto,
    imageAlt: 'Guarda anão noturno.',
    price: 'R$ 6.000',
  },
  {
    id: 8,
    name: 'Marinho e Luiguinho',
    imageSrc: marinhoLuiguinho,
    imageAlt: 'Dupla de anões aventureiros.',
    price: 'R$ 150.000',
  },
  {
    id: 9,
    name: 'Messi Anão',
    imageSrc: messiAnão,
    imageAlt: 'Melhor jogador da liga anões mundial.',
    price: 'R$ 300.000',
  },
  {
    id: 10,
    name: 'Peletequinho',
    imageSrc: peletequinho,
    imageAlt: 'Palhaço anão engraçado.',
    price: 'R$ 5.000',
  },
  {
    id: 11,
    name: 'Fulero',
    imageSrc: fulero,
    imageAlt: 'Anão misterioso e astuto.',
    price: 'R$ 1.500 (Negociavel)',
  },
  {
    id: 12,
    name: 'Herold, o Viking Anão',
    imageSrc: herold,
    imageAlt: 'Viking anão forte e corajoso.',
    price: 'R$ 15.000',
  },
  {
    id: 13,
    name: 'Teletube Anão',
    imageSrc: teletube,
    imageAlt: 'Anão travesso e misterioso.',
    price: 'R$ 4.000',
  },
  {
    id: 14,
    name: 'Anão Fisiculturista (Jorginho)',
    imageSrc: fisiculturista,
    imageAlt: 'Anão fisiculturista e personal trainer.',
    price: 'R$ 10.000',
  },
];

export default function Products() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Nossos Produtos</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full h-80 bg-white rounded-lg overflow-hidden shadow-lg group-hover:opacity-75">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="w-full h-full object-cover transition-all duration-300 ease-in-out"
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

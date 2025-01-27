import { useParams } from 'react-router-dom';
import bandaRock from './Assets/Banda_rockinho.webp';
import casamentoAnoes from './Assets/Casamento.jpg';
import viagem from './Assets/Viagem_baixo_custo.webp';
import guardaDiferente from './Assets/Ninjinhas.webp';
import anaoAmirzinho from './Assets/Amirzinho.webp';
import irmaosBasqueteiros from './Assets/basket_anao.jpg';
import anaoJacinto from './Assets/Guardinha.webp';
import marinhoLuiguinho from './Assets/Mariozinho_Luiguinho.webp';
import messiAnão from './Assets/Messinho.webp';
import peletequinho from './Assets/Pouca_graça.jpg';
import fulero from './Assets/Pra_correria.webp';
import herold from './Assets/Viking_anao.jpg';
import teletube from './Assets/Winkinho.jpg';
import fisiculturista from './Assets/Projeto_anao.jpg';
import Header from "./components/header.jsx";

const products = [
  {
    id: 1,
    name: 'Metal Little Titans',
    href: '#',
    imageSrc: bandaRock,
    imageAlt: "Banda de rock formada por anões.",
    price: 'R$ 5.000 - R$ 10.000 por evento',
    description: 'A energia do rock em tamanho compacto! Composta por quatro talentosos anões, nossa banda traz a experiência do verdadeiro heavy metal para eventos inesquecíveis. Contrate os "Metal Little Titans" e surpreenda seus convidados com um show poderoso e único!',
    highlights: [
      'Banda formada por 4 membros',
      'Especializada em heavy metal',
      'Ideal para eventos exclusivos',
    ],
    details: 'Os "Metal Little Titans" são conhecidos por sua presença de palco vibrante e som de alta qualidade, tornando cada apresentação inesquecível.'
  },
  {
    id: 2,
    name: 'Wedding of Wonders',
    href: '#',
    imageSrc: casamentoAnoes,
    imageAlt: "Casamento especial para anões.",
    price: 'R$ 15.000 - R$ 30.000 por casamento',
    description: 'Diga "sim" com um toque de magia! Especializado em casamentos para anões, oferecemos tudo sob medida: roupas, decoração, e o ambiente perfeito para um dia inesquecível. Transformamos o seu grande momento em algo feito sob medida para o amor.',
    highlights: [
      'Planejamento completo de casamentos',
      'Decoração personalizada',
      'Pacotes sob medida'
    ],
    details: 'Nosso serviço de casamento inclui planejamento, organização e execução para garantir um dia especial e memorável.'
  },
  {
    id: 3,
    name: 'Enigma dos Pequenos Reinos',
    href: '#',
    imageSrc: viagem,
    imageAlt: "Viagem para a Cidade dos Anões.",
    price: 'R$ 2.000 - R$ 5.000 por pessoa',
    description: 'Uma experiência única guiada por Marcelinho e Marianinha! Descubra a misteriosa Cidade dos Anões, um lugar mágico onde só guias credenciados podem te levar. Entre nessa aventura inesquecível e viva histórias dignas de contos de fadas!',
    highlights: [
      'Guias especializados',
      'Acesso exclusivo à Cidade dos Anões',
      'Experiência cultural única'
    ],
    details: 'A viagem inclui transporte, guias especializados e um tour completo pela Cidade dos Anões.'
  },
  {
    id: 4,
    name: 'Shadow Guardians',
    href: '#',
    imageSrc: guardaDiferente,
    imageAlt: "Equipe de anões ninjas.",
    price: 'R$ 20.000 - R$ 50.000 por missão ou contrato',
    description: 'A proteção que você nunca viu chegando! Contrate nossos anões ninjas e esteja sempre um passo à frente de qualquer ameaça. Discretos, ágeis e especialistas em trabalho em equipe, os Shadow Guardians garantem sua segurança como ninguém!',
    highlights: [
      'Segurança discreta',
      'Equipe altamente treinada',
      'Ideal para eventos e proteção pessoal'
    ],
    details: 'Os Shadow Guardians oferecem serviços de segurança personalizados para atender às suas necessidades específicas.'
  },
  {
    id: 5,
    name: 'Anão Amirzinho',
    href: '#',
    imageSrc: anaoAmirzinho,
    imageAlt: "Anão de filmagem indiano.",
    price: 'R$ 10.000',
    description: 'O Amir é um ótimo anão de filmagem indiano, perfeito para capturar momentos especiais com sua perspectiva única e criativa.',
    highlights: [
      'Excelente para produções cinematográficas',
      'Especializado em filmagens culturais',
      'Disponível para eventos internacionais',
    ],
    details: 'Com anos de experiência no setor, Amirzinho tem um portfólio impressionante e está pronto para fazer seu evento inesquecível.'
  },
  {
    id: 6,
    name: 'Irmãos Basqueteiros (Chocoball e Dreadzada)',
    href: '#',
    imageSrc: irmaosBasqueteiros,
    imageAlt: "Irmãos anões no basquete.",
    price: 'R$ 7.000',
    description: 'Chocoball e Dreadzada são irmãos anões negros, com habilidades incríveis no basquete. Eles trazem um show de habilidades e diversão ao seu evento.',
    highlights: [
      'Habilidade impressionante no basquete',
      'Dupla dinâmica com muita energia',
      'Perfeito para eventos esportivos e festas',
    ],
    details: 'Essa dupla é uma referência no mundo do basquete, com movimentos rápidos e estilo único. Contrate para um evento que ninguém esquecerá!'
  },
  {
    id: 7,
    name: 'Anão Jacinto',
    href: '#',
    imageSrc: anaoJacinto,
    imageAlt: "Guarda anão noturno.",
    price: 'R$ 6.000',
    description: 'Sr. Jacinto é um guarda anão noturno que combate pequenos crimes, garantindo a segurança em sua casa com vigilância eficaz e discreta.',
    highlights: [
      'Guarda de segurança experiente',
      'Trabalha exclusivamente à noite',
      'Perfeito para segurança pessoal ou residencial',
    ],
    details: 'Jacinto é discreto, eficiente e garante a segurança do local com rapidez e precisão, pronto para qualquer emergência que surja.'
  },
  {
    id: 8,
    name: 'Marinho e Luiguinho',
    href: '#',
    imageSrc: marinhoLuiguinho,
    imageAlt: "Dupla de anões aventureiros.",
    price: 'R$ 150.000',
    description: 'Marinho e Luiguinho são a dupla de anões prontos para qualquer aventura! Se você procura diversão e histórias inesquecíveis, essa dupla vai te surpreender.',
    highlights: [
      'Aventureiros experientes',
      'Perfeito para quem busca diversão infinita',
      'Edição limitada (apenas 1 compra disponível)',
    ],
    details: 'Esses dois anões trazem diversão sem limites e estão prontos para criar momentos inesquecíveis. Não perca a oportunidade de contratá-los!'
  },
  {
    id: 9,
    name: 'Messi Anão',
    href: '#',
    imageSrc: messiAnão,
    imageAlt: "Melhor jogador da liga anões mundial.",
    price: 'R$ 300.000',
    description: 'Messi Anão é considerado o melhor jogador da Liga Anões Mundial. Ele traz sua habilidade e paixão pelo futebol para qualquer evento, vencendo até os adversários mais difíceis.',
    highlights: [
      'Habilidade única no futebol',
      'Joga em eventos de alto nível',
      'Perfeito para competições e festas',
    ],
    details: 'Com uma carreira brilhante, Messi Anão pode transformar qualquer evento esportivo em um espetáculo de habilidade e emoção.'
  },
  {
    id: 10,
    name: 'Peletequinho',
    href: '#',
    imageSrc: peletequinho,
    imageAlt: "Palhaço anão engraçado.",
    price: 'R$ 5.000',
    description: 'Peletequinho é um palhaço anão cheio de graça e alegria, mas agora ele está à venda devido a ter perdido o sentido da vida. Será que você consegue fazer Peletequinho rir novamente?',
    highlights: [
      'Perfeito para eventos infantis',
      'Palhaço de alma grande',
      'Traga um sorriso para o seu evento',
    ],
    details: 'Embora tenha perdido a alegria de fazer graça, Peletequinho ainda é capaz de arrancar risadas, se você conseguir mexer com seu humor.'
  },
  {
    id: 11,
    name: 'Fulero',
    href: '#',
    imageSrc: fulero,
    imageAlt: "Anão misterioso e astuto.",
    price: 'R$ 1.500 (Negociavel)',
    description: 'Fulero é um anão astuto e misterioso, sempre à espreita. Ele tem um talento especial para pegar o que não lhe pertence. Cuidado com seus pertences!',
    highlights: [
      'Anão astuto e discreto',
      'Especialista em furtos',
      'Ideal para situações de "roubo" ou espionagem',
    ],
    details: 'Fulero é imbatível quando se trata de furtar objetos. Não aceitamos devoluções depois da compra, então tenha cuidado com ele!'
  },
  {
    id: 12,
    name: 'Herold, o Viking Anão',
    href: '#',
    imageSrc: herold,
    imageAlt: "Viking anão forte e corajoso.",
    price: 'R$ 15.000',
    description: 'Herold é um viking anão corajoso, pronto para qualquer batalha. Ele pode ser pequeno, mas sua força e coragem são de tamanho épico.',
    highlights: [
      'Viking de força impressionante',
      'Perfeito para batalhas e aventuras',
      'Ideal para missões de alto risco',
    ],
    details: 'Herold é a escolha ideal para quem precisa de um guerreiro fiel e corajoso. Ele traz força física e coragem de sobra para qualquer situação.'
  },
  {
    id: 13,
    name: 'Teletube Anão',
    href: '#',
    imageSrc: teletube,
    imageAlt: "Anão travesso e misterioso.",
    price: 'R$ 4.000',
    description: 'Teletube é um anão travesso que adora fazer travessuras. Mas tenha cuidado, pois, dependendo do horário, ele pode ser bem assustador!',
    highlights: [
      'Diversão e mistério garantidos',
      'Perfeito para festas e eventos noturnos',
      'Ideal para quem adora surpresas',
    ],
    details: 'Teletube adora causar, mas é melhor ficar atento quando a noite cai. Feche bem as portas e não se aproxime quando ele estiver agitado!'
  },
  {
    id: 14,
    name: 'Anão Fisiculturista (Jorginho)',
    href: '#',
    imageSrc: fisiculturista,
    imageAlt: "Anão fisiculturista e personal trainer.",
    price: 'R$ 10.000',
    description: 'Jorginho é um anão fisiculturista e personal trainer especializado em transformar corpos. Contrate ele para alcançar seus objetivos e ter o físico dos seus sonhos.',
    highlights: [
      'Treinamentos personalizados',
      'Especialista em musculação e dieta',
      'Ideal para quem busca transformação física',
    ],
    details: 'Jorginho irá te treinar de acordo com suas necessidades, seja para ganhar massa muscular, perder peso ou simplesmente melhorar seu físico.'
  }
];

export default function Overview() {
  const { productId } = useParams(); // Obtém o ID do produto da URL
  const product = products.find((item) => item.id === parseInt(productId)); // Busca o produto correspondente

  if (!product) {
    return <div>Produto não encontrado!</div>; // Mensagem de fallback caso o produto não exista
  }

  return (
    <>
      <Header />
      <div className="bg-white">
        <div className="pt-6">
          {/* Navegação */}
          <nav aria-label="Breadcrumb">
            <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <li>
                <div className="flex items-center">
                  <a href="/loja" className="mr-2 text-sm font-medium text-gray-900">
                    Serviços
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M3.1 5.7L6.5 10 3.1 14.3H5.4L9 10 5.4 5.7H3.1z" />
                  </svg>
                </div>
              </li>
              <li className="text-sm">
                <a href="#" className="font-medium text-gray-500 hover:text-gray-600">
                  {product.name}
                </a>
              </li>
            </ol>
          </nav>

          {/* Galeria de Imagens */}
          <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Informações do Produto */}
          <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:max-w-7xl lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div className="lg:col-span-2 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
            </div>

            {/* Preço, Destaques e Botão de Comprar */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

              <div className="mt-10">
                <h3 className="text-md sm:text-lg font-medium text-gray-900">Destaques</h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-md sm:text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Botão de Comprar */}
              <div className="mt-10">
                <button
                  type="button"
                  className="w-full bg-blue-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Comprar
                </button>
              </div>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:pr-8">
              <div>
                <h3 className="sr-only">Descrição</h3>

                <div className="space-y-6">
                  <p className="text-base sm:text-lg text-gray-900">{product.description}</p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm sm:text-xl font-medium text-gray-900">Detalhes</h3>

                <div className="mt-4 space-y-6">
                  <p className="text-sm sm:text-lg text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

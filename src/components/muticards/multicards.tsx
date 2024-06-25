import React, { useState } from 'react';
import './cards.css';

import assistirMaisTarde from "../../assets/printsWatchfolioPrototipo/assistirMaisTardde.webp";
import ator from "../../assets/printsWatchfolioPrototipo/atorResumo.webp";
import filme from "../../assets/printsWatchfolioPrototipo/filmeResumo.webp";
import filtro1 from "../../assets/printsWatchfolioPrototipo/filtro1.webp";
import melhores from "../../assets/printsWatchfolioPrototipo/melhores.webp";
import lista from "../../assets/printsWatchfolioPrototipo/lista.webp";
import sorteia from "../../assets/printsWatchfolioPrototipo/sorteia.webp";
import home from "../../assets/printsWatchfolioPrototipo/home.webp";
import recomenda from "../../assets/printsWatchfolioPrototipo/recomenda.webp";
import filtro2 from "../../assets/printsWatchfolioPrototipo/filtro2.webp";
import perfil from "../../assets/printsWatchfolioPrototipo/perfil.webp";

interface Card {
  image: string;
  title: string;
  description: string;
}

const MultiCardCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const cards: Card[] = [
    {
      image: home,
      title: 'Tela Inicial',
      description: 'A Tela Inicial exibe os filmes assistidos pelo usuário, juntamente com suas avaliações. Aqui, você também pode pesquisar por filmes.',
    },
    {
      image: melhores,
      title: 'Tela dos Melhores',
      description: 'A Tela dos Melhores apresenta uma lista dos filmes mais bem avaliados pelo usuário, com base nas notas atribuídas. A ordem é atualizada automaticamente para destacar os melhores filmes.',
    },
    {
      image: assistirMaisTarde,
      title: 'Assistir Mais Tarde',
      description: 'Na lista "Assistir Mais Tarde", você encontra os filmes que adicionou para assistir posteriormente. Uma maneira conveniente de organizar suas escolhas de filmes.',
    },
    {
      image: ator,
      title: 'Modal do Ator',
      description: 'O Modal do Ator exibe informações detalhadas sobre um ator específico, incluindo os filmes em que ele participou. Ideal para descobrir mais sobre seus atores favoritos.',
    },
    {
      image: filme,
      title: 'Detalhes do Filme',
      description: 'A página de Detalhes do Filme oferece uma visão abrangente de um filme, incluindo informações sobre o enredo, elenco, e filmes relacionados ou semelhantes que você pode gostar.',
    },
    {
      image: filtro1,
      title: 'Filtragem por Gênero',
      description: 'A funcionalidade de Filtragem por Gênero permite que você explore filmes com base nos gêneros que mais lhe interessam, ajudando a encontrar novas obras dentro de suas preferências.',
    },
    {
      image: filtro2,
      title: 'Filtragem por Plataforma',
      description: 'Com o recurso de Filtragem por Plataforma, você pode descobrir filmes disponíveis em suas plataformas de streaming favoritas, facilitando a escolha do que assistir de acordo com suas assinaturas.',
    },
    {
      image: lista,
      title: 'Lista de Melhores Filmes',
      description: 'A Lista de Melhores Filmes apresenta uma seleção dos filmes mais bem avaliados pelo usuário, ordenados por suas notas. Uma forma rápida de encontrar ótimas recomendações.',
    },
    {
      image: sorteia,
      title: 'Sorteio de Filmes',
      description: 'O recurso de Sorteio de Filmes seleciona um filme aleatório com base nos filtros que você configurar, oferecendo uma maneira divertida e imprevisível de descobrir algo novo para assistir.',
    },
    {
      image: recomenda,
      title: 'Recomendações Personalizadas',
      description: 'Na página de Recomendações Personalizadas, você recebe sugestões de filmes com base nos seus hábitos de visualização e nas últimas obras que você assistiu, ajudando a encontrar novos favoritos.',
    },
    {
      image: perfil,
      title: 'Estatísticas do Perfil',
      description: 'A seção de Estatísticas do Perfil oferece insights sobre seus hábitos de visualização, incluindo quantos filmes você assistiu por dia, semana ou mês. Perfeito para acompanhar seu progresso e interesses cinematográficos.',
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const openModal = (image: string) => {
    setModalImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage('');
  };

  if (currentIndex > cards.length - 3) {
    setCurrentIndex(0);
  }

  return (
    <div className="mt-2">
      <div className="card-container">
        <div className="relative">
          <div className="flex space-x-4">
            {cards.slice(currentIndex, currentIndex + 3).map((card, index) => (
              <div className="card" key={index} onClick={() => openModal(card.image)}>
                <img src={card.image} alt={card.title} />
                <div className="card-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-4 relative bottom-44">
            <button className="w-7 h-7 rounded-full bg-gray-300 relative right-4" onClick={handlePrev}>&lt;</button>
            <button className="w-7 h-7 rounded-full bg-gray-300 relative left-10" onClick={handleNext}>&gt;</button>
          </div>
        </div>
      </div>
      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal">
            <img src={modalImage} alt="Modal Image" />
            <button className="close-button" onClick={closeModal}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiCardCarousel;

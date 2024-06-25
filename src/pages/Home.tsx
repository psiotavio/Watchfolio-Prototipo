import React from "react";
import "../App.css";
import "../Style.css";
import "./css/home.css";

import Separator from "../components/Separator.tsx";

import assistirMaisTarde from "../assets/printsWatchfolioPrototipo/assistirMaisTardde.webp";
import ator from "../assets/printsWatchfolioPrototipo/ator.webp";
import filme from "../assets/printsWatchfolioPrototipo/filmeResumo.webp";
import filtro1 from "../assets/printsWatchfolioPrototipo/filtro1.webp";
import melhores from "../assets/printsWatchfolioPrototipo/melhores.webp";
import lista from "../assets/printsWatchfolioPrototipo/lista.webp";
import sorteia from "../assets/printsWatchfolioPrototipo/sorteia.webp";
import home from "../assets/printsWatchfolioPrototipo/home.webp";
import recomenda from "../assets/printsWatchfolioPrototipo/recomenda.webp";
import filtro2 from "../assets/printsWatchfolioPrototipo/filtro2.webp";
import perfil from "../assets/printsWatchfolioPrototipo/perfil.webp";

function Home() {
  return (
    <div className="App">
      <div>
        <h3>M14/M15 | Projeto Final</h3>
        <div className="header-M14">
          <h3>Grupo de Trabalho | GT 29</h3>
          <h3>Integrantes: Otávio da Cunha Pereira de Souza</h3>
        </div>

        <Separator />

        <div className="content">
          <h1>WATCHFOLIO</h1>

          <div>
            <h2>Apresentação do Watchfolio</h2>
            <p>
              Sua plataforma personalizada para redefinir a maneira como você
              registra suas jornadas cinematográficas! Adicione facilmente os
              filmes que assistiu à sua lista, atribua estrelas para expressar
              cada detalhe da sua experiência cinematográfica. Mais do que um
              simples aplicativo, o Watchfolio é seu parceiro cinematográfico,
              projetado para elevar o ato de registrar filmes a novos patamares.
            </p>

            <div className="div-section-prototype">
              <img src={home} alt="prints" className="prints" />
              <div className="div-container-section-prototype">
                <h3>Funcionalidades Principais</h3>
                <p>
                  No Watchfolio, você pode registrar e avaliar cada filme que
                  assiste, criando um histórico completo de suas experiências
                  cinematográficas. Esse registro detalhado não só permite uma
                  reflexão pessoal sobre o que foi assistido, mas também serve
                  como um recurso valioso para futuras consultas e
                  recomendações.
                </p>
                <p>
                  Com o sistema de avaliação detalhado do Watchfolio, cada
                  estrela atribuída é um reflexo de sua experiência
                  cinematográfica, permitindo que você personalize completamente
                  seu perfil de espectador. Esta funcionalidade torna as
                  recomendações de filmes ainda mais precisas e ajustadas aos
                  seus gostos únicos.
                </p>
                <p>
                  Utilize nossos filtros avançados para descobrir filmes por
                  gênero ou plataforma de streaming. Esses filtros inteligentes
                  facilitam a exploração de novos filmes que se alinham com suas
                  preferências, garantindo que sua próxima escolha seja sempre
                  acertada.
                </p>
              </div>
            </div>

            <div className="div-section-prototype-alternative">
              <img src={sorteia} alt="prints" className="prints" />
              <div className="div-container-section-prototype">
                <h3>Funcionalidades de Sorteio</h3>
                <p>
                  Explore o elemento de surpresa com as funcionalidades de
                  sorteio do Watchfolio. Com um simples toque, você pode sortear
                  um filme aleatório para assistir, trazendo emoção e variedade
                  para suas noites de cinema em casa.
                </p>
                <p>
                  Personalize ainda mais sua experiência ao selecionar filmes
                  por gênero ou plataforma de streaming. Esta opção de sorteio
                  segmentado permite que você mantenha algum controle sobre o
                  tipo de filme que deseja explorar, adequando-se ao seu humor
                  ou interesse específico naquele momento.
                </p>
                <p>
                  Para os indecisos ou para aqueles que querem misturar ambos os
                  critérios, o Watchfolio permite combinar gênero e plataforma
                  em um único sorteio, maximizando a personalização e mantendo a
                  emoção do desconhecido.
                </p>
              </div>
            </div>

            <div className="div-section-prototype">
              <img src={perfil} alt="prints" className="prints" />
              <div className="div-container-section-prototype">
                <h3>Funcionalidades de Estatísticas e Listas</h3>
                <p>
                  Com as estatísticas detalhadas do Watchfolio, você pode
                  visualizar exatamente quantos filmes assistiu ao longo do ano.
                  Estes dados ajudam a traçar um panorama do seu consumo
                  cinematográfico, permitindo ajustes e metas para os próximos
                  períodos.
                </p>
                <p>
                  Baseado nas suas avaliações, o Watchfolio exibe os melhores
                  filmes do mês, garantindo que você possa revisitar e até
                  recomendar suas experiências cinematográficas favoritas. Esta
                  lista é dinâmica e se ajusta conforme novas avaliações são
                  adicionadas.
                </p>
                <p>
                  Mantenha uma lista de filmes 'para assistir' que você pode
                  personalizar e atualizar a qualquer momento. Esta lista é uma
                  excelente ferramenta para planejar sessões de cinema futuras,
                  garantindo que você nunca fique sem opções de qualidade para
                  assistir.
                </p>
              </div>
            </div>

            <div className="div-section-prototype-alternative">
              <img src={filme} alt="prints" className="prints" />
              <div className="div-container-section-prototype">
                <h3>Funcionalidades de Pesquisa e Compartilhamento</h3>
                <p>
                  Descubra tudo sobre um filme com nossa busca detalhada. Seja
                  informações sobre onde está disponível para streaming,
                  detalhes sobre o elenco ou uma sinopse completa, o Watchfolio
                  torna fácil encontrar tudo que você precisa saber.
                </p>
                <p>
                  Pesquise atores e descubra uma lista completa de filmes em que
                  eles participaram. Esta funcionalidade é ideal para fãs que
                  desejam seguir a carreira de seus atores favoritos ou explorar
                  novas atuações.
                </p>
                <p>
                  Não mantenha os bons momentos só para si: compartilhe seus
                  filmes favoritos com amigos através do Watchfolio. Esta
                  funcionalidade de compartilhamento faz do ato de assistir a
                  filmes uma experiência ainda mais social e envolvente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

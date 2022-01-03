import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './styles/home.css';

function Home() {
  return (
    <>
      <Header />
      <main>
        <article>
          <h1>Desafio Quatized - Marvel API</h1>

          <h2>Motivação</h2>
          <p>
            Esta página renderiza as principais rotas da
            {' '}
            <a href="https://developer.marvel.com/documentation/images" target="_blank" rel="noreferrer">API da Marvel</a>
            {' '}
            e foi desenvolvida para o processo seletivo da
            {' '}
            <a href="https://quantzed.com.br/">Quantzed</a>
            !
          </p>
          <p>O e-mail enviado pelo Lucas Costa foi o seguinte:</p>
          <p className="email-paragraph">Bem-vindas e bem-vindos ao processo seletivo da Quantzed!</p>
          <p className="email-paragraph">
            Este processo ocorrerá em 2 etapas: teste prático e entrevista comportamental.
            Para começarmos, vou pedir uma demonstração de sua habilidade técnica.
            Através da API da marvel: developer.marvel.com - use 100% de sua criatividade
            para mostrar suas habilidades.
          </p>

          <p>Com base nessa solicitação, </p>

          <p className="email-paragraph">
            O prazo para conclusão do projeto é o dia 03/01/2022, sendo necessário o envio do
            resultado para este email: lucas.costa@quantzed.com.br - no formato de link do
            repositório do &gt; &gt; github.
            Após recebimento dos projetos, estes entrarão em avaliação, sendo os melhores
            selecionados para a entrevista técnica,
            que deverá ocorrer na primeira quinzena de janeiro
          </p>

          <p>
            {' '}
          </p>

          <h2>Ferramentas</h2>

          <ul>
            <li>Windows 11 com WSL2</li>
            <li>VSCode em modo WS: Ubuntu</li>
            <li>React/JavaScript</li>
            <li>Versionamento de arquivos com Git/GitHub</li>
            <li>ESLint Airbnb</li>
            <li>Axios</li>
            <li>MD5</li>
            <li>React Router DOM</li>
            <li>React Bootstrap</li>
          </ul>

          <h2>Agradecimentos</h2>

          <p>
            <a href="https://www.linkedin.com/in/lucas-costa-16a41a99/" target="_blank" rel="noreferrer">Lucas Costa</a>
            , pelo convite
          </p>

          <p>
            <a href="https://www.youtube.com/watch?v=jlqgqSFIKPU" target="_blank" rel="noreferrer">Luiz Silva</a>
            , pelo vídeo que me ensionou a usar a API

          </p>
        </article>

      </main>
      <Footer />
    </>
  );
}

export default Home;

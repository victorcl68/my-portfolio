import React from 'react';
import './App.css';
import photoOfMySelf from './photoOfMySelf.jpg';

function App() {
  return (
    <main>
      <div className="text-content">
        <h1 id="title">Victor Cabrera Lopes Cardoso</h1>
        <h2 id="subtitle">
          Desde pequeno apaixonado por tecnologia estudo desenvolvimento web na Trybe.
          <br />
          Tenho conhecimento em React.js e um nível de inglês intermediário.
          <br />
          Acredito e trabalho para poder fazer diferença positiva na vida das pessoas.
        </h2>
        <section id="uls">
          <ul id="abilities">
            <h2 className="title-ul"> Principais Habilidades </h2>
            <li className="item"> React.js | Redux | Hooks </li>
            <li className="item"> React Testing Library </li>
            <li className="item"> DOM | JavaScript ES6 </li>
            <li className="item"> Testes Unitários </li>
            <li className="item"> Bash | Unix </li>
            <li className="item"> Git | Github </li>
            <li className="item"> CSS | HTML </li>
          </ul>
          <ul id="projects">
            <h2 className="title-ul"> Projetos </h2>
            <li><a href="https://victorcl68.github.io/to-do-list/" target="_blank" rel="noreferrer">
              <h3 className="item"> To-Do List </h3>
            </a></li>
            <li><a href="https://movie-card-library.herokuapp.com/ " target="_blank" rel="noreferrer">
              <h3 className="item"> Movie Cards Library </h3>
            </a></li>
            <li><a href="https://victorcl68.github.io/pixels-art/" target="_blank" rel="noreferrer">
              <h3 className="item"> Pixels Art </h3>
            </a></li>
            <li><a href="https://victorcl68.github.io/shopping-cart/" target="_blank" rel="noreferrer">
              <h3 className="item"> Carrinho de Compras </h3>
            </a></li>
            <li><a href="https://victorcl68.github.io/lessons-learned/" target="_blank" rel="noreferrer">
              <h3 className="item"> Lessons learned </h3>
            </a></li>
          </ul>
        </section>
        <p id="contact">Contato</p>
        <a className="links" href="https://www.linkedin.com/in/victorclc/">LinkedIn</a>
        <a className="links" href="mailto:victor.cabrera0209@gmail.com">victor.cabrera0209@gmail.com</a>
      </div>
      <section id="image">
        <img id="my-photo" src={ photoOfMySelf } alt="Photography of myself" />
      </section>
    </main>
  );
}

export default App;

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
          Tenho conhecimento em NodeJS e um nível de inglês intermediário.
          <br />
          Acredito e trabalho para poder fazer diferença positiva na vida das pessoas.
        </h2>
        <section id="uls">
          <ul id="abilities">
            <h2 className="title-ul"> Principais Habilidades </h2>
            <li className="item"> NodeJS | JavaScript </li>
            <li className="item"> MySQL | MongoDB </li>
            <li className="item"> Bash | Unix </li>
            <li className="item"> Git | Github </li>
            <li className="item"> CSS | HTML </li>
            <li className="item"> Testes Unitários </li>
          </ul>
          <ul id="projects">
            <h2 className="title-ul"> Projetos </h2>
              <li><a href="https://webchat-victor.herokuapp.com" target="_blank" rel="noreferrer">
                <h3 className="item"> Web Chat </h3>
              </a></li>
              <li><a href="https://victorcl68.github.io/shopping-cart/" target="_blank" rel="noreferrer">
                <h3 className="item"> Carrinho de Compras </h3>
              </a></li>
              <li><a href="https://victorcl68.github.io/to-do-list/" target="_blank" rel="noreferrer">
                <h3 className="item"> To-Do List </h3>
              </a></li>
              <li><a href="https://victorcl68.github.io/pixels-art/" target="_blank" rel="noreferrer">
                <h3 className="item"> Pixels Art </h3>
              </a></li>
              <li><a href="https://project-recipes-app.herokuapp.com/" target="_blank" rel="noreferrer">
                <h3 className="item"> Recipe App </h3>
              </a></li>
              <li><a href="https://movie-card-library.herokuapp.com/" target="_blank" rel="noreferrer">
                <h3 className="item"> Movie Cards Library </h3>
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

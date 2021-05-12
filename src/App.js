import './App.css';

function App() {
  return (
    <div>
      <h1 id="title">Victor Cabrera Lopes Cardoso</h1>
      <h2 id="subtitle">Desde pequeno sou apaixonado por Tecnologia. <br/> Estudo Desenvolvimento Web na Trybe. <br/> Tenho conhecimento em Front-End, especialmente com a tecnologia React.js <br/> e um nível de Inglês Intermediário. <br/> Acredito e trabalho para poder fazer diferença positiva na vida das pessoas.</h2>
      <div id="image">
        <img id="my-photo" src="https://avatars.githubusercontent.com/u/78442423?v=4" alt="Photography of myself" />
      </div>
      <div id="uls">
        <ul id="projects">
          <h2 id="title-projects"> Projetos </h2>
          <li><a href="https://victorcl68.github.io/project-lessons-learned/" ><h3 className="projectItem"> Lessons learned </h3></a></li>
          <li><a href="https://victorcl68.github.io/project-pixels-art/" ><h3 className="projectItem"> Pixels Art </h3></a></li>
          <li><a href="https://victorcl68.github.io/movie-cards-library/" ><h3 className="projectItem"> Movie Cards Library </h3></a></li>
        </ul>
        <ul id="abilities">
          <h3 id="main-abilities"> Principais Habilidades </h3>
          <li className="abilitie"> Unix / Bash </li>
          <li className="abilitie"> Git / Github </li>
          <li className="abilitie"> HTML / CSS </li>
          <li className="abilitie"> Testes Unitários </li>
          <li className="abilitie"> JavaScript ES6 Básico / DOM </li>
        </ul>
      </div>
      <p id="contact">Contato</p>
      <p className="linkedin"><a className="linkedin" href="https://www.linkedin.com/in/victorclc/"> LinkedIn </a></p>
      <p id="email"> E-Mail: </p>
      <p id="gmail"> victor.cabrera0209@gmail.com </p>
    </div>
  );
}

export default App;

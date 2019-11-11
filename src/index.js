import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function formatName(user) {
  return `${user.firstName} ${user.lastName}`;
}

// construtor
const user = {
  firstName: "react",
  lastName: "JS",
  avatar: {
    url: "https://image.flaticon.com/icons/png/512/44/44948.png",
    alt: "teste",
    width: 150
  }
};

const title = Response.potentiallyMaliciusInput;

// Aqui funciona tipo o render
const element = (
  <figure>
    <h1>{title}</h1>
    <img
      width={user.avatar.width}
      src={user.avatar.url}
      alt={user.avatar.alt}
    />
    {getGreeting(user)}
  </figure>
);

// exemplo de lógica
function getGreeting(user) {
  if (user) {
    return <h3> {formatName(user)} </h3>;
  } else {
    return <h3> Estranho </h3>;
  }
}

ReactDOM.render(element, document.getElementById("introJSX"));
/**
 *
 *  Fim tópico
 *
 **/

function tick() {
  const element = (
    <div>
      <h3>Hello, word!</h3>
      <h4>
        Data {new Date().toLocaleDateString()} hora{" "}
        {new Date().toLocaleString()}
      </h4>
    </div>
  );

  ReactDOM.render(element, document.getElementById("renderElements"));
}

setInterval(tick, 1000);

/**
 *
 *  Fim tópico
 *
 **/

// function welcome(props) {
//   return <h1>Olá, {props.name}</h1>;
// }

function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img
      className="avatar"
      width={props.user.width}
      src={props.user.url}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <figure className="UserInfo">
      <Avatar user={props.user} />
      <figcaption className="UserInfo-name"> {props.user.name} </figcaption>
    </figure>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-content">
        <div className="Comment-text">{props.text}</div>
        <div className="Comment-date">{formatDate(props.date)}</div>
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Kelly Guimarans",
    url: "https://image.flaticon.com/icons/png/512/44/44948.png",
    width: 150
  }
};
// Renderiza tudo da aplicação
ReactDOM.render(
  <Comment date={comment.date} text={comment.text} author={comment.author} />,
  document.getElementById("componentProps")
);
/**
 *
 *  Fim tópico
 *
 **/

/*
* Convertendo a uma função para uma classe
* EXEMPLO DE FUNÇÃO ABAIXO
function Clock1(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleDateString()}</h2>
    </div>
  );
}

function tick1() {
  ReactDOM.render(
    <Clock1 date={new Date()} />,
    document.getElementById("statesLife")
  );
}

setInterval(tick1, 1000);
*/
/*
 * 1. Criar uma class ES6, estendendo React.component.
 * 2.Adicionar um único método chamdo render().
 * 3.Coloque o corpo da função no método render().
 * 4.Substitua props por this.props no corpo do render().
 * 5.Exclua a declaração vazia restante.
 * EXEMPLO COMENTADO ABAIXO
 */

// class Clock extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.props.date.toLocaleDateString()}</h2>
//       </div>
//     );
//   }
// }
// Add estado local
/*
 * 1.Substitua this.props.date por this.state.date
 * 2.Adicione um construtor que atribui a data inicial no this.state
 * 3.Remova a props date do elemento <clock />
 */
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  // Executado depois que o componente é renderizado
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

function App() {
  return (
    <React.Fragment>
      <Clock />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("statesLife"));
/**
 *
 *  Fim tópico
 *
 **/

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
  }

  // Arrow function não precisa criar o bind ele aponta para ele mesmo naturalmente
  handleClick = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  };

  render() {
    return (
      <button
        onClick={this.handleClick}
        className={this.state.isToggleOn ? "btn btn-on" : "btn btn-off"}
      >
        {this.state.isToggleOn ? "on" : "off"}
      </button>
    );
  }
}

ReactDOM.render(<Toggle />, document.getElementById("handlingEvents"));
/* *
 *
 *  Fim tópico
 *
 *
 * */

function UserGreeting(props) {
  return <h2>Bem vindo de volta!</h2>;
}

function GuestGreeting(props) {
  return <h2>Deslogado!</h2>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <React.Fragment>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </React.Fragment>
    );
  }
}
ReactDOM.render(<LoginControl />, document.getElementById("conditionalRender"));

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return <div className="warning">Warning!</div>;
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
  }

  handleToggleClick = () => {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  };

  render() {
    return (
      <React.Fragment>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? "Hide" : "Show"}
        </button>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Page />, document.getElementById("conditionalRender"));
/* *
 *
 *  Fim tópico
 *
 *
 * */
function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
  const content = props.posts.map(post => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));
  return (
    <div>
      {sidebar}
      <br />
      {content}
    </div>
  );
}

const posts = [
  { id: 1, title: "Hello World", content: "Welcome to learning React!" },
  { id: 2, title: "Installation", content: "You can install React from npm." }
];

ReactDOM.render(<Blog posts={posts} />, document.getElementById("keyList"));
/* *
 *
 *  Fim tópico
 *
 *
 * */

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    //Nome dos values
    this.state = {
      value: "",
      select: "coco",
      textarea:
        "Por favor, escreva uma dissertação sobre o seu elemento DOM favorito."
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    console.log(
      "Nome: " + this.state.value,
      +"Sabor: " + this.state.select,
      +"Dissertação: " + this.state.textarea
    );
    event.preventDefault();
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div>
          <label className="form__label">Nome:</label>
          <input
            name="value"
            className="form__input"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label className="form__label">Escolha seu sabor favorito:</label>
          <select
            name="select"
            className="form__input form__input--select"
            value={this.state.select}
            onChange={this.handleChange}
          >
            <option value="laranja">Laranja</option>
            <option value="limao">Limão</option>
            <option value="coco">Coco</option>
            <option value="manga">Manga</option>
          </select>
        </div>
        <div>
          <label className="form__label">Dissertação:</label>
          <textarea
            name="textarea"
            className="form__input"
            value={this.state.textarea}
            onChange={this.handleChange}
          />
        </div>
        <button className="btn" type="submit">
          enviar
        </button>
      </form>
    );
  }
}

ReactDOM.render(<NameForm />, document.getElementById("forms"));
/* *
 *
 *  Fim tópico
 *
 *
 * */

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit"
};

function BoilingVerdict(props) {
  return props.celsius >= 100 ? (
    <p>A água ferveria.</p>
  ) : (
    <p>A água não ferveria.</p>
  );
}

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);

  if (Number.isNaN(input)) return "";

  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;

  return rounded.toString();
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: "" };
  }

  handleChange = e => {
    // this.setState({ temperature: e.target.value });
    this.props.onTemperatureChange(e.target.value);
  };

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;

    return (
      <fieldset>
        <legend>Informe a temperatura em {scaleNames[scale]}</legend>
        <input value={temperature} onChange={this.handleChange} />

        <BoilingVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: "", scale: "c" };
  }

  handleCelsiusChange = temperature => {
    this.setState({ scale: "c", temperature });
  };

  handleFahrenheitChange = temperature => {
    this.setState({ scale: "f", temperature });
  };

  render() {
    const scale = this.state.scale,
      temperature = this.state.temperature,
      celsius =
        scale === "f" ? tryConvert(temperature, toCelsius) : temperature,
      fahrenheit =
        scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />

        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />

        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    );
  }
}
ReactDOM.render(<Calculator />, document.getElementById("elevationState"));
/* *
 *
 *  Fim tópico
 *
 *
 * */

function FancyBorder(props) {
  return (
    <div className={`FancyBorder FancyBorder ${props.color}`}>
      {props.children}
    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <label className="Dialog-messege">{props.message}</label>
      {props.children}
    </FancyBorder>
  );
}

class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { login: "" };
  }

  handleChange = event => {
    this.setState({ login: event.target.value });
  };

  handleSignUp = () => alert(`Bem-vindo a bordo, ${this.state.login}`);

  render() {
    return (
      <Dialog
        title="Programa de Exploração de Marte"
        message="Como gostaria de ser chamado?"
      >
        <div className="form">
          <input
            type="text"
            className="form__input"
            value={this.state.login}
            onChange={this.handleChange}
          />

          <button className="btn" onClick={this.handleSignUp}>
            Cadastre-se
          </button>
        </div>
      </Dialog>
    );
  }
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Bem-vindo"
      message="Obrigado por visitar a nossa espaçonave!"
    />
  );
}

/*
 * Children personalizadas props.nomeDaChildren
 */
function Contacts() {
  return (
    <React.Fragment>
      <h1>Contato</h1>
      <address>Rua dos bobos 0</address>
    </React.Fragment>
  );
}

function Chat() {
  return (
    <React.Fragment>
      <h1>Chat</h1>
      <p>Fale Conosco</p>
    </React.Fragment>
  );
}

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane__left">{props.left}</div>
      <div className="SplitPane__right">{props.right}</div>
    </div>
  );
}

/*
 * Renderiza todas as funções
 */
function CompoHera() {
  return (
    /**
     * Uso react.fragment como se fosse uma div
     * React rendereza apenas um componente inteiro
     **/
    <React.Fragment>
      <WelcomeDialog />
      <SplitPane left={<Contacts />} right={<Chat />} />
      <SignUpDialog />
    </React.Fragment>
  );
}

ReactDOM.render(<CompoHera />, document.getElementById("compoHera"));
/* *
 *
 *  Fim tópico
 *
 *
 * */

function SearchBar(props) {
  return (
    <form className="form">
      <div>
        <input
          placeholder="Search..."
          name="value"
          className="form__input"
          type="text"
        />
      </div>
      <div>
        <label className="form__label">
          <input type="checkbox" name="check" />
          Only show products in stock
        </label>
      </div>
    </form>
  );
}

function ProductTable(props) {
  return (
    <table className="Table">
      <thead className="table__content">
        <tr className="table__line">
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
    </table>
  );
}

function ProductCategoryRow(props) {
  return (
    <tbody className="table__content">
      <tr className="table__line--category">
        <td colSpan="2">Sporting Goods</td>
      </tr>
    </tbody>
  );
}

function ProductRow(props) {
  return (
    <tr className="table__line">
      <td className="table__column--production" />
      <td className="table__column--price" />
    </tr>
  );
}
class FilterableProductTable extends React.Component {
  render() {
    return (
      <div className="Container">
        <SearchBar />
        <ProductTable>
          <ProductCategoryRow>
            <ProductRow />
          </ProductCategoryRow>
        </ProductTable>
      </div>
    );
  }
}

ReactDOM.render(
  <FilterableProductTable />,
  document.getElementById("jeitoReact")
);

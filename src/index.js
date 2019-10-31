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

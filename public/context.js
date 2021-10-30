const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);
const CurrentUserContext = React.createContext(null);

function Card(props) {
  function classes() {
    const bg = props.bgcolor ? " bg-" + props.bgcolor : " ";
    const txt = props.txtcolor ? " text-" + props.txtcolor : " text-white";
    return "card mb-3 " + bg + txt + " text-center" + " border-light";
  }

  return (
    <div className={classes()} style={{ maxWidth: "18rem" }}>
      <div className="card-header">{props.header}</div>
      <div className="card-body">
        {props.title && <h5 className="card-title">{props.title}</h5>}
        {props.text && <p className="card-text">{props.text}</p>}
        {props.body}
        {props.status && <div id="createStatus">{props.status}</div>}
      </div>
    </div>
  );
}

function HomePage(props) {
  function classes() {
    const bg = props.bgcolor ? " bg-" + props.bgcolor : " ";
    const txt = props.txtcolor ? " text-" + props.txtcolor : " text-white";
    return "card mb-3 " + bg + txt + " text-center" + " border-light";
  }

  return (
    <div className="container">
      <h1 className="text-center">Welcome to the Dashbank</h1>
      <h5 className="text-center">We dash with your cash</h5>
      <img
        src="logo.png"
        className="img-fluid rounded mx-auto d-block"
        alt="Responsive image"
        style={{ maxWidth: "40%" }}
      />
      <div className="card-body">
        {props.body}
        <a
          className="btn btn-secondary col col-md-2 offset-md-3"
          href="#/CreateAccount/"
        >
          Create Account
        </a>
        <a className="btn btn-outline-dark m-3 col col-md-2 " href="#/login/">
          Login
        </a>
        <a
          className="btn btn-outline-dark m-3 col col-md-2 "
          href="#/CreateAccount/"
        >
          Google Logging
        </a>
      </div>
    </div>
  );
}

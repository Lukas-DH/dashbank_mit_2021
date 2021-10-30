function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");

  if (firebase.apps.length === 0) {
    var firebaseConfig = {
      apiKey: "AIzaSyDnJpIQQYWat2S76q64Dh0YhsCzlQ9Es0k",
      authDomain: "courso-cbffb.firebaseapp.com",
      databaseURL:
        "https://courso-cbffb-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "courso-cbffb",
      storageBucket: "courso-cbffb.appspot.com",
      messagingSenderId: "895232061386",
      appId: "1:895232061386:web:b1bd1ad8239b8e509c2933",
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  console.log(show);

  return (
    <>
      <div className="d-flex justify-content-center">
        <Card
          txtcolor="txtcolor"
          header="Create Account"
          bgcolor="light"
          status={status}
          body={
            show ? (
              <CreateForm setShow={setShow} />
            ) : (
              // "WINNER"
              <CreateMsg setShow={setShow} />
            )
          }
        />
      </div>
    </>
  );
}

function CreateMsg(props) {
  return (
    <>
      <h5>Success</h5>
      <a type="submit" className="btn btn-secondary" href="#/login/">
        Go to login
      </a>
    </>
  );
}

function CreateForm(props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [balance, setBalance] = React.useState(100);
  const ctx = React.useContext(UserContext);

  function handle() {
    console.log(name, email, password);
    // ctx.users.push({ name, email, password, balance });

    const url = `/account/create/${name}/${email}/${password}/`;
    (async () => {
      var res = await fetch(url);
      var data = await res.json();
      console.log(data);
    })();

    const auth = firebase.auth();
    const promise = auth.createUserWithEmailAndPassword(email, password);
    promise.catch((e) => console.log(e.message));

    props.setShow(false);
  }

  return (
    <>
      <input
        type="input"
        className="form-control"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
      />
      <br />
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />{" "}
      <br />
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />{" "}
      <br />
      <button type="submit" className="btn btn-secondary" onClick={handle}>
        Submit
      </button>
      <a className=" ml-3 btn btn-outline-dark" href="#">
        back home
      </a>
    </>
  );
}

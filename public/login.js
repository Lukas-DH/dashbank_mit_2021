function Login() {
  const cUser = React.useContext(CurrentUserContext);
  const [show, setShow] = React.useState(cUser.user[0].currentUser);
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

  console.log(cUser.user[0].currentUser);
  console.log(show);

  return (
    <>
      <div className="d-flex justify-content-center">
        <Card
          txtcolor="dark"
          header="Login"
          bgcolor="light"
          status={status}
          body={
            show ? (
              <LoginForm setShow={setShow} setStatus={setStatus} />
            ) : (
              // "WINNER"
              <LoginMsg setShow={setShow} setStatus={setStatus} />
            )
          }
        />
      </div>
    </>
  );
}
// lukas@open-ivf.com
function LoginMsg(props) {
  const auth = firebase.auth();
  const cUser = React.useContext(CurrentUserContext);
  function handle() {
    cUser.user[0].currentUser = true;
    props.setShow(true);

    auth
      .signOut()
      .then(() =>
        console.log("user is logged in: ", !cUser.user[0].currentUser)
      );
  }

  return (
    <>
      <p>
        you are logged in as <br />
      </p>
      <h5> {auth.currentUser.email}</h5>
      <button type="submit" className="btn btn-secondary m-2" onClick={handle}>
        Log out
      </button>
      <a type="submit" className="btn btn-outline-dark m-2" href="#/balance/">
        Go to your balance
      </a>
    </>
  );
}

function LoginForm(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const cUser = React.useContext(CurrentUserContext);

  const auth = firebase.auth();
  function handle() {
    console.log(email, password, auth);

    const promise = auth.signInWithEmailAndPassword(email, password);
    promise
      .catch((e) => console.log(e.message))
      .then(() => {
        if (auth.currentUser) {
          cUser.user[0].currentUser = false;
          props.setShow(false);

          console.log("currentuser: ", auth.currentUser.email);
        } else {
          console.log("user did not loggin properly");
        }
        console.log("user is logged in: ", !cUser.user[0].currentUser);
      });
  }

  return (
    <>
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

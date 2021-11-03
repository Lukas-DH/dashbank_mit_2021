function Balance() {
  // const atmObject = React.useContext(UserContext);
  const cUser = React.useContext(CurrentUserContext);

  // cUser.user[0].currentUser;
  const [show, setShow] = React.useState(!cUser.user[0].currentUser);
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

  return (
    <div className="d-flex justify-content-center">
      <Card
        bgcolor="light"
        txtcolor="dark"
        header="Balance"
        status={status}
        body={
          show ? (
            <BalanceForm
              setShow={setShow}
              setStatus={setStatus}

              // currentUser={currentUser}
              // setCurrentUser={setCurrentUser}
            />
          ) : (
            <BalanceMsg setShow={setShow} setStatus={setStatus} />
          )
        }
      />
    </div>
  );
}

function BalanceMsg(props) {
  return (
    <>
      <h5>You are not logged in!</h5>
      <a type="submit" className="btn btn-outline-dark" href="/#/login">
        Go to Log in page
      </a>
    </>
  );
}

function BalanceForm(props) {
  const [amount, setAmount] = React.useState("");
  const auth = firebase.auth();
  const [data, setData] = React.useState("");

  fetch(`/account/find/${auth.currentUser.email}`)
    .then((response) => response.json())
    .then((data) => {
      setData(data[0].balance);
    });

  function handle() {
    fetch(`/account/update/${auth.currentUser.email}/${amount}`)
      .then((response) => response.text())
      .then((text) => {
        try {
          const data = JSON.parse(text);
          props.setStatus(
            `Hurray!, you balance has been updated to ${JSON.stringify(
              data.value.balance
            )}`
          );

          // props.setShow(false);
          // props.setCurrentUser(data.value);
          console.log("JSON:", data);
          console.log("HEY ZYOU HIT ME:", data);
        } catch (err) {
          props.setStatus("Balance failed");
          console.log("err:", text);
        }
      });
  }

  return (
    <>
      <p>Your balance is : {data}</p>
      <input
        type="hidden"
        className="form-control"
        // value={props.currentUser.email}
      />

      <br />

      <a type="submit" className="btn btn-outline-dark m-2" href="/#/deposit">
        make a deposit
      </a>
      <a type="submit" className="btn btn-outline-dark m-2" href="/#/withdraw">
        make a withdraw
      </a>
      {/* <input
        type="number"
        className="form-control"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.currentTarget.value)}
      />
      <br />
      <button type="submit" className="btn btn-light" onClick={handle}>
        Withdraw
      </button> */}
    </>
  );
}

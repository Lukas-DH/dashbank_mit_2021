function Deposit() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");

  return (
    // <Card
    //   bgcolor="warning"
    //   header="Deposit"
    //   status={status}
    //   body={
    //     show ? (
    //       <DepositForm setShow={setShow} setStatus={setStatus} />
    //     ) : (
    //       <DepositMsg setShow={setShow} />
    //     )
    //   }
    // />
    <>
      <h1 id="loggedInStatus">You are not yet logged in</h1>
      <hr />
      <input id="email" type="email" placeholder="Email" />
      <br />
      <input id="password" type="password" placeholder="Password" />
      <br />

      <br />
      <button id="login">Login</button>
      <button id="signup">SignUp</button>
      <button id="googlelogin">google login</button>
      <button id="logout" style={{ display: "none" }}>
        Logout
      </button>
    </>
  );
}

function DepositMsg(props) {
  return (
    <>
      <h5>Success</h5>
      <button
        type="submit"
        className="btn btn-light"
        onClick={() => props.setShow(true)}
      >
        Deposit again
      </button>
    </>
  );
}

function DepositForm(props) {
  const [email, setEmail] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const ctx = React.useContext(UserContext);

  function handle() {
    const user = ctx.users.find((user) => user.email == email);
    if (!user) {
      props.setStatus("fail!");
      return;
    }

    user.balance = user.balance + Number(amount);
    console.log(user);
    props.setStatus(
      "you deposited " +
        amount +
        " euro and you balance is " +
        user.balance +
        "."
    );
    props.setShow(false);
  }

  return (
    <>
      Email
      <br />
      <input
        type="input"
        className="form-control"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.currentTarget.value)}
      />
      <br />
      <input
        type="input"
        className="form-control"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.currentTarget.value)}
      />
      <br />
      <button type="submit" className="btn btn-light" onClick={handle}>
        Deposit
      </button>
    </>
  );
}

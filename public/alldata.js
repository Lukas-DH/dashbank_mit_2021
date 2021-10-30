// const { response } = require("express");

function AllData() {
  // const ctx = React.useContext(UserContext);
  const [data, setData] = React.useState("");
  const cUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    fetch("/account/all")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(JSON.stringify(data));
      });
  }, []);
  return (
    <>
      <h1>all data {data}</h1>
      <br />
      <h1>all data {JSON.stringify(cUser)}</h1>
    </>
  );
}

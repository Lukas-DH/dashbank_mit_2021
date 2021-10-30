function Home() {
  const [show, setShow] = React.useState(true);
  // (function () {
  //   // Your web app's Firebase configuration
  //   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  //   var firebaseConfig = {
  //     apiKey: "AIzaSyDnJpIQQYWat2S76q64Dh0YhsCzlQ9Es0k",
  //     authDomain: "courso-cbffb.firebaseapp.com",
  //     databaseURL:
  //       "https://courso-cbffb-default-rtdb.europe-west1.firebasedatabase.app",
  //     projectId: "courso-cbffb",
  //     storageBucket: "courso-cbffb.appspot.com",
  //     messagingSenderId: "895232061386",
  //     appId: "1:895232061386:web:b1bd1ad8239b8e509c2933",
  //   };
  //   // Initialize Firebase
  //   firebase.initializeApp(firebaseConfig);

  //   // get elements
  //   const email = document.getElementById("email");
  //   const password = document.getElementById("password");
  //   const login = document.getElementById("login");
  //   const signup = document.getElementById("signup");
  //   const logout = document.getElementById("logout");
  //   const loggedInStatus = document.getElementById("loggedInStatus");
  //   const googlelogin = document.getElementById("googlelogin");

  //   //TODO: Add Google Sign in

  //   // login
  //   login.addEventListener("click", (e) => {
  //     const auth = firebase.auth();
  //     const promise = auth.signInWithEmailAndPassword(
  //       email.value,
  //       password.value
  //     );
  //     promise.catch((e) => console.log(e.message));
  //   });

  //   // signup
  //   signup.addEventListener("click", (e) => {
  //     // TODO: check for real email
  //     const auth = firebase.auth();
  //     const promise = auth.createUserWithEmailAndPassword(
  //       email.value,
  //       password.value
  //     );
  //     promise.catch((e) => console.log(e.message));
  //   });
  //   googlelogin.addEventListener("click", (e) => {
  //     console.log("google clicked");
  //     var provider = new firebase.auth.GoogleAuthProvider();
  //     firebase
  //       .auth()
  //       .signInWithPopup(provider)
  //       .then(function (result) {
  //         console.log(
  //           `You are logged in using the following email: ${result.user.email}`
  //         );
  //       })

  //       .catch(function (error) {
  //         console.log(error.code);
  //         console.log(error.message);
  //       });
  //   });

  //   // logout
  //   logout.addEventListener("click", (e) => {
  //     firebase.auth().signOut();
  //   });

  //   // login state
  //   firebase.auth().onAuthStateChanged((firebaseUser) => {
  //     if (firebaseUser) {
  //       console.log(firebaseUser);
  //       loggedInStatus.innerText = `You are logged in using the following email: ${firebaseUser.email}`;
  //       logout.style.display = "inline";
  //       login.style.display = "none";
  //       signup.style.display = "none";
  //       email.style.display = "none";
  //       password.style.display = "none";
  //       googlelogin.style.display = "none";
  //     } else {
  //       console.log("User is not logged in");
  //       loggedInStatus.innerText = "You are not yet logged in";
  //       login.style.display = "inline";
  //       signup.style.display = "inline";
  //       email.style.display = "inline";
  //       googlelogin.style.display = "inline";
  //       password.style.display = "inline";
  //       logout.style.display = "none";
  //     }
  //   });
  // })();

  return (
    <>
      <HomePage />
    </>
  );
}

// <Card
//   txtcolor="black"
//   header="BadBank Landing Module"
//   title="Welcome to the bank"
//   text="You can move around using the navigation bar."
//   body={
//     <img src="logo.png" className="img-fluid" alt="Responsive image" />
//   }
// />;

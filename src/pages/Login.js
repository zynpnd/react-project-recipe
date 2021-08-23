import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

// lgin olma kısmı
const Login = ({ setisLoggedIn }) => {
  console.log("render oldu");

  const history = useHistory();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [users, setusers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [validate, setValidate] = useState(true);

  console.log(validate);

  let isLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));

  //   bütün kullanıcılar çekiliyor
  useEffect(() => {
    if (!users.length) {
      fetch("userData.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => setusers(data));
    }
  }, []);

  //   form bilgisi değişimi
  const formHandleChange = ({ target }) => {
    setUser({ ...user, [target.name]: target.value });
  };

  //   Kontrol
  const onSubmit = (e) => {
    e.preventDefault();

    const thisUser = users.filter(
      (value) =>
        value.username === user.username && value.password === user.password
    );
    setCurrentUser(thisUser);

    if (!thisUser.length) {
      setValidate(false);
    } else {
      setValidate(true);
    }
  };

  useEffect(() => {
    if (currentUser !== null && currentUser && currentUser.length) {
      console.log("giriş başarılı");
      localStorage.setItem("isLoggedIn", JSON.stringify(currentUser));
      setisLoggedIn(true);
      history.push("/");
    }
  }, [currentUser]);

  return (
    <div className="login-wrapper">
      <form className="login-form" action="" onSubmit={onSubmit}>
        <div className="login-icon-wrapper">
          <i class="fas fa-utensils">
            {" "}
            <br />
            Recipe App
          </i>
        </div>
        <div>
          <input
            id="username"
            className="user-name-input"
            type="text"
            name="username"
            value={user.username}
            onChange={formHandleChange}
            placeholder="username"
          />
        </div>
        <div>
          <input
            id="password"
            className="password-input"
            type="password"
            name="password"
            value={user.password}
            onChange={formHandleChange}
            placeholder="password"
          />
        </div>
        <button className="login-submit-button">Login</button>
        {validate === false ? <div>Böyle bir kullanıcı yoktur</div> : null}
      </form>
    </div>
  );
};

export default Login;

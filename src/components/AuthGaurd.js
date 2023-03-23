/* eslint-disable */

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyContext from "../context/MyContext";

const logIn = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({firstName: "Gaston", lastName: "Che"}), 5000)
  })
}

const AuthGaurd = (Component) => {
  return function Gaurd(props) {
    const {loadingAime, setLoadingAime} = useContext(MyContext);
    const [user, setUser] = useState();
    const navigate = useNavigate();

    useEffect(() => {
      setLoadingAime(true);
      logIn()
        .then(setUser)
        .catch(() => {
          console.log("user not logged in");
          navigate("/login", {replace: true});
        })
        .finally(() => setLoadingAime(false));
    }, []);

    if(loadingAime) return <>loading user...</>;

  return user ? <Component {...props} user={user} /> : <>redirecting...</>;
  };
};

export default AuthGaurd;

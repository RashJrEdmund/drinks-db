/* eslint-disable */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const logIn = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({firstName: "Gaston", lastName: "Che"}), 5000);
  })
}

const AuthGaurd = (Component) => {
  return function Gaurd(props) {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState();
    const navigate = useNavigate();

    useEffect(() => {
      setIsLoading(true);
      logIn()
        .then(setUser)
        .catch(() => {
          console.log("user not logged in");
          navigate("/login", {replace: true});
        })
        .finally(() => setIsLoading(false));
    }, []);

    if(isLoading) return <>loading user...</>;

    return user ? <Component {...props} user={user} /> : <>redirecting...</>;
  };
};

export default AuthGaurd;

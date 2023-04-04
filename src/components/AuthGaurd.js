/* eslint-disable */

import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../api/authentication";
import { MyContext } from "../context/MyContext";

// const logIn = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve({firstName: "Gaston", lastName: "Che"}), 2000);
//   });
// }

const AuthGaurd = (Component) => {
  return function Gaurd(props) {
    const { customAlert, setLoadingAnime } = useContext(MyContext)
    const [currentUser, setCurrentUser] = useState();
    const navigate = useNavigate();

    useEffect(() => {
      setLoadingAnime({message: 'Loadding user...', show: true})
      getCurrentUser()
        .then((res)=> {
          console.log('this res', res)
          setCurrentUser(res);
        })
        .catch(() => {
          customAlert("User not logged in");
          navigate("/login", {replace: true});
        })
        .finally(() => 
        setLoadingAnime({message: '', show: false}));
    }, []);

    return <Component {...props} currentUser={currentUser} />;
  };
};

export default AuthGaurd;

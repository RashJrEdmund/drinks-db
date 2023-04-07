/* eslint-disable */

import { useEffect, useState, useContext } from "react";
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
    const [loadedUser, setLoadedUser] = useState();

    useEffect(() => {
      setLoadingAnime({message: 'getting user...', show: true})
      getCurrentUser()
        .then((res)=> {
          console.log('this res', res)
          setLoadedUser(res);
        })
        .catch((e) => {
          console.log('this the error', e);
          customAlert("you are not logged in");
        })
        .finally(() => 
        setLoadingAnime({message: '', show: false}));
    }, []);

    return <Component {...props} currentUser={loadedUser} />;
  };
};

export default AuthGaurd;
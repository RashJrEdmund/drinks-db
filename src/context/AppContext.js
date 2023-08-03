/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useContext } from 'react';
import useLoader from '../hooks/useLoader';
import useDialogue from '../hooks/useDialogue';
import useModal from '../hooks/UseModal/useModal';
import useAlert from '../hooks/useAlert';

const AppContext = React.createContext();

export function AppContextProvider({ children }) {
  const [filterData, setFilterData] = React.useState([]);

  const [zoomPhoto, setZoomPhoto] = React.useState(false);

  const [showMenu, setShowMenu] = React.useState({
    side: false,
    dropDown: false,
  });

  const { dialogueDetails } = useDialogue();

  const { itemModal } = useModal();

  const { LoadingComponent, setLoadingAnime, loadingAnime } = useLoader();

  const { AlertComponet, customAlert, alertMsg } = useAlert(); // will use it only at the top level

  const toggleBodyOverFlow = () => {
    document.body.style.overflow =
      document.body.style.overflow === 'hidden' ? 'unset' : 'hidden';
  };

  const bodyref = React.useRef();

  React.useEffect(() => {
    toggleBodyOverFlow();
  }, [dialogueDetails.show, loadingAnime.show, itemModal.show, zoomPhoto]);

  return (
    <AppContext.Provider
      value={{
        AlertComponet,
        customAlert,
        alertMsg,

        LoadingComponent,
        setLoadingAnime,
        loadingAnime,

        showMenu,
        setShowMenu,

        filterData,
        setFilterData,

        zoomPhoto,
        setZoomPhoto,

        bodyref,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);

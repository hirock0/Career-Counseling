import { onAuthStateChanged, signOut } from "firebase/auth";
import { AOS_Animation } from "../utils/AOS.Config.js/AOS.Config";
import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../lib/firebase_config/firebase.config";
const ProviderContext = createContext();
export const useAppContext = () => {
  return useContext(ProviderContext);
};
const ContextApi = ({ children }) => {
  const [theme, setTheme] = useState(false);
  const [navMenuFlag, setNavMenuFlag] = useState(false);
  const [sliderData, setSliderData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loggedUser, setLoggedUser] = useState(null);
  const [profileFlag, setProfileFlag] = useState(false);
  const [servicesCardData, setServicesCardData] = useState(null);
  const [updateProfileFlag, setUpdateProfileFlag] = useState(false);
  const [stateEmail, setStateEmail] = useState(null);
  const [specialists, setSpecialists] = useState(null);

  useEffect(() => {
    const response = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedUser(user.providerData[0]);
        setLoading(false);
      } else {
        setLoggedUser(null);
      }
    });
    return () => response();
  }, []);

  useEffect(() => {
    const unsubscribe = () => {
      fetch("/Api/AllData.json")
        .then((data) => data.json())
        .then((api) => {
          setLoading(false),
            setSliderData(api?.Sliders),
            setServicesCardData(api?.services);
          setSpecialists(api?.specialists);
        })
        .catch((error) => {
          return error.message;
        });
    };

    window.addEventListener("click", () => {
      setNavMenuFlag(false);
      setProfileFlag(false);
    });

    unsubscribe();
    return () => unsubscribe();
  }, [loading]);

  useEffect(() => {
    AOS_Animation;
    const themeChange = () => {
      if (!theme) {
        document.documentElement.setAttribute("data-theme", "light");
      } else {
        document.documentElement.setAttribute("data-theme", "dark");
      }
    };
    themeChange();

    const onUpdateProfilePopup = () => {
      if (updateProfileFlag) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };
    onUpdateProfilePopup();
    return () => {
      themeChange(), onUpdateProfilePopup();
    };
  }, [theme, updateProfileFlag]);

  const values = {
    theme,
    setTheme,
    navMenuFlag,
    setNavMenuFlag,
    sliderData,
    setSliderData,
    loading,
    setLoading,
    loggedUser,
    setLoggedUser,

    profileFlag,
    setProfileFlag,
    servicesCardData,
    setServicesCardData,
    updateProfileFlag,
    setUpdateProfileFlag,
    stateEmail,
    setStateEmail,
    specialists,
    setSpecialists,
  };

  return (
    <ProviderContext.Provider value={values}>
      {children}
    </ProviderContext.Provider>
  );
};

export default ContextApi;

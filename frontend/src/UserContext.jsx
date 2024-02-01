import React, { createContext, useContext, useMemo } from "react";
import PropTypes from "prop-types";
import useLocalStorage from "./components/hook/useLocalStorage";

// Étape 1 : créer un context "React" basique
export const InfosContext = createContext();

// Étape 2 : créer le provider de mon context
export function InfoProvider({ children }) {
  const [userData, setUserData] = useLocalStorage("user", null);
  const login = (userInfo) => {
    setUserData(userInfo);
  };
  const logout = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/logout`,
        {
          method: "get",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        }
      );

      // Redirection vers la page de connexion si la création réussit
      if (response.status === 200) {
        setUserData(null);
      } else {
        // Log des détails de la réponse en cas d'échec
        console.info(response);
      }
    } catch (err) {
      // Log des erreurs possibles
      console.error(err);
    }
  };
  const contextValue = useMemo(() => {
    return { logout, login, userData };
  }, [userData]);

  return (
    <InfosContext.Provider value={contextValue}>
      {children}
    </InfosContext.Provider>
  );
}

// Étape 3 : créer un hook pour récupérer les valeurs du context depuis
// n'importe quel composant dans l'application
export const useInfosContext = () => useContext(InfosContext);

InfoProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

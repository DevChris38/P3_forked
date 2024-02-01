import { useState, useEffect } from "react";

// Fonction utilitaire pour récupérer la valeur du localStorage
function getStorageValue(key, defaultValue) {
  // Récupérer la valeur du localStorage associée à la clé spécifiée, ou une chaîne vide si elle n'existe pas
  let saved = localStorage.getItem(key) || "";

  // Vérifier si la valeur semble être un objet JSON en examinant le début de la chaîne
  if (saved.startsWith("{") || saved.startsWith("[")) saved = JSON.parse(saved);

  // Retourner la valeur du localStorage ou la valeur par défaut fournie
  return saved || defaultValue;
}

// Hook personnalisé useLocalStorage
const useLocalStorage = (key, defaultValue) => {
  // Utiliser le hook useState pour créer un état local avec la valeur initiale récupérée du localStorage
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  // Utiliser le hook useEffect pour effectuer des actions lorsque la valeur de l'état change
  useEffect(() => {
    // Convertir la valeur en chaîne JSON si elle est un objet, sinon la laisser telle quelle
    const storedVal = typeof value === "object" ? JSON.stringify(value) : value;

    // Mettre à jour la valeur dans le localStorage associée à la clé spécifiée
    localStorage.setItem(key, storedVal);
  }, [value, key]); // Exécuter useEffect lorsque la valeur de l'état ou la clé change
  // Retourner un tableau contenant la valeur actuelle et la fonction pour mettre à jour cette valeur
  return [value, setValue];
};

// Exporter le hook personnalisé useLocalStorage pour l'utiliser ailleurs dans l'application
export default useLocalStorage;

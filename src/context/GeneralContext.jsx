import React, { createContext, useState, useContext } from "react";

// Context oluşturuluyor
const GeneralContext = createContext();

// Provider component
export const GeneralProvider = ({ children }) => {
  const [leftState, setLeftState] = useState(false); // leftState ve setLeftState
  const [selectedCat, setSelectedCat] = useState("Tümü");

  return (
    <GeneralContext.Provider
      value={{ leftState, setLeftState, selectedCat, setSelectedCat }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

// useContext hook'u, context'i kullanmak için
export const useGeneralContext = () => useContext(GeneralContext);

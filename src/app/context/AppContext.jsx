"use client";
import { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [mode, setMode] = useState(null); 

  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    setMode(savedMode || "light");
  }, []);

  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode) {
      setMode(savedMode);
    }
  }, [mode]);

  if (mode === null) return null; 

  return (
    <AppContext.Provider value={{ mode, setMode }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

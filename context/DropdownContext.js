import React, { createContext, useContext, useState } from "react";

const DropdownContext = createContext();

export const useDropdownContext = () => {
  return useContext(DropdownContext);
};

export const DropdownContextProvider = ({ children }) => {
  const [status, setStatus] = useState(false);
  const value = {
    status,
    setStatus,
  };

  return (
    <DropdownContext.Provider value={value}>
      {children}
    </DropdownContext.Provider>
  );
};

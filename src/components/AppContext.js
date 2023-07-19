import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [title, setTitle] = useState("@andreb308");
  const [textVisibility, setTextVisibility] = useState(true);

  return (
    <AppContext.Provider
      value={{ title, setTitle, textVisibility, setTextVisibility }}
    >
      {children}
    </AppContext.Provider>
  );
};

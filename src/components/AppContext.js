import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const queryParameters = new URLSearchParams(window.location.search);
  const searchParam = queryParameters.get("title");
  const visibilityParam = parseInt(queryParameters.get("visible"));
  const [title, setTitle] = useState(searchParam || "@andreb308");
  const [textVisibility, setTextVisibility] = useState(visibilityParam ? true : false);

  return (
    <AppContext.Provider
      value={{ title, setTitle, textVisibility, setTextVisibility }}
    >
      {children}
    </AppContext.Provider>
  );
};

import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const queryParameters = new URLSearchParams(window.location.search);
  const searchParam = queryParameters.get("title");

  let visibilityParam = queryParameters.get("visible");
  switch (visibilityParam) {
    case "0":
      visibilityParam = false;
      break;
    case "false":
      visibilityParam = false;
      break;
    default:
      visibilityParam = true;
  }

  const [title, setTitle] = useState(searchParam || "@andreb.jpg");
  const [textVisibility, setTextVisibility] = useState(visibilityParam);

  return (
    <AppContext.Provider
      value={{ title, setTitle, textVisibility, setTextVisibility }}
    >
      {children}
    </AppContext.Provider>
  );
};

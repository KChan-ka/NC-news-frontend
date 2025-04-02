import { createContext, useState } from "react";

export const currentUserContext = createContext();

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <>
      <currentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        {children}
      </currentUserContext.Provider>
    </>
  );
};

import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const AppContext = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageId, setPageId] = useState(null);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <GlobalContext.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar, pageId, setPageId }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
export const useGlobalContext = () => useContext(GlobalContext);

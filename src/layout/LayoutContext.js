import React, { createContext, useContext, useState } from "react";

const LayoutContext = createContext();
export const useLayout = () => useContext(LayoutContext);
export default function LayoutProvider({ children }) {
  const [open, setOpen] = useState(true);
  const [openRight, setOpenRight] = useState(false);
  function toggleSidebar() {
    setOpen(!open);
  }
  function toggleRightSidebar() {
    setOpenRight(!openRight);
  }
  return (
    <LayoutContext.Provider value={{ open, openRight, toggleSidebar, toggleRightSidebar  }}>
      {children}
    </LayoutContext.Provider>
  );
}

import React, { createContext, useContext, useState, useEffect, useRef } from "react";

const OnLoadContext = createContext();

export function useOnLoad() {
  const context = useContext(OnLoadContext);
  if (context === undefined) {
    throw new Error('useOnLoad must be used within a StoreProvider');
  }
  return context;
}

export default function StoreProvider({ children }) {
  const [onLoad, setOnLoadState] = useState(true);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      // Skip the initial render
      isInitialMount.current = false;
    } else {
      // Only update sessionStorage after first render
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('hasAnimated', String(!onLoad));
      }
    }
  }, [onLoad]);

  // Handle page refresh
  useEffect(() => {
    const handleBeforeUnload = () => {
      // Clear the flag when page is being refreshed
      sessionStorage.removeItem('hasAnimated');
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const setOnLoad = (value) => {
    setOnLoadState(value);
  };

  return (
    <OnLoadContext.Provider value={{ onLoad, setOnLoad }}>
      {children}
    </OnLoadContext.Provider>
  );
}

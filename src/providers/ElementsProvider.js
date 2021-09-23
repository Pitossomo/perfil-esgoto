import React, { createContext, useState } from 'react';

export const ElementsContext = createContext({
  elements: [],
});

const ElementsProvider = ({children}) => {
  const [elements, setElements] = useState([
    {
      id: 1,
      nt1: 10,
      prof1: 1.3,
      nt2: 9,
      prof2: 1.8,
      dist: 80,
      diam: 100,
    },
    {
      id: 2,
      nt1: 9,
      prof1: 2,
      nt2: 8,
      prof2: 2,
      dist: 60,
      diam: 100,
    },
    {
      id: 3,
      nt1: 8,
      prof1: 2,
      nt2: 5,
      prof2: 1.3,
      dist: 80,
      diam: 150,
    }
  ])
  
  const contextValue = {
    elements,
    setElements,
  }

  return (
    <ElementsContext.Provider value={contextValue}>
      {children}
    </ElementsContext.Provider>
  );
}

export default ElementsProvider;
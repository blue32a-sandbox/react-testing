import React, { createContext, useContext } from 'react';

export const CountContext = createContext<number>(0);

export default function Count() {
  const count = useContext(CountContext);

  return <div role="main">{count}</div>
}

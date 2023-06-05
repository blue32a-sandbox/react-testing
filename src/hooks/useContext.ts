import { createContext, useContext, useState } from 'react';

export const CountContext = createContext<number>(0);

export const useCount = () => {
  const defaultCount = useContext(CountContext);
  const [count, setCount] = useState(defaultCount);

  return count;
}

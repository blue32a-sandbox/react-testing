import { useEffect, useState } from 'react';

export const useStringWithSync = (defualtString: string) => {
  const [str, setStr] = useState(defualtString);
  useEffect(() => {
    setStr('setted in useEffect');
  }, []);

  return str;
}

export const useStringWithAsync = (defualtString: string) => {
  const [str, setStr] = useState(defualtString);
  useEffect(() => {
    Promise.resolve('setted in useEffect').then(name => setStr(name));
  }, []);

  return str;
};

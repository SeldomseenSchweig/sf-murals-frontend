import { useEffect, useState } from "react";

function useLocalStorage(key, firstValue = null) {
  console.log(key);
  const getInitialValue = () => {
    const storedValue = localStorage.getItem(key);
    if (storedValue === null) {
      return firstValue;
    }
    try {
      return JSON.parse(storedValue);
    } catch (e) {
      console.error("Error parsing JSON from localStorage", e);
      return firstValue;
    }
  };

  const [item, setItem] = useState(getInitialValue);

  useEffect(() => {
    console.debug("hooks useLocalStorage useEffect", "item=", item);

    if (item === null) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(item));
    }
  }, [key, item]);

  return [item, setItem];
}

export default useLocalStorage;

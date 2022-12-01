import react, {useEffect, useState} from "react";



function useLocalStorage(key, firstValue = null) {
    const initialValue = localStorage.getItem(key) || firstValue;
  
    const [item, setItem] = useState(JSON.parse(initialValue));
  
    useEffect(function setKeyInLocalStorage() {
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
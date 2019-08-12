import { useState } from "react";

// when saving something to state, same effect as useState. PLUS saving something to window.localStorage

// products, the state
// productsDate, the last time state was updated
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
  });
};

export default useLocalStorage;

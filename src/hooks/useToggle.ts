import { useState } from "react";

export const useToggle = (initialValue = false): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(initialValue);

  const toggle = () => {
    setState((state) => !state);
  };

  return [state, toggle];
};

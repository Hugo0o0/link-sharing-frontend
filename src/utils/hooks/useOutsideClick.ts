import { RefObject, useEffect } from "react";

const useOutsideClick = <T extends HTMLElement>(
  ref: RefObject<T>,
  callback: () => void
) => {
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
};

export default useOutsideClick;

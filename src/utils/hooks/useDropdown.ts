import React, { useContext } from "react";
import DropdownContext from "../../components/context/DropdownContext";

const useDropdown = () => {
  return useContext(DropdownContext);
};

export default useDropdown;

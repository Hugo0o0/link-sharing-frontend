import React, { useContext } from "react";
import SelectContext from "../../components/context/SelectContext";

const useSelect = () => {
  return useContext(SelectContext);
};

export default useSelect;

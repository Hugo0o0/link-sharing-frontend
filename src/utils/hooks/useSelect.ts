import SelectContext from "components/context/SelectContext";
import React, { useContext } from "react";

const useSelect = () => {
  return useContext(SelectContext);
};

export default useSelect;

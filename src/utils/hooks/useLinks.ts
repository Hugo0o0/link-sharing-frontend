import { useContext } from "react";
import LinksContext from "components/context/LinksContext";

const useLinks = () => {
  return useContext(LinksContext);
};

export default useLinks;

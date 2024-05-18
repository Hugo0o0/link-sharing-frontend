import { FC, PropsWithChildren, createContext, useState } from "react";
import { Link } from "types/types";

interface LinksContextProps {
  links: Link[] | null;
  setLinks: React.Dispatch<React.SetStateAction<Link[] | null>>;
}

const LinksContext = createContext<LinksContextProps>({
  links: null,
  setLinks: () => {},
});

export const LinksProvider: FC<PropsWithChildren> = ({ children }) => {
  const [links, setLinks] = useState<Link[] | null>(null);
  return (
    <LinksContext.Provider
      value={{
        links,
        setLinks,
      }}
    >
      {children}
    </LinksContext.Provider>
  );
};

export default LinksContext;

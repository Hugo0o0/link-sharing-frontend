import { FC, PropsWithChildren, createContext, useState } from "react";
import { PlatformName } from "../../@types/types";
interface Link {
  platform: PlatformName;
  link: string;
  id: number;
}
interface LinksContextProps {
  links?: Link[] | null;
  addLink: (name: PlatformName, link: string) => void;
  removeLink: (index: number) => void;
  setLinks: React.Dispatch<React.SetStateAction<Link[] | null>>;
}

const LinksContext = createContext<LinksContextProps>({
  links: null,
  addLink: () => {},
  removeLink: () => {},
  setLinks: () => {},
});

export const LinksProvider: FC<PropsWithChildren> = ({ children }) => {
  const [links, setLinks] = useState<Link[] | null>(null);

  const isAdded = (name: PlatformName) => {
    return links?.some((link) => link.platform === name);
  };

  const addLink = (name: PlatformName, link: string) => {
    setLinks((prev) => {
      if (!prev) return [{ platform: name, link, id: 1 }];

      return [...prev, { platform: name, link, id: prev.length + 1 }];
    });
  };

  const removeLink = (index: number) => {};
  return (
    <LinksContext.Provider
      value={{
        links,
        addLink,
        removeLink,
        setLinks,
      }}
    >
      {children}
    </LinksContext.Provider>
  );
};

export default LinksContext;

import { FC, PropsWithChildren } from "react";

interface PageProps {}
const Page: FC<PropsWithChildren<PageProps>> = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {props.children}
    </div>
  );
};

export default Page;

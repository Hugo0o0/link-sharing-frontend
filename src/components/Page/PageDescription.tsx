import React, { FC, PropsWithChildren } from "react";
import { Heading, Text } from "../UI";

interface PageDescriptionProps {
  title: string;
  description: string;
}
const PageDescription: FC<PageDescriptionProps> = ({ title, description }) => {
  return (
    <div>
      <Heading>{title}</Heading>
      <Text>{description}</Text>
    </div>
  );
};

export default PageDescription;

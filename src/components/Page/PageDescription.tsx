import { Heading, Text } from "components/UI";
import { FC } from "react";

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

import { Button, FormInput, Heading, Text } from "./components/UI";
import { CiUser } from "react-icons/ci";
import PlatformSelect from "./components/PlatformSelect/PlatformSelect";
import TabButton from "./components/TabButton/TabButton";
import { FaLink } from "react-icons/fa6";
import ImageUpload from "./components/ImageUpload/ImageUpload";

const App = () => {
  return (
    <div>
      <Heading size="s">Hello, world!</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.
        Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
      </Text>

      <FormInput icon={<CiUser size={25} />} placeholder="Text Field Empty" />
      <Button variant="primary">Hello World</Button>
      <PlatformSelect />
      <TabButton>
        <FaLink size={25} />
        <Heading size="s">Tab Button</Heading>
      </TabButton>

      <ImageUpload
        image="https://avatars.githubusercontent.com/u/59080216?s=400&u=ea72e1f7ef9f21e8efd42de8cdf9e1540fff9709&v=4"
        message="Upload your image"
      />
    </div>
  );
};

export default App;

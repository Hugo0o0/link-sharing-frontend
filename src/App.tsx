import { Button, FormInput, Heading, Text } from "./components/UI";
import { CiUser } from "react-icons/ci";
import PlatformSelect from "./components/PlatformSelect/PlatformSelect";
import ImageUpload from "./components/ImageUpload/ImageUpload";
import PlatformPreview from "./components/PlatformPreview/PlatformPreview";

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

      <ImageUpload message="Upload your image" />
      <PlatformPreview platform="youtube" />
    </div>
  );
};

export default App;

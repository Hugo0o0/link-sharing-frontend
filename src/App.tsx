import { Button, Dropdown, FormInput, Heading, Text } from "./components/UI";
import { CiUser } from "react-icons/ci";

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
      <Button disabled variant="secondary">
        Click Me
      </Button>

      <Dropdown
        onChange={(v) => {
          console.log(v);
        }}
      >
        <Dropdown.Button>Click Me</Dropdown.Button>
        <Dropdown.Items>
          <Dropdown.Item value={1}>
            <Text>Option 1</Text>
          </Dropdown.Item>
          <Dropdown.Item value={2}>Option 2</Dropdown.Item>
          <Dropdown.Item value={3}>Option 3</Dropdown.Item>
        </Dropdown.Items>
      </Dropdown>
    </div>
  );
};

export default App;

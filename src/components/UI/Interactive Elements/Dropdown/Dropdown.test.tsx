import { render } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("Dropdown component", () => {
  beforeEach(() => {
    render(
      <Dropdown>
        <Dropdown.Button>Button</Dropdown.Button>
        <Dropdown.Items>
          <Dropdown.Item value={1}>Item 1</Dropdown.Item>
          <Dropdown.Item value={2}>Item 2</Dropdown.Item>
          <Dropdown.Item value={3}>Item 3</Dropdown.Item>
        </Dropdown.Items>
      </Dropdown>
    );
  });
});

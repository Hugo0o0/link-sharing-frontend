import { render } from "@testing-library/react";
import Text from "./Text";

describe("Text component", () => {
  test("should render the text with the default font size", () => {
    render(<Text>Hello, world!</Text>);
    const text = document.querySelector("p");
    expect(text).toHaveStyle("font-size: 1.6rem");
  });
  test("should render the text with the s size", () => {
    render(<Text size="s">Hello, world!</Text>);
    const text = document.querySelector("p");
    expect(text).toHaveStyle("font-size: 1.2rem");
  });
});

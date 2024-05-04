import { render } from "@testing-library/react";
import Heading from "./Heading";

describe("Heading component", () => {
  test("should render the heading with the default size", () => {
    render(<Heading>Hello, world!</Heading>);
    const heading = document.querySelector("h1");
    expect(heading).toHaveStyle("font-size: 3.2rem");
  });
  test("should render the heading with the s size", () => {
    render(<Heading size="s">Hello, world!</Heading>);
    const heading = document.querySelector("h1");
    expect(heading).toHaveStyle("font-size: 1.6rem");
  });
});

import { render, screen } from "@testing-library/react";
import FormInput from "./FormInput";

beforeEach(() => {
  render(<FormInput error="Error Message" icon={<div>Icon</div>} />);
});

describe("FormInput", () => {
  test("check if the FormInput component is rendered correctly", () => {
    const FormInputElement = screen.getByRole("textbox");
    expect(FormInputElement).toBeInTheDocument();
  });
  test("check if the FormInput component is rendered correctly with an icon", () => {
    const FormInputElement = screen.getByRole("textbox");
    expect(FormInputElement).toHaveClass("input-with-icon");
  });

  test("check if the FormInput component is rendered correctly with an error", () => {
    const FormInputElement = screen.getByRole("textbox");
    expect(FormInputElement).toHaveClass("input-with-error");
  });
});

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import Select from "./Select";
import { wait } from "@testing-library/user-event/dist/utils";

describe("Select component", () => {
  beforeEach(() => {
    render(
      <Select value={2}>
        <Select.Button>Click Me</Select.Button>
        <Select.Items>
          <Select.Item value={1}>Item 1</Select.Item>
          <Select.Item value={2}>Item 2</Select.Item>
          <Select.Item value={3}>Item 3</Select.Item>
        </Select.Items>
      </Select>
    );
  });
  it("should render", () => {
    const selectElement = screen.getByTestId("select");
    expect(selectElement).toBeInTheDocument();
  });
  it("should toggle", async () => {
    const button = screen.getByRole("button", { name: "Click Me" });
    user.click(button);
    const items = await screen.findByTestId("select-items");
    expect(items).toBeInTheDocument();
    user.click(button);
    waitFor(() => {
      expect(items).not.toBeInTheDocument();
    });
  });
  it("should close", async () => {
    const button = await screen.findByRole("button", { name: "Click Me" });
    user.click(button);
    user.click(button);
    const items = screen.queryByTestId("select-items");
    await waitFor(() => {
      expect(items).not.toBeInTheDocument();
    });
  });
  it("should open", async () => {
    const button = screen.getByRole("button", { name: "Click Me" });
    user.click(button);
    const items = await screen.findByTestId("select-items");
    expect(items).toBeInTheDocument();
  });
});

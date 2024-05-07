import { render, screen } from "@testing-library/react";
import ImageUpload from "./ImageUpload";

describe("ImageUpload component", () => {
  it("should render correctly", () => {
    render(<ImageUpload />);
    const imageUpload = screen.getByTestId("image-upload");
    expect(imageUpload).toBeInTheDocument();
  });

  it("should render a button with an image", () => {
    render(<ImageUpload image="image.png" />);
    const imageUploadButtonWithImage = screen.getByTestId(
      "image-upload-button-with-image"
    );
    expect(imageUploadButtonWithImage).toBeInTheDocument();
  });

  it("should render a button with no image", () => {
    render(<ImageUpload />);
    const imageUploadButtonWithImage = screen.getByTestId(
      "image-upload-button-no-image"
    );
    expect(imageUploadButtonWithImage).toBeInTheDocument();
  });

  it("should render a message", () => {
    render(<ImageUpload message="Upload your image" />);
    const text = screen.getByTestId("text");
    expect(text).toBeInTheDocument();
  });
});

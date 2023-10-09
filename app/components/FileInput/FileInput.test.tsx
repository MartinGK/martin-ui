import { render, screen } from "@testing-library/react";
import { FileInput } from "./";

describe("FileInput ", () => {
  const { unmount } = render(<FileInput />);

  afterAll(() => {
    unmount();
  });

  test("'Drop files here' text is present", () => {
    const dropTitle = screen.getByText("Drop files here");
    expect(dropTitle).toBeInTheDocument();
  });

  test("input type file is present", () => {
    const fileInput = screen.getByLabelText("Drop files here or Choose a file");
    expect(fileInput).toBeInTheDocument();
    expect(fileInput).toHaveAttribute("type", "file");
    expect(fileInput).toHaveAttribute("accept", "image/*");
    expect(fileInput).toBeRequired();
  });
});

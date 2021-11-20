import HomePage from "../../pages/HomePage";
import { render, screen } from "../../test-utils/testing-library-utils";

it("Navigation menus arew present", () => {
  render(<HomePage />);

  const title = screen.getByTestId("home-title");
  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent(/welcome/i);
});

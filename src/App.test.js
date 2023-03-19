import { render } from "@testing-library/react";
import App from "./App";

test("renders learn header search and featured component", () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId("app-container")).toContainHTML("<h1>Movies App</h1>");
  expect(getByTestId("app-container")).toContainHTML(
    "<label class='form-label'>Search: </label>"
  );
  expect(getByTestId("app-container")).toContainHTML(
    "<h3>Featured Collection:</h3>"
  );
});

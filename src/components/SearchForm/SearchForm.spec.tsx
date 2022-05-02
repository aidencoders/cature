import "@testing-library/jest-dom/extend-expect";

import { cleanup, render, screen } from "../../utils/testUtils";

import SearchForm from ".";

afterEach(cleanup);
describe("SearchForm component test", () => {
  const setup = (props = {}) => {
    const searchForm = render(<SearchForm {...props} />);
    const button = screen.getByRole("button", { name: "Search" });

    return {
      ...searchForm,
      button,
    };
  };

  test("SearchForm component render", () => {
    const { button } = setup();

    expect(button).toHaveTextContent("Search");
  });
});

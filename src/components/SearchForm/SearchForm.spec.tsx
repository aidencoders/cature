import SearchForm from ".";
import { cleanup, fireEvent, render, screen } from "../../utils/testUtils";
import "@testing-library/jest-dom/extend-expect";

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

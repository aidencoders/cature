import { cleanup, render, screen } from "../../utils/testUtils";
import "@testing-library/jest-dom/extend-expect";

import Header from ".";

afterEach(cleanup);
describe("Header component test", () => {
  const setup = (props = {}) => {
    const searchForm = render(<Header {...props} />);
    const text = screen.getByText("😸 고양이 사진 갤러리 😻");

    return {
      ...searchForm,
      text,
    };
  };

  test("SearchForm component render", () => {
    const { text } = setup();

    expect(text).toHaveTextContent("😸 고양이 사진 갤러리 😻");
  });
});

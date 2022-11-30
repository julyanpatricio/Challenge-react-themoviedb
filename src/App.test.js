import { screen } from '@testing-library/react';
import App from "./App";
import {Render} from "./utils/testServer"

beforeAll(() => {
  Render(<App  />)
})

test('renders search movies button', () => {
  const button = screen.getByText(/Search movies/i);
  expect(button).toBeInTheDocument();
});

test("background-size in navbar should be cover", () => {
  const { container } = Render(<App />)
  
  const navbar = container.querySelector(".navbar")
  expect(navbar).toBeVisible()
  expect(navbar).toHaveStyle("background-size: cover")

});

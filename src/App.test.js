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

test("should not have the back button", () => {
  const { container } = Render(<App />)
  expect(container).toBeVisible()
});

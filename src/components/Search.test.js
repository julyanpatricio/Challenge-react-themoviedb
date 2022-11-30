import React from "react";
import Search from "./Search";
import { Render } from "../utils/testServer";
import '@testing-library/jest-dom'


test("renders movies search", () => {
  const {container} = Render(
      <Search />
  );
  const button = container.querySelector(".button-search")
  expect(button).toBeVisible()
  expect(button).toHaveClass("is-green")
  expect(button).toMatchSnapshot()
});

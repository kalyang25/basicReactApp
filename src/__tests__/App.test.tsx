import * as React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App  from "../App";

describe("<App /> Component", function () {
  it("should have React App with typescript message", function () {
    render(<App />);
    const text = screen.getByText("React App with typescript");
    expect(text).toHaveTextContent("React App with typescript");
  });
});
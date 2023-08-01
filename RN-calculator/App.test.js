import { render, fireEvent } from "@testing-library/react-native";
import App from "./App";
import renderer from "react-test-renderer";

test("Calculator performs addition correctly", () => {
  const { getByText } = render(<App />);

  fireEvent.press(getByText("1"));
  fireEvent.press(getByText("+"));
  fireEvent.press(getByText("2"));
  fireEvent.press(getByText("="));

  expect(getByText("1 + 2 = 3.00")).toBeTruthy();
});

test("Calculator performs subtraction correctly", () => {
  const { getByText } = render(<App />);

  fireEvent.press(getByText("5"));
  fireEvent.press(getByText("-"));
  fireEvent.press(getByText("3"));
  fireEvent.press(getByText("="));

  expect(getByText("5 - 3 = 2.00")).toBeTruthy();
});

test("Calculator performs multiplication correctly", () => {
  const { getByText } = render(<App />);

  fireEvent.press(getByText("4"));
  fireEvent.press(getByText("*"));
  fireEvent.press(getByText("3"));
  fireEvent.press(getByText("="));

  expect(getByText("4 * 3 = 12.00")).toBeTruthy();
});
test("Calculator performs division correctly", () => {
  const { getByText } = render(<App />);

  fireEvent.press(getByText("6"));
  fireEvent.press(getByText("/"));
  fireEvent.press(getByText("2"));
  fireEvent.press(getByText("="));

  expect(getByText("6 / 2 = 3.00")).toBeTruthy();
});
test("Calculator displays result with 2 decimal places", () => {
  const { getByText } = render(<App />);

  fireEvent.press(getByText("1"));
  fireEvent.press(getByText("/"));
  fireEvent.press(getByText("3"));
  fireEvent.press(getByText("="));

  expect(getByText("1 / 3 = 0.33")).toBeTruthy();
});
test("Calculator performs calculations with decimal numbers and 0", () => {
  const { getByText } = render(<App />);

  fireEvent.press(getByText("2"));
  fireEvent.press(getByText("."));
  fireEvent.press(getByText("5"));
  fireEvent.press(getByText("+"));
  fireEvent.press(getByText("0"));
  fireEvent.press(getByText("="));

  expect(getByText("2.5 + 0 = 2.50")).toBeTruthy();
});

test("Ensures only one decimal point is allowed per operand", () => {
  const { getByText } = render(<App />);

  fireEvent.press(getByText("1"));
  fireEvent.press(getByText("."));
  fireEvent.press(getByText("2"));
  fireEvent.press(getByText("."));
  fireEvent.press(getByText("3"));

  expect(getByText("1.23 =")).toBeDefined();
});

test("Calculator can display negative numbers", () => {
  const { getByText } = render(<App />);

  fireEvent.press(getByText("5"));
  fireEvent.press(getByText("-"));
  fireEvent.press(getByText("8"));
  fireEvent.press(getByText("="));

  expect(getByText("5 - 8 = -3.00")).toBeTruthy();
});

test("Calculations can only be performed on 2 numeric values with one operator", () => {
  const { getByText } = render(<App />);

  fireEvent.press(getByText("1"));
  fireEvent.press(getByText("+"));
  fireEvent.press(getByText("-"));
  fireEvent.press(getByText("2"));
  fireEvent.press(getByText("*"));
  fireEvent.press(getByText("/"));
  fireEvent.press(getByText("3"));
  fireEvent.press(getByText("="));

  expect(getByText("1 / 23 = 0.04")).toBeDefined();
});

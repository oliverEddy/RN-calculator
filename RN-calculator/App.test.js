jest.mock("@react-native-async-storage/async-storage", () => mockAsyncStorage);

import mockAsyncStorage from "./mockAsyncStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";

jest.mock("@react-native-async-storage/async-storage", () => mockAsyncStorage);

import { render, fireEvent, waitFor } from "@testing-library/react-native";

import App from "./App";

describe("Calculator", () => {
  test("Calculator performs addition correctly", async () => {
    const { getByText } = render(<App />);

    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("+"));
    fireEvent.press(getByText("2"));
    fireEvent.press(getByText("="));

    await waitFor(() => {
      expect(getByText("1 + 2 = 3.00")).toBeTruthy();
    });
  });

  test("Calculator performs subtraction correctly", async () => {
    const { getByText } = render(<App />);

    fireEvent.press(getByText("5"));
    fireEvent.press(getByText("-"));
    fireEvent.press(getByText("3"));
    fireEvent.press(getByText("="));

    await waitFor(() => {
      expect(getByText("5 - 3 = 2.00")).toBeTruthy();
    });
  });

  test("Calculator performs multiplication correctly", async () => {
    const { getByText } = render(<App />);

    fireEvent.press(getByText("4"));
    fireEvent.press(getByText("*"));
    fireEvent.press(getByText("3"));
    fireEvent.press(getByText("="));

    await waitFor(() => {
      expect(getByText("4 * 3 = 12.00")).toBeTruthy();
    });
  });

  test("Calculator performs division correctly", async () => {
    const { getByText } = render(<App />);

    fireEvent.press(getByText("6"));
    fireEvent.press(getByText("/"));
    fireEvent.press(getByText("2"));
    fireEvent.press(getByText("="));

    await waitFor(() => {
      expect(getByText("6 / 2 = 3.00")).toBeTruthy();
    });
  });

  test("Calculator displays result with 2 decimal places", async () => {
    const { getByText } = render(<App />);

    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("/"));
    fireEvent.press(getByText("3"));
    fireEvent.press(getByText("="));

    await waitFor(() => {
      expect(getByText("1 / 3 = 0.33")).toBeTruthy();
    });
  });

  test("Calculator performs calculations with decimal numbers and 0", async () => {
    const { getByText } = render(<App />);

    fireEvent.press(getByText("2"));
    fireEvent.press(getByText("."));
    fireEvent.press(getByText("5"));
    fireEvent.press(getByText("+"));
    fireEvent.press(getByText("0"));
    fireEvent.press(getByText("="));

    await waitFor(() => {
      expect(getByText("2.5 + 0 = 2.50")).toBeTruthy();
    });
  });

  test("Ensures only one decimal point is allowed per operand", async () => {
    const { getByText } = render(<App />);

    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("."));
    fireEvent.press(getByText("2"));
    fireEvent.press(getByText("."));
    fireEvent.press(getByText("3"));

    await waitFor(() => {
      expect(getByText("1.23")).toBeDefined();
    });
  });

  test("Calculator can display negative numbers", async () => {
    const { getByText } = render(<App />);

    fireEvent.press(getByText("5"));
    fireEvent.press(getByText("-"));
    fireEvent.press(getByText("8"));
    fireEvent.press(getByText("="));

    await waitFor(() => {
      expect(getByText("5 - 8 = -3.00")).toBeTruthy();
    });
  });

  test("Calculations can only be performed on 2 numeric values with one operator", async () => {
    const { getByText } = render(<App />);

    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("+"));
    fireEvent.press(getByText("-"));
    fireEvent.press(getByText("2"));
    fireEvent.press(getByText("*"));
    fireEvent.press(getByText("/"));
    fireEvent.press(getByText("3"));
    fireEvent.press(getByText("="));

    await waitFor(() => {
      expect(getByText("1 / 23 = 0.04")).toBeDefined();
    });
  });

  test("User can change the operator before calculating", async () => {
    const { getByText } = render(<App />);

    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("+"));
    fireEvent.press(getByText("2"));

    await waitFor(() => {
      expect(getByText("1 + 2")).toBeDefined();
    });

    fireEvent.press(getByText("-"));

    await waitFor(() => {
      expect(getByText("1 - 2")).toBeDefined();
    });

    fireEvent.press(getByText("*"));

    await waitFor(() => {
      expect(getByText("1 * 2")).toBeDefined();
    });

    fireEvent.press(getByText("/"));

    await waitFor(() => {
      expect(getByText("1 / 2")).toBeDefined();
    });
  });

  test("User can not complete a calculation without first and second operands", async () => {
    const { getByText } = render(<App />);

    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("+"));
    fireEvent.press(getByText("="));
    fireEvent.press(getByText("="));

    await waitFor(() => {
      expect(getByText("1 +")).toBeDefined();
    });
  });

  test("User should not be able to enter an operator before the first operand has been entered", async () => {
    const { getByText } = render(<App />);

    fireEvent.press(getByText("+"));
    fireEvent.press(getByText("-"));
    fireEvent.press(getByText("*"));
    fireEvent.press(getByText("/"));
    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("2"));

    await waitFor(() => {
      expect(getByText("12")).toBeDefined();
    });
  });
  test("User should not be able to enter = before this first and second operands and operator have been entered", async () => {
    const { getByText } = render(<App />);

    fireEvent.press(getByText("="));
    fireEvent.press(getByText("="));
    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("+"));
    fireEvent.press(getByText("2"));

    await waitFor(() => {
      expect(getByText("1 + 2")).toBeDefined();
    });
  });

  test("Clear history button removes past calculations from dropdown and local storage", async () => {
    const { getByText, queryByText } = render(<App />);

    fireEvent.press(getByText("1"));
    fireEvent.press(getByText("+"));
    fireEvent.press(getByText("2"));
    fireEvent.press(getByText("="));
    fireEvent.press(getByText("DEL"));

    fireEvent.press(getByText("5"));
    fireEvent.press(getByText("-"));
    fireEvent.press(getByText("3"));
    fireEvent.press(getByText("="));
    fireEvent.press(getByText("DEL"));

    fireEvent.press(getByText("Past Calculations:"));

    await waitFor(() => {
      expect(getByText("1 + 2 = 3.00")).toBeDefined();
      expect(getByText("5 - 3 = 2.00")).toBeDefined();
    });

    fireEvent.press(getByText("Clear History"));

    await waitFor(() => {
      expect(queryByText("1 + 2 = 3.00")).toBeNull();
      expect(queryByText("5 - 3 = 2.00")).toBeNull();
    });

    expect(mockAsyncStorage.data["calculations"]).toBeUndefined();
  });
});

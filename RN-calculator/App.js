import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import ButtonContainer from "./src/components/ButtonContainer";
import OperationDisplay from "./src/components/OperationDisplay";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [operationDisplay, setOperationDisplay] = useState("");
  const [firstOperand, setFirstOperand] = useState("");
  const [secondOperand, setSecondOperand] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);
  const [fullCalculation, setFullCalculation] = useState("");

  const buttonClicked = (char) => {
    if (char === ".") {
      if (isDecimalInOperand(firstOperand) && isFirstOperand(char)) {
        // If the first operand already has a decimal point and the character is a decimal point, do nothing.
        return;
      }
      if (isDecimalInOperand(secondOperand) && isSecondOperand(char)) {
        // If the second operand already has a decimal point and the character is a decimal point, do nothing.
        return;
      }
    }

    if (!firstOperand && isOperator(char)) {
      // If the first operand is not entered and the character is an operator, do nothing.
      return;
    }

    if (char === "=") {
      if (!firstOperand || !operator || !secondOperand) {
        // If the user pressed equals without entering the first operand, an operator, and the second operand, do nothing.
        return;
      }

      calculateResult();
      setOperator(""); // Reset the operator to allow the user to continue the operation.
    } else if (isFirstOperand(char)) {
      setFirstOperand((previousValue) => previousValue + char);
    } else if (isSecondOperand(char)) {
      setSecondOperand((previousValue) => previousValue + char);
    } else {
      setOperator(char);
    }
  };

  const isDecimalInOperand = (operand) => {
    return operand.includes(".");
  };

  const isFirstOperand = (char) => {
    return !operator && !isOperator(char);
  };

  const isSecondOperand = (char) => {
    return operator && !isOperator(char);
  };

  const isOperator = (char) => {
    return char === "+" || char === "-" || char === "*" || char === "/";
  };

  const clearStates = () => {
    setFirstOperand("");
    setSecondOperand("");
    setOperator("");
  };

  const calculateResult = () => {
    let resultValue;
    switch (operator) {
      case "+":
        resultValue = Number(firstOperand) + Number(secondOperand);
        break;
      case "-":
        resultValue = Number(firstOperand) - Number(secondOperand);
        break;
      case "*":
        resultValue = Number(firstOperand) * Number(secondOperand);
        break;
      case "/":
        resultValue = Number(firstOperand) / Number(secondOperand);
        break;
      default:
        resultValue = secondOperand;
        break;
    }

    // Save the calculation history to local storage
    const calculationHistory = [
      ...history,
      `${firstOperand} ${operator} ${secondOperand} = ${resultValue.toFixed(
        2
      )}`,
    ];
    AsyncStorage.setItem(
      "calculations",
      JSON.stringify(calculationHistory)
    ).catch((error) => {
      console.error(
        "Error saving calculation history to local storage:",
        error
      );
    });

    setResult(resultValue.toFixed(2));
    clearStates();
    setFullCalculation(
      `${firstOperand} ${operator} ${secondOperand} = ${resultValue.toFixed(2)}`
    );
  };

  const handleDelete = () => {
    if (result === "") {
      // If the "=" button has not been pressed, delete the last character in the calculation area.
      if (secondOperand) {
        setSecondOperand((prevValue) => prevValue.slice(0, -1));
      } else if (operator) {
        setOperator("");
      } else if (firstOperand) {
        setFirstOperand((prevValue) => prevValue.slice(0, -1));
      }
    } else {
      // If the "=" button has been pressed, add the full calculation (including the result) to the history.
      if (fullCalculation) {
        setHistory([...history, fullCalculation]);
      }

      // Clear the states for the next calculation.
      setFullCalculation("");
      setResult("");
      clearStates();
    }
  };

  useEffect(() => {
    // Get the calculation history from local storage when the app starts
    AsyncStorage.getItem("calculations")
      .then((historyData) => {
        if (historyData) {
          setHistory(JSON.parse(historyData));
        }
      })
      .catch((error) => {
        console.error(
          "Error retrieving calculation history from local storage:",
          error
        );
      });

    setOperationDisplay(
      fullCalculation ||
        `${firstOperand} ${operator} ${secondOperand} ${
          result ? "=" : ""
        } ${result}`
    );
  }, [result, firstOperand, secondOperand, operator, fullCalculation]);

  const handleClearHistory = async () => {
    try {
      setHistory([]); // Clear the history state
      await AsyncStorage.removeItem("calculations"); // Clear the local storage
    } catch (error) {
      console.error(
        "Error clearing calculation history from local storage:",
        error
      );
    }
  };

  return (
    <View style={[styles.container]}>
      <OperationDisplay History={history} Display={operationDisplay} />
      <ButtonContainer
        onButton={buttonClicked}
        onClear={handleClearHistory} // Use the new function here
        onDelete={handleDelete}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF9F6",
    alignItems: "center",
    justifyContent: "center",
  },
});

import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import ButtonContainer from "./src/components/ButtonContainer";
import OperationDisplay from "./src/components/OperationDisplay";

export default function App() {
  const [operationDisplay, setOperationDisplay] = useState("");
  const [firstOperand, setFirstOperand] = useState("");
  const [secondOperand, setSecondOperand] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState(["1 + 1 = 2", "2 * 2 = 4"]);
  const [fullCalculation, setFullCalculation] = useState("");

  const buttonClicked = (char) => {
    if (
      char === "." &&
      (isDecimalInOperand(firstOperand) || isDecimalInOperand(secondOperand))
    ) {
      // If the entered character is a decimal point and there is already one in either operand, do nothing.
      return;
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
        // If no operator is set or invalid operator, set the result to the second operand
        resultValue = secondOperand;
        break;
    }

    setResult(resultValue.toFixed(2)); // Format the result to two decimal places
    clearStates();

    // Store the full calculation in the separate state
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
    setOperationDisplay(
      fullCalculation ||
        `${firstOperand} ${operator} ${secondOperand} = ${result}`
    );
  }, [result, firstOperand, secondOperand, operator, fullCalculation]);

  return (
    <View style={styles.container}>
      <ButtonContainer
        onButton={buttonClicked}
        onClear={() => setHistory([])}
        onDelete={handleDelete}
      />
      <OperationDisplay d={operationDisplay} h={history} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

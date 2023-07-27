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

  const buttonClicked = (char) => {
    if (isFirstOperand(char)) {
      setFirstOperand((previousValue) => previousValue + char);
    } else if (isSecondOperand(char)) {
      if (char === "=") {
        calculateResult();
      } else {
        setSecondOperand((previousValue) => previousValue + char);
      }
    } else {
      setOperator(char);
    }
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
    setResult(Number(firstOperand) + Number(secondOperand));
    setHistory([
      ...history,
      `${firstOperand} ${operator} ${secondOperand} = ${result}`,
    ]);
    clearStates();
  };

  const handleDelete = () => {
    if (isSecondOperand("") && operator) {
      setOperator("");
    } else if (secondOperand) {
      setSecondOperand((prevValue) => prevValue.slice(0, -1));
    } else if (operator) {
      setOperator("");
    } else if (firstOperand) {
      setFirstOperand((prevValue) => prevValue.slice(0, -1));
    }
  };

  useEffect(() => {
    setOperationDisplay(
      `${firstOperand} ${operator} ${secondOperand} = ${result}`
    );
  }, [result, firstOperand, secondOperand, operator]);

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

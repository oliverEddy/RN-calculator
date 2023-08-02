import ButtonContainer from "./components/ButtonContainer";
import OperationDisplay from "./components/OperationDisplay";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [operationDisplay, setOperationDisplay] = useState("");
  const [firstOperand, setFirstOperand] = useState("");
  const [secondOperand, setSecondOperand] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  /*
Code Review - History State:
The initial state of the history variable is hard-coded with two strings. 
This hard-coded approach limits the flexibility and usability of the history feature. 
It would be better to initialize the history state as an empty array initially and 
let users add calculations to the history dynamically.
*/
  const [history, setHistory] = useState(["1 + 1 = 2", "2 * 2 = 4"]);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#DBD8AE",
      },
      secondary: {
        main: "#CA907E",
      },
      warning: {
        main: "#B6636E",
      },
      error: {
        main: "#9E2A2B",
      },
      info: {
        main: "#BA9D9F",
      },
    },
  });

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
  /*
Code Review - Unclear Purpose of clearStates Function:
The clearStates function is currently empty, and its purpose is not evident from the code. 
This could lead to confusion for other developers working on this code. 

You should add a comment above the clearStates function to highlight its purpose. 
Additionally, you could implement the clearStates function to reset the state values 
of firstOperand, secondOperand, and operator to their initial state or empty values.

const clearStates = () => {
setFirstOperand("");
setSecondOperand("");
setOperator("");
};
.*/
  const clearStates = () => {};

  /*
Code review - Limited Functionality of calculateResult Function: 
The functionality of the calculateResult function is very limited. 
Currently, it only supports the logic to perform addition, which limits the calculator's 
usefulness as it can only perform this single operation. 

To improve the calculator's functionality, you should add logic to support subtraction, multiplication, 
and division to the calculateResult function. You can achieve this by implementing 
separate cases for each operator ('-', '*', '/') and using a switch statement or if-else 
conditions to perform the corresponding calculations.

switch (operator) {
      case "+":
        resultValue = Number(firstOperand) + Number(secondOperand);
        break;

      continue for each operator
      */
  const calculateResult = () => {
    setResult(Number(firstOperand) + Number(secondOperand));
    clearStates();
  };

  useEffect(() => {
    /*Code review -   Result Display with Two Decimal Places:
The result is not displayed with two decimal places. In the useEffect hook, 
you set the operationDisplay state with the result, but the result is not formatted 
to display with two decimal places. 

To fix this, you should format the result to two decimal places using the .toFixed(2) 
method before displaying it in the operationDisplay

    result.toFixed(2),

    */
    setOperationDisplay(
      `${firstOperand} ${operator} ${secondOperand} = ${result}`
    );
  }, [result, firstOperand, secondOperand, operator]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ButtonContainer
          onButton={buttonClicked}
          onClear={() => setHistory([])}
        ></ButtonContainer>
        <OperationDisplay d={operationDisplay} h={history}></OperationDisplay>
      </div>
    </ThemeProvider>
  );
}

export default App;

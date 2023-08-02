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
Code Review - History State 
The initial state of the history variable is hard-coded with two strings,
this hard-coded approach limits the flexibility and usability of the history feature.
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
  /*Code Review - Unclear Purpose of clearStates Function
The clearStates function is currently empty, and its purpose is not evident from the code.
This could lead to confusion for other developers working on this code. 

I would recommend you add a comment above the clearStates function to highlight its purpose.
You could also implement the clearStates function to reset the state values of the firstOperand, secondOperand,
and operator to their initial state or empty values.

const clearStates = () => {
setFirstOperand("");
setSecondOperand("");
setOperator("");
};
.*/
  const clearStates = () => {};

  /*Code review - Limited functionality
The Functionality of the calculateResult function is very limited.
The calculateResult function currently only supports the logic to preform addition,
which limits the calculators usefulness as we can only perform this single operation.

I would recommend you add logic to support subtraction, multiplication and division to the calculateResult function.

You could achieve this by implementing separate cases for each operator ('-', '*', '/')
and use a switch statement or if-else conditions to perform the corresponding calculations. 

switch (operator) {
      case "+":
        resultValue = Number(firstOperand) + Number(secondOperand);
        break;

      //continue for each operator
      */
  const calculateResult = () => {
    setResult(Number(firstOperand) + Number(secondOperand));
    clearStates();
  };

  useEffect(() => {
    /*Code review: The result is not displayed with two decimal places.
    The useEffect hook sets the operationDisplay state with the result, 
    but the result is not formatted to display with two decimal places. 
    
    I would recommend you format the result to two decimal places. You could achieve this by using 
    .toFixed(2) before displaying the result to the operationDisplay.
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

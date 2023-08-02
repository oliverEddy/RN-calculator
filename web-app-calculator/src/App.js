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
The initial state of the history variable is hard coded with two strings. 
This hard coded approach limits the usability of the history feature. 
It would be better to set the history state as an empty array, then 
let users add their calculations to the history.
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
    /*
    Code Review - Decimal Point's:
    As is, the calculator allows users to add more than one decimal point per operand. 
    This behavior could lead to invalid calculations. 

    You should add checks before adding a decimal point to the first and second operands. 
    If the operand already contains a decimal point and the user tries to add another one, you should ignore the input.

    if (isFirstOperand(char))
    if (char === "." && firstOperand.includes(".")) 
    return;
    
    Code Review - Multiple Equals Signs:
    The calculator allows a user to enter multiple equals signs. 
    This behavior is not user friendly and could lead to invalid calculations.

    You should check if the last character in the operationDisplay is an equals sign. 
    If it is, you should ignore any additional equals signs entered by the user.

    const lastChar = operationDisplay.slice(-1);
    if (char === "=" && lastChar === "=") {
    return; 

    Code Review - Entering Operator Before First Operand:
    Currently, the calculator allows users to enter an operator before the first operand. 
    Which then prevents users from entering the first operand, this is not a good user experience. 
  
    You should add a check to the buttonClicked function to check that the first operand is entered 
    before allowing a user to enter an operator. If the first operand is not entered, you should ignore any operator input.
  
    const buttonClicked = (char) => {
    const isFirstOperandEntered = firstOperand !== "";
    if (!isFirstOperandEntered && isOperator(char)) {
    return;
    }
    */
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
*/

  const clearStates = () => {};

  /*
Code review - Limited Functionality of calculateResult Function: 
The functionality of the calculateResult function is limited. 
It only has the logic to perform addition, which limits the calculator's usefulness.

You should add logic to support subtraction, multiplication, and division to the calculateResult function. 
To achieve this you could use separate cases for each operator then 
use a switch statement to perform the corresponding calculations.

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
    /*
    Code review - Result Displayed with Two Decimal Places:
    The result is not displayed with two decimal places. 
    To fix this, you should format the result to two decimal places by using the .toFixed(2) 
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

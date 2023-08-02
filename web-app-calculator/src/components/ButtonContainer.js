import { Button, ButtonGroup } from "@mui/material";

export default function ButtonContainer({ onButton, onClear }) {
  return (
    <>
      <div className="btn-container">
        <div className="numeric-btn-container">
          <ButtonGroup
            variant="contained"
            color="primary"
            className="button-group"
            size="large"
            aria-label="outlined primary button group"
          >
            <Button onClick={() => onButton("1")}>1</Button>
            <Button onClick={() => onButton("2")}>2</Button>
            <Button onClick={() => onButton("3")}>3</Button>
          </ButtonGroup>
          <ButtonGroup
            variant="contained"
            color="primary"
            className="button-group"
            size="large"
            aria-label="outlined primary button group"
          >
            <Button onClick={() => onButton("4")}>4</Button>
            <Button onClick={() => onButton("5")}>5</Button>
            <Button onClick={() => onButton("6")}>6</Button>
          </ButtonGroup>
          <ButtonGroup
            variant="contained"
            color="primary"
            className="button-group"
            size="large"
            aria-label="outlined primary button group"
          >
            <Button onClick={() => onButton("7")}>7</Button>
            <Button onClick={() => onButton("8")}>8</Button>
            <Button onClick={() => onButton("9")}>9</Button>
          </ButtonGroup>
          <ButtonGroup
            variant="contained"
            color="primary"
            className="button-group"
            size="large"
            aria-label="outlined primary button group"
          >
            <Button onClick={() => onButton("0")}>0</Button>
            <Button onClick={() => onButton(".")}>.</Button>
            <Button color="info" onClick={() => onButton("=")}>
              =
            </Button>
          </ButtonGroup>
        </div>
        <ButtonGroup
          variant="contained"
          color="secondary"
          orientation="vertical"
          size="large"
          className="button-group"
          aria-label="outlined primary button group"
        >
          <Button onClick={() => onButton("+")}>+</Button>
          <Button onClick={() => onButton("-")}>-</Button>
          <Button onClick={() => onButton("*")}>*</Button>
          <Button onClick={() => onButton("/")}>/</Button>
        </ButtonGroup>
      </div>
      <div className="calculator-controls">
        <Button variant="contained" color="warning">
          Delete
        </Button>
        <Button variant="contained" color="error" onClick={onClear}>
          Clear history
        </Button>
      </div>
    </>
  );
}
/*
Code Review - Missing Functionality for Delete Button:

The Delete button inside the calculator-controls div is missing the onClick event handler. 
It appears that this button is intended to perform some action, but the functionality is not provided.

To fix this issue, you should add the appropriate onClick event handler to the "Delete" button. 
The handler should be responsible for handling the deletion of the last character or clearing 
the calculation area, depending on the calculator's behavior.

Here's how you can add the functionality:
<Button variant="contained" color="warning" onClick={onDelete}>
remember to pass the onDelete prop to the ButtonContainer along with onButton and onClear:
export default function ButtonContainer({ onButton, onClear, onDelete }) 
*/

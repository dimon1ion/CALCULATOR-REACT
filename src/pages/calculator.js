import React from "react";
import Button from "./button";

export default function Calculator(props) {
  const [inputValue, setInputValue] = React.useState("0");
  const [num1, setNum1] = React.useState(null);
  const [operation, setOperation] = React.useState(null);
  const [equalTapped, setEqualTapped] = React.useState(false);

  function AddNumber(event) {
    let input = inputValue;
    if (equalTapped === true) {
      input = "0";
      setEqualTapped(false);
    }
    if (input.length === 1 && input[0] === "0") {
      setInputValue(`${event.target.innerText}`);
    } else {
      setInputValue(`${input}${event.target.innerText}`);
    }
  }

  function AddDot(event) {
    if (inputValue.indexOf(event.target.innerText) == -1) {
      setInputValue(`${inputValue}${event.target.innerText}`);
    }
  }

  function Math(event) {
    let action = event.target.innerText;
    if (event.target.innerText == "=") {
        if (operation != null) {
            action = operation;
        } else {
            return;
        }
    }
    setOperation(action);
    if (num1 == null) {
      setNum1(+inputValue);
      setInputValue("0");
      return +inputValue;
    } else {
      let result = num1;
      switch (action) {
          case "/":
            try {
                result = +num1 / +inputValue;
            } catch (error) {
                result = 0;                
            }
          break;
          case "*":
          result = +num1 * +inputValue;
          break;
          case "-":
          result = +num1 - +inputValue;
          break;
          case "+":
          result = +num1 + +inputValue;
          break;
        default:
          break;
      }
      setInputValue("0");
      setNum1(result);
      return +result;
    }
  }

  function Equal(event) {
    let result = num1;
    if (operation != null) {
      result = Math(event);
    }
    setNum1(null);
    setInputValue(result?.toString());
    setEqualTapped(true);
  }

  function Delete(event) {
    if (inputValue.length == 1) {
      setInputValue("0");
    } else {
      setInputValue(`${inputValue.substring(0, inputValue.length - 1)}`);
    }
  }

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-6">
          <div className="d-flex flex-column border-1">
            <h5
              className={"text-start"}
              style={{ display: num1 == null ? "none" : "" }}
            >
              {num1}
            </h5>
            <div className="row">
              <div className="col-8">
                <input
                  id="MainInput"
                  value={inputValue}
                  className="w-100"
                  readOnly={true}
                ></input>
              </div>
              <div className="col-4">
                <Button text="<-" onClick={Delete} />
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <Button text="1" onClick={AddNumber} />
              </div>
              <div className="col-3">
                <Button text="2" onClick={AddNumber} />
              </div>
              <div className="col-3">
                <Button text="3" onClick={AddNumber} />
              </div>
              <div className="col-3">
                <Button text="/" onClick={Math} />
              </div>
              <div className="col-3">
                <Button text="4" onClick={AddNumber} />
              </div>
              <div className="col-3">
                <Button text="5" onClick={AddNumber} />
              </div>
              <div className="col-3">
                <Button text="6" onClick={AddNumber} />
              </div>
              <div className="col-3">
                <Button text="*" onClick={Math} />
              </div>
              <div className="col-3">
                <Button text="7" onClick={AddNumber} />
              </div>
              <div className="col-3">
                <Button text="8" onClick={AddNumber} />
              </div>
              <div className="col-3">
                <Button text="9" onClick={AddNumber} />
              </div>
              <div className="col-3">
                <Button text="-" onClick={Math} />
              </div>
              <div className="col-3">
                <Button text="." onClick={AddDot} />
              </div>
              <div className="col-6">
                <Button text="0" onClick={AddNumber} />
              </div>
              <div className="col-3">
                <Button text="+" onClick={Math} />
              </div>
              <div className="col-12">
                <Button text="=" onClick={Equal} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

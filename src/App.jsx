import React from "react";
import "./App.css";
import clsx from "./utilities/clsx";
import KeyBtn from "./components/KeyBtn";
import { SwitchGroup, SwitchBtn } from "./components/SwitchGroup";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "theme-one"
        : "theme-two",
      input: 0,
      num: 0,
      operator: "",
      decimal: false,
    };

    this.additionRef = React.createRef();
    this.subtractionRef = React.createRef();
    this.multiplicationRef = React.createRef();
    this.divisionRef = React.createRef();
  }

  componentDidMount() {
    const app = window.document.documentElement.querySelector("#App");
    app.classList.add(this.state.theme);
  }

  onChangeTheme = (theme) => {
    const app = window.document.documentElement.querySelector("#App");
    app.classList.toggle(this.state.theme);
    app.classList.add(theme);
    this.setState({ theme });
  };

  onChangeNumber = (event) => {
    this.setState({ input: event.target.value });
  };

  onChangeOperator = (event) => {
    this.setState({ operator: event.target.value });

    const exp = event.target.value;
    switch (exp) {
      case "+":
        this.additionRef.current.onChangeActive();
        break;
      case "-":
        this.subtractionRef.current.onChangeActive();
        break;
      case "x":
        this.multiplicationRef.current.onChangeActive();
        break;
      case "/":
        this.divisionRef.current.onChangeActive();
        break;
    }

    // toggle previous clicked operator
    this.onToggleOperatorBtn();

    if (this.state.input !== 0) {
      this.setState({
        num: this.state.input,
        input: 0,
      });
    }
  };

  onToggleOperatorBtn = () => {
    if (this.state.operator === "+") {
      return this.additionRef.current.onChangeActive();
    } else if (this.state.operator === "-") {
      return this.subtractionRef.current.onChangeActive();
    } else if (this.state.operator === "x") {
      return this.multiplicationRef.current.onChangeActive();
    } else if (this.state.operator === "/") {
      return this.divisionRef.current.onChangeActive();
    }
  };

  onInputNumber = (event) => {
    if (event.target.value === ".") {
      const containsDecimal = [...this.state.input.toString()].includes(".");
      if (containsDecimal) return;

      this.setState({ decimal: true });
      return;
    }

    if (this.state.decimal) {
      const input = this.state.input;
      const val = "." + event.target.value;
      const concatNum = input + val;
      return this.setState({
        input: concatNum,
        decimal: this.state.decimal && false,
      });
    } else {
      const input = this.state.input === 0 ? "" : this.state.input;
      const val = event.target.value;
      const concatNum = input + val;
      // const input = this.state.input === 0 ? "" : this.state.input.toString();
      return this.setState({ input: concatNum });
    }
  };

  onRemoveLastDigit = () => {
    let str = [...this.state.input];
    if (str[str.length - 2] === ".") {
      str = [...this.state.input].slice(0, -2).join("");
    } else {
      str = [...this.state.input].slice(0, -1).join("");
    }
    this.setState({ input: str });
  };

  onHandleResult = (event) => {
    event.preventDefault();
    const result = this.calculate();

    this.setState({
      num: 0,
      input: result,
      operator: "",
    });
    this.onToggleOperatorBtn();
  };

  calculate = () => {
    const expression = this.state.operator;
    switch (expression) {
      case "+":
        return parseFloat(this.state.num) + parseFloat(this.state.input);
        break;
      case "-":
        return parseFloat(this.state.num) - parseFloat(this.state.input);
        break;
      case "x":
        return parseFloat(this.state.num) * parseFloat(this.state.input);
        break;
      case "/":
        return parseFloat(this.state.num) / parseFloat(this.state.input);
        break;
    }
  };

  render() {
    return (
      <div id="App">
        <div className="container max-w-xl mx-auto p-6">
          <header className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">calc</h1>
            <div className="flex items-end">
              <h2 className="uppercase text-xs font-bold mb-1 mr-5">Theme</h2>
              <SwitchGroup
                label="Theme Switch"
                className="w-20"
                onChangeTheme={this.onChangeTheme}
              >
                <SwitchBtn
                  id="theme-one"
                  name="theme-switch"
                  label="1"
                  currentTheme={this.state.theme}
                  checked={this.state.theme === "theme-one" && "checked"}
                />
                <SwitchBtn
                  id="theme-two"
                  name="theme-switch"
                  label="2"
                  currentTheme={this.state.theme}
                  checked={this.state.theme === "theme-two" && "checked"}
                />
                <SwitchBtn
                  id="theme-three"
                  name="theme-switch"
                  label="3"
                  currentTheme={this.state.theme}
                  checked={this.state.theme === "theme-three" && "checked"}
                />
              </SwitchGroup>
            </div>
          </header>
          <main>
            <form>
              <fieldset className="result w-full rounded-xl mt-8 h-20 p-6 flex items-center justify-end">
                <input
                  type="number"
                  className="w-full h-20 text-3xl font-bold text-right outline-none bg-transparent"
                  step="any"
                  onChange={this.onChangeNumber}
                  value={this.state.input}
                />
              </fieldset>
              <fieldset className="keypad rounded-xl p-6 mt-8">
                <div className="grid gap-3 grid-cols-4">
                  <KeyBtn
                    id="seven"
                    value="7"
                    name="7"
                    className="key h-16 rounded-md text-3xl font-bold"
                    onInputHandler={this.onInputNumber}
                  />
                  <KeyBtn
                    id="eight"
                    value="8"
                    name="8"
                    className="key h-16 rounded-md text-3xl font-bold"
                    onInputHandler={this.onInputNumber}
                  />
                  <KeyBtn
                    id="nine"
                    value="9"
                    name="9"
                    className="key h-16 rounded-md text-3xl font-bold"
                    onInputHandler={this.onInputNumber}
                  />
                  <KeyBtn
                    id="delete"
                    value="delete"
                    name="del"
                    className="sp-key h-16 rounded-md text-lg font-bold uppercase"
                    onRemoveLastDigit={this.onRemoveLastDigit}
                  />
                  <KeyBtn
                    id="four"
                    value="4"
                    name="4"
                    className="key h-16 rounded-md text-3xl font-bold"
                    onInputHandler={this.onInputNumber}
                  />
                  <KeyBtn
                    id="five"
                    value="5"
                    name="5"
                    className="key h-16 rounded-md text-3xl font-bold"
                    onInputHandler={this.onInputNumber}
                  />
                  <KeyBtn
                    id="six"
                    value="6"
                    name="6"
                    className="key h-16 rounded-md text-3xl font-bold"
                    onInputHandler={this.onInputNumber}
                  />
                  <KeyBtn
                    id="addition"
                    value="+"
                    name="+"
                    className="key h-16 rounded-md text-3xl font-bold"
                    onChangeOperator={this.onChangeOperator}
                    ref={this.additionRef}
                  />
                  <KeyBtn
                    id="one"
                    value="1"
                    name="1"
                    className="key h-16 rounded-md text-3xl font-bold"
                    onInputHandler={this.onInputNumber}
                  />
                  <KeyBtn
                    id="two"
                    value="2"
                    name="2"
                    className="key h-16 rounded-md text-3xl font-bold"
                    onInputHandler={this.onInputNumber}
                  />
                  <KeyBtn
                    id="three"
                    value="3"
                    name="3"
                    className="key h-16 rounded-md text-3xl font-bold"
                    onInputHandler={this.onInputNumber}
                  />
                  <KeyBtn
                    id="subtraction"
                    value="-"
                    name="-"
                    className="key h-16 rounded-md text-3xl font-bold"
                    onChangeOperator={this.onChangeOperator}
                    ref={this.subtractionRef}
                  />
                  <KeyBtn
                    id="decimal"
                    value="."
                    name="."
                    className="key h-16 rounded-md text-3xl font-bold"
                    onInputHandler={this.onInputNumber}
                    // onInputHandler={() => this.setState({ decimal: true })}
                  />
                  <KeyBtn
                    id="zero"
                    value="0"
                    name="0"
                    className="key h-16 rounded-md text-3xl font-bold"
                    onInputHandler={this.onInputNumber}
                  />
                  <KeyBtn
                    id="division"
                    value="/"
                    name="/"
                    className="key h-16 rounded-md text-3xl font-bold"
                    onChangeOperator={this.onChangeOperator}
                    ref={this.divisionRef}
                  />
                  <KeyBtn
                    id="multiply"
                    value="x"
                    name="x"
                    className="key h-16 rounded-md text-3xl font-bold"
                    onChangeOperator={this.onChangeOperator}
                    ref={this.multiplicationRef}
                  />
                  <button
                    type="reset"
                    id="reset"
                    value="reset"
                    name="reset"
                    className="sp-key h-16 rounded-md text-lg font-bold col-span-2 uppercase"
                    onClickCapture={() =>
                      this.setState({
                        num: 0,
                        decimal: false,
                        input: 0,
                        operator: "",
                      })
                    }
                  >
                    reset
                  </button>
                  <button
                    id="equal"
                    name="="
                    className="eq-key h-16 rounded-md text-lg font-bold col-span-2"
                    onClick={this.onHandleResult}
                  >
                    =
                  </button>
                </div>
              </fieldset>
            </form>
          </main>
        </div>
      </div>
    );
  }
}

export default App;

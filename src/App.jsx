import React from "react";
import "./App.css";

function clsx(...args) {
  return args.join(" ");
}

function SwitchGroup({ children, className, onChangeTheme }) {
  function onChange(event) {
    onChangeTheme(event.target.value);
  }

  return (
    <div className={clsx("flex flex-col", className)}>
      <div className="flex justify-between px-2">
        {[...Array(children.length)].map((i, index) => (
          <span className="w-4 text-xs font-bold text-center" key={index}>
            {index + 1}
          </span>
        ))}
      </div>
      <form
        className="switch-bg w-full rounded-full p-2"
        onChangeCapture={onChange}
      >
        <fieldset className="flex justify-between">{children}</fieldset>
      </form>
    </div>
  );
}

function SwitchBtn({ id, name, currentTheme, checked, className }) {
  return (
    <div className="flex justify-center">
      <input
        type="radio"
        id={id}
        name={name}
        value={id}
        className="sr-only peer"
        defaultChecked={checked}
      />
      <label
        htmlFor={id}
        className={clsx(
          "w-4 h-4 rounded-full text-center ",
          className,
          currentTheme === "theme-three"
            ? "peer-checked:bg-cyan-toggle-btn"
            : "peer-checked:bg-red-toggle-btn",
        )}
      ></label>
    </div>
  );
}

function KeyBtn({ id, value, name, className }) {
  return (
    <button
      type="button"
      id={id}
      value={value}
      className={clsx("w-full", className)}
    >
      {name}
    </button>
  );
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "theme-two",
    };
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
            <section className="result w-full rounded-xl mt-8 h-20 p-6 flex items-center justify-end">
              <input
                type="number"
                className="w-full h-20 text-3xl font-bold text-right outline-none bg-transparent"
              />
              {/* <h2 className="text-3xl font-bold">399,981</h2> */}
            </section>
            <section className="keypad rounded-xl p-6 mt-8">
              <form>
                <div className="grid gap-3 grid-cols-4">
                  <KeyBtn
                    id="seven"
                    value="7"
                    name="7"
                    className="key h-16 rounded-md text-3xl font-bold"
                  />
                  <KeyBtn
                    id="eight"
                    value="8"
                    name="8"
                    className="key h-16 rounded-md text-3xl font-bold"
                  />
                  <KeyBtn
                    id="nine"
                    value="9"
                    name="9"
                    className="key h-16 rounded-md text-3xl font-bold"
                  />
                  <KeyBtn
                    id="delete"
                    value="delete"
                    name="del"
                    className="sp-key h-16 rounded-md text-lg font-bold uppercase"
                  />
                  <KeyBtn
                    id="four"
                    value="4"
                    name="4"
                    className="key h-16 rounded-md text-3xl font-bold"
                  />
                  <KeyBtn
                    id="five"
                    value="5"
                    name="5"
                    className="key h-16 rounded-md text-3xl font-bold"
                  />
                  <KeyBtn
                    id="six"
                    value="6"
                    name="6"
                    className="key h-16 rounded-md text-3xl font-bold"
                  />
                  <KeyBtn
                    id="addition"
                    value="+"
                    name="+"
                    className="key h-16 rounded-md text-3xl font-bold"
                  />
                  <KeyBtn
                    id="one"
                    value="1"
                    name="1"
                    className="key h-16 rounded-md text-3xl font-bold"
                  />
                  <KeyBtn
                    id="two"
                    value="2"
                    name="2"
                    className="key h-16 rounded-md text-3xl font-bold"
                  />
                  <KeyBtn
                    id="three"
                    value="3"
                    name="3"
                    className="key h-16 rounded-md text-3xl font-bold"
                  />
                  <KeyBtn
                    id="subtraction"
                    value="0"
                    name="-"
                    className="key h-16 rounded-md text-3xl font-bold"
                  />
                  <KeyBtn
                    id="dot"
                    value="."
                    name="."
                    className="key h-16 rounded-md text-3xl font-bold"
                  />
                  <KeyBtn
                    id="zero"
                    value="0"
                    name="0"
                    className="key h-16 rounded-md text-3xl font-bold"
                  />
                  <KeyBtn
                    id="division"
                    value="/"
                    name="/"
                    className="key h-16 rounded-md text-3xl font-bold"
                  />
                  <KeyBtn
                    id="multiply"
                    value="x"
                    name="x"
                    className="key h-16 rounded-md text-3xl font-bold"
                  />
                  <KeyBtn
                    id="reset"
                    value="reset"
                    name="reset"
                    className="sp-key h-16 rounded-md text-lg font-bold col-span-2 uppercase"
                  />
                  <KeyBtn
                    id="equal"
                    value="="
                    name="="
                    className="eq-key h-16 rounded-md text-lg font-bold col-span-2"
                  />
                </div>
              </form>
            </section>
          </main>
        </div>
      </div>
    );
  }
}

export default App;

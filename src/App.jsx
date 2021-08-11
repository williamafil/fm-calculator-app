import React from "react";
import "./App.css";

function SwitchGroup({ children }) {
  return (
    <div>
      <form className="w-16 h-7 border border-white">
        <fieldset className="flex">{children}</fieldset>
      </form>
      <div className="w-16 h-7 border rounded-full flex justify-center items-center px-2">
        <div className="bg-blue-500 rounded-full w-4 h-4"></div>
      </div>
    </div>
  );
}

function SwitchBtn({ id, name, label }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="radio" id={id} name={name} />
    </div>
  );
}
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="h-screen w-full bg-red-400">
        <SwitchGroup label="Theme Switch">
          <SwitchBtn id="theme-one" name="theme-switch" label="1" />
          <SwitchBtn id="theme-two" name="theme-switch" label="2" />
          <SwitchBtn id="theme-three" name="theme-switch" label="3" />
        </SwitchGroup>
      </div>
    );
  }
}

export default App;

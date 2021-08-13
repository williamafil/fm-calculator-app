import React from "react";
import "./App.css";

function clsx(...args) {
  return args.join(" ")
}

function SwitchGroup({ children, className, onChangeTheme }) {
  function onChange(event) {
    onChangeTheme(event.target.value)
  }

  return (
    <div className={clsx("flex flex-col", className)}>
      <div className="flex justify-between px-2">
        {
          [...Array(children.length)].map((i, index) => (<span className="w-7 text-center" key={index}>{index + 1}</span>))
        }
      </div>
      <form className="w-full border border-white rounded-full p-2" onChangeCapture={onChange}>
        <fieldset className="flex justify-between">{children}</fieldset>
      </form>
    </div>
  );
}

function SwitchBtn({ id, name, checked }) {
  return (
    <div className="flex justify-center">
      <input type="radio" id={id} name={name} value={id} className="sr-only peer" defaultChecked={checked} />
      <label htmlFor={id} className="w-7 h-7 rounded-full text-center peer-checked:bg-blue-400"></label>
    </div>
  );
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'theme-two'
    }
  }

  componentDidMount() {
    const app = window.document.documentElement.querySelector("#App");
    app.classList.add(this.state.theme)
  }

  onChangeTheme = (theme) => {
    const app = window.document.documentElement.querySelector("#App");
    console.log('before remove: ', this.state.theme)
    app.classList.toggle(this.state.theme)
    app.classList.add(theme)
    this.setState({theme})
  }

  render() {
    return (
      <div id="App" className="">
        <div>
          <SwitchGroup label="Theme Switch" className="w-40" onChangeTheme={this.onChangeTheme}>
            <SwitchBtn id="theme-one" name="theme-switch" label="1" checked />
            <SwitchBtn id="theme-two" name="theme-switch" label="2" />
            <SwitchBtn id="theme-three" name="theme-switch" label="3" />
          </SwitchGroup>
        </div>
      </div>
    );
  }
}

export default App;

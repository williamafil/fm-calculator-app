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
          [...Array(children.length)].map((i, index) => (<span className="w-4 text-xs font-bold text-center" key={index}>{index + 1}</span>))
        }
      </div>
      <form className="switch-bg w-full rounded-full p-2" onChangeCapture={onChange}>
        <fieldset className="flex justify-between">{children}</fieldset>
      </form>
    </div>
  );
}

function SwitchBtn({ id, name, currentTheme, checked }) {
  return (
    <div className="flex justify-center">
      <input type="radio" id={id} name={name} value={id} className="sr-only peer" defaultChecked={checked} />
      <label htmlFor={id} className={
        clsx(
          "switch-btn w-4 h-4 rounded-full text-center ", 
          currentTheme === 'theme-three' ? 'peer-checked:bg-cyan-toggle-btn' : 'peer-checked:bg-red-toggle-btn' 
        )}>

      </label>
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
    app.classList.toggle(this.state.theme)
    app.classList.add(theme)
    this.setState({theme})
  }

  render() {
    return (
      <div id="App">
        <div className="container mx-auto p-6">
        <header className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">calc</h1>
          <div className="flex items-end">
            <h2 className="uppercase text-xs font-bold mb-1 mr-5">Theme</h2>
            <SwitchGroup label="Theme Switch" className="w-20" onChangeTheme={this.onChangeTheme}>
              <SwitchBtn id="theme-one" name="theme-switch" label="1" currentTheme={this.state.theme} checked />
              <SwitchBtn id="theme-two" name="theme-switch" label="2" currentTheme={this.state.theme} />
              <SwitchBtn id="theme-three" name="theme-switch" label="3" currentTheme={this.state.theme} />
            </SwitchGroup>
          </div>
        </header>
        <main>
          <section className="result mt-8 h-20 pr-6 flex items-center justify-end">
            <h2 className="text-3xl font-bold">399,981</h2>
          </section>
          <section className="keypad">
            <form className="">
              <input type="button" value="1" />
            </form>
          </section>
        </main>
        </div>
      </div>
    );
  }
}

export default App;

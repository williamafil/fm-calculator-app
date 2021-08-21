import React from "react";
import clsx from "../utilities/clsx";

class KeyBtn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };
  }

  onChangeActive = () => {
    this.setState({ active: !this.state.active });
  };

  render() {
    const {
      type = "button",
      id,
      value,
      name,
      className,
      onChangeOperator,
      onInputHandler,
      onRemoveLastDigit,
    } = this.props;

    return (
      <button
        type={type}
        id={id}
        value={value}
        className={clsx("w-full", className, this.state.active ? "active" : "")}
        onClickCapture={onChangeOperator || onInputHandler || onRemoveLastDigit}
      >
        {name}
      </button>
    );
  }
}

export default KeyBtn;

import React from "react";
import clsx from "../utilities/clsx";

export function SwitchGroup({ children, className, onChangeTheme }) {
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

export function SwitchBtn({ id, name, currentTheme, checked, className }) {
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
          "w-4 h-4 rounded-full text-center cursor-pointer hover:bg-gray-50 hover:opacity-10",
          className,
          currentTheme === "theme-three"
            ? "peer-checked:bg-cyan-toggle-btn"
            : "peer-checked:bg-red-toggle-btn",
        )}
      ></label>
    </div>
  );
}

import { useRef } from "react";

const MyComponent = () => {
  const inputRef = useRef(null);

  // Function to focus on the input when a button is clicked
  const focusInput = () => {
    inputRef.current.focus();
  };

  // Function to read the input value
  const readInputValue = () => {
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus on Input</button>
      <button onClick={readInputValue}>Read Input Value</button>
    </div>
  );
};

export default MyComponent;

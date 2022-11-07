import React, { useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List2Props = {
  // TODO
  initValue: number[];
};
const List2 = ({ initValue }: List2Props) => {
  const [input, setInput] = useState<string>("");
  const { list, appendEnd, popStart, clear, reset } = useNumberList(initValue);
  return (
    <div data-testid="list2">
      <h3 data-testid="list2-label">{/* Label */} List 2</h3>

      {/* Iterate List and wrap the element div below inside */}
      <div data-testid="list2-element">
        {/* Each element in a list */}
        {list.map((e) => {
          return ` ${e}`;
        })}
      </div>

      <input
        data-testid="list2-input"
        value={input}
        type="number"
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        data-testid="list2-btn-append-end"
        onClick={() => {
          appendEnd(Number(input));
        }}
      >
        Append End
        {/* Button to append new number to the end of the list */}
      </button>
      <button
        data-testid="list2-btn-pop-start"
        onClick={(e) => {
          popStart();
        }}
      >
        Pop End
        {/* Button to  pop first element of the list */}
      </button>
      <button data-testid="list2-btn-clear" onClick={() => clear()}>
        {/* Button to  clear the list */}
        Clear
      </button>
      <button data-testid="list2-btn-reset" onClick={() => reset(initValue)}>
        {/* Button to  reset the list to initialValue */}
        Reset
      </button>
    </div>
  );
};

export default List2;

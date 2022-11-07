import React, { useState } from "react";
import useNumberList from "../hooks/useNumberList";

type List1Props = {
  // TODO
  initValues: number[];
};
const List1 = ({ initValues }: List1Props) => {
  const [input, setInput] = useState<string>("");
  const { list, appendStart, popEnd, clear, reset } = useNumberList(initValues);
  return (
    <div data-testid="list1">
      <h3 data-testid="list1-label">{/* Label */}List 1</h3>
      {/* Iterate List and wrap the element div below inside */}
      <div data-testid="list1-element">
        {/* Each element in a list */}

        {list.map((e) => {
          return `${e} `;
        })}
      </div>

      <input
        data-testid="list1-input"
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        data-testid="list1-btn-append-start"
        onClick={() => {
          appendStart(Number(input));
          setInput("");
        }}
      >
        {/* Append to start of list btn */}
        Append Start
      </button>
      <button
        data-testid="list1-btn-pop-end"
        onClick={() => {
          popEnd();
          setInput("");
        }}
      >
        Pop End
        {/* po last element btn */}
      </button>
      <button
        data-testid="list1-btn-clear"
        onClick={() => {
          clear();
          setInput("");
        }}
      >
        clear
        {/* clear list and set empty button */}
      </button>
      <button
        data-testid="list1-btn-reset"
        onClick={() => {
          reset(initValues);
        }}
      >
        Reset
        {/* Reset list to default value btn */}
      </button>
    </div>
  );
};

export default List1;

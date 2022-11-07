import { useState } from "react";

const useNumberList = (initialArray: number[]) => {
  // TODO
  // refer readme.md for what to return
  const [list, setList] = useState<number[]>(initialArray);

  const appendStart = (e: number) => {
    list.unshift(e);
    setList(list);
  };
  const appendEnd = (e: number) => {
    list.push(e);
    setList(list);
  };
  const popStart = () => {
    list.shift();
    setList([...list]);
  };
  const popEnd = () => {
    list.pop();
    setList([...list]);
  };
  const clear = () => {
    setList([]);
  };
  const reset = (e: number[]) => {
    setList(initialArray);
  };
  return { list, appendStart, appendEnd, popStart, popEnd, clear, reset };
};

export default useNumberList;

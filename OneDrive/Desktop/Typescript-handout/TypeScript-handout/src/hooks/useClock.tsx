import { useState } from "react";

const initTime = {
  hours: new Date().getHours(),
  minutes: new Date().getMinutes(),
  seconds: new Date().getSeconds(),
};
type Time = {
  hours: number;
  minutes: number;
  seconds: number;
};
const useClock = () => {
  // TODO
  // refer readme.md for what to return
  const [time, setTime] = useState<Time>(initTime);
  setInterval(() => {
    setTime({
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds(),
    });
  }, 1000);
  const { hours, minutes, seconds } = time;
  console.log(time);

  return { hours, minutes, seconds };
};

export default useClock;

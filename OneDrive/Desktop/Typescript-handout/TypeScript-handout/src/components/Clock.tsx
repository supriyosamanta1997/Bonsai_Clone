import React from "react";

type Props = {
  //  TODO
  hours: number;
  minutes: number;
  seconds: number;
};

const Clock = ({ hours, minutes, seconds }: Props) => {
  return (
    <div data-testid="clock">
      <h4 data-testid="clock-label">
        {/* Label */}
        24 hours
      </h4>
      <span data-testid="clock-hours">
        {/* Hours */}
        {hours}
      </span>
      :
      <span data-testid="clock-minutes">
        {/* Minutes */}
        {minutes}
      </span>
      :
      <span data-testid="clock-seconds">
        {/* Seconds */}
        {seconds}
      </span>
    </div>
  );
};

export default Clock;

import React, { useState } from "react";

export default function HardenShot18(props) {
  const dataHarden = props.harden;
  const [shot, setShot] = useState("none");
  const shotsState = props.display;
  const quarteState = props.clusterShots;
  const madeShot = props.madeShot;

  return dataHarden.map((measurement, index) => {
    if (madeShot) {
      if (measurement.EVENT_TYPE == "Missed Shot") {
        return;
      }
    }
    if (quarteState == 0) {
      return (
        <circle
          key={index}
          className={shotsState ? "" : "hidden"}
          onClick={() => {}}
          cx={measurement.svg_relative_position_x}
          cy={measurement.svg_relative_position_y - 10}
          r={5}
          fill={"yellow"}
          opacity="0.4"
          stroke={"yellow"}
          strokeOpacity="0.4"
        ></circle>
      );
    } else if (parseInt(measurement.PERIOD) == quarteState) {
      return (
        <circle
          key={index}
          className={shotsState ? "" : "hidden"}
          onClick={() => {}}
          cx={measurement.svg_relative_position_x}
          cy={measurement.svg_relative_position_y - 10}
          r={5}
          fill={"yellow"}
          opacity="0.4"
          stroke={"yellow"}
          strokeOpacity="0.4"
        ></circle>
      );
    } else {
      return;
    }
  });
}

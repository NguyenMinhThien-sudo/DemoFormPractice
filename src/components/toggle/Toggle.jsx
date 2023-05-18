import React, { useState } from "react";
import "./ToggleStyled.css";

const Toggle = () => {
  const [on, setOn] = useState(false);
  console.log(on);
  const handelClick = () => {
    if (!on) {
      return setOn(true);
    } else {
      return setOn(false);
    }
    // Rút gọn
    // setOn((on) => !on);
  };
  return (
    <div>
      <div className={`toggle ${on ? "is-active" : ""}`} onClick={handelClick}>
        <div className={`spinner ${on ? "is-active" : ""}`}></div>
      </div>
      {/* <div>
        <div className="toggle-on" onClick={() => setOn(true)}>
          ON
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          OFF
        </div>
      </div> */}
    </div>
  );
};

export default Toggle;

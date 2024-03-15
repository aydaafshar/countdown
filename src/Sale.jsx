import React, { useState, useEffect } from "react";

export default function Sale() {
  const [showCountdown, setShowCountdown] = useState(true);

  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [countdownEnded, setCountdownEnded] = useState(false);

  const startCountdown = () => {
    let interval = setInterval(() => {
      const endDate = new Date("Mar 25, 2024");
      const currentDate = new Date();
      const totalSeconds = (endDate - currentDate) / 1000;

      const daysCount = Math.floor(totalSeconds / 3600 / 24);
      const hoursCount = Math.floor(totalSeconds / 3600) % 24;
      const minutesCount = Math.floor(totalSeconds / 60) % 60;
      const secondsCount = Math.floor(totalSeconds) % 60;

      if (totalSeconds < 1) {
        setCountdownEnded(true);
        clearInterval(interval);
        // do something
      } else {
        setDays(`${format(daysCount)}`);
        setHours(`${format(hoursCount)}`);
        setMinutes(`${format(minutesCount)}`);
        setSeconds(`${format(secondsCount)}`);
      }
    }, 1000);
  };

  function format(t) {
    return t < 10 ? `0${t}` : t;
  }

  useEffect(() => {
    startCountdown();
  }, []);

  const onHideCountdown = () => {
    setShowCountdown(false);
  };

  return (
    <div className="container">
      {showCountdown && (
        <div className="sale-con">
          <div className="sale">
            <h2>{!countdownEnded ? "Christmas Sale!" : "Sale Ended!!!"}</h2>
            <div className="countdown">
              <time className="time">
                <span>
                  <p>{days}</p>
                  <small>Days</small>
                </span>
                <span>
                  <p>{hours}</p>
                  <small>Hours</small>
                </span>
                <span>
                  <p>{minutes}</p>
                  <small>Minutes</small>
                </span>
                <span>
                  <p>{seconds}</p>
                  <small>Seconds</small>
                </span>
              </time>
            </div>
            <p className="cl" onClick={onHideCountdown}>
              X
            </p>
          </div>
        </div>
      )}
      <div className="tab">ZuluShop</div>
      <div className="content">Sleek wedding gown</div>
    </div>
  );
}

/*
 * @Author: Nate
 * @Date:   2019-01-28 14:49:39
 * @Last Modified by:   Nate
 * @Last Modified time: 2019-01-28 23:31:58
 */
import React, { useState, useEffect } from "react";

const initialLocationState = {
  latitude: null,
  longitude: null,
  speed: null
};

const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [status, setStatus] = useState(navigator.onLine);
  const [{ latitude, longitude, speed }, setLocation] = useState(
    initialLocationState
  );
  let mounted = true;

  useEffect(() => {
    document.title = `you have clicked ${count} times`;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    navigator.geolocation.getCurrentPosition(handleGeolocation);
    const watchId = navigator.geolocation.watchPosition(handleGeolocation);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      navigator.geolocation.clearWatch(watchId);
      mounted = false;
    };
  }, [count]);

  const handleGeolocation = event => {
    if (mounted) {
      setLocation({
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        speed: event.coords.speed
      });
    }
  };
  const handleOnline = () => {
    setStatus(true);
  };
  const handleOffline = () => {
    setStatus(false);
  };
  const handleMouseMove = event => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    });
  };
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const toggleLight = () => {
    setIsOn(prevIsOn => !prevIsOn);
  };

  return (
    <React.Fragment>
      <h2>Counter</h2>
      <button onClick={incrementCount}>i was clicked {count} times</button>;
      <h2>Toggle Light</h2>
      <img
        src={
          isOn
            ? "https://icon.now.sh/highlight/fd0"
            : "https://icon.now.sh/highlight/303030"
        }
        style={{
          height: "50px",
          width: "50px"
        }}
        alt="Flashlight"
        onClick={toggleLight}
      />
      <h2>Mouse Position</h2>
      {JSON.stringify(mousePosition, null, 2)}
      <br />
      <h2>Network Status</h2>
      <p>
        you are <strong>{status ? "online" : "offline"}</strong>
      </p>
      <h2>Geolocation </h2>
      <p>latitude is {latitude ? latitude : ""}</p>
      <p>longitude is {longitude ? longitude : ""}</p>
      <p>speed is {speed ? speed : "0"}</p>
    </React.Fragment>
  );
};

export default App;

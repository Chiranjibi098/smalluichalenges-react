import React from "react";

export default function DeviceInfo() {

  const DeviceCore = navigator.hardwareConcurrency;

  return (
    <div className="Main">
      <h2>Device Info</h2>
      <div>
        <p>CPU core:{DeviceCore}</p>
      </div>
    </div>
  );
}

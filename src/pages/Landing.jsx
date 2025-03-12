import React, { useEffect, useRef, useState } from "react";
import StopWatch from "../components/StopWatch";
import ProgressBar from "../components/ProgressBar";
import ApiCallone from "../components/ApiCallone";
import Apicalltwo from "../components/ApiCalltwo";
import AddtoCart from "../components/AddtoCart";
import Modal from "../components/Modal";
import CopytoClip from "../components/CopytoClip";
import DeviceInfo from "../components/deviceInfo";
import "../assets/deviceInfo.css";

export default function Landing() {
  return (
    <div className="Warp">
      <h1>Simple React Comoponents</h1>
      <div className="Landing">
        <DeviceInfo />
        <ProgressBar />
        <StopWatch />
        <CopytoClip />
        <AddtoCart />
        <ApiCallone />
        <Apicalltwo />
        <Modal />
      </div>
    </div>
  );
}

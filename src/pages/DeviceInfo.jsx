import React, { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function DeviceInfo() {
  const [deviceNames, setDeviceNames] = useState([]);
  const [secoundPass, setSecoundPass] = useState(0);
  const [value, setValue] = useState(0);
  const [satrt, setStart] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);
  const [data, setData] = useState("");
  const [items, setItems] = useState(0);
  const [modal,setModal] = useState(false);

  function handelStart() {
    setStart(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function openModal(){
    setModal(true);
  }

  function closeModal(){
    setModal(false);
  }

  useEffect(() => {
    if (modal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open"); // Cleanup on unmount
    };
  }, [modal]);

  function handelCart() {
    setItems((prev) => {
      const upadedItems = items + 1;
      toast(`${upadedItems} item added to cart`);
      return upadedItems;
    });
  }

  function handelGen() {
    setData("aghjklcfgvhbjnjhg");
  }

  function handelStop() {
    clearInterval(intervalRef.current);
  }

  useEffect(() => {
    if (satrt != null && now != null) {
      setSecoundPass((now - satrt) / 1000);
    }
    handelGen();
  }, [satrt, now]);

  function handelReset() {
    clearInterval(intervalRef.current);
    setSecoundPass(0);
    toast("Please try to stop before reset!");
  }

  async function fetchClipboard() {
    try {
      const text = await navigator.clipboard.writeText(data);
      setDeviceNames((prev) => [...prev, text]);
    } catch (error) {
      console.error("Failed to read clipboard:", error);
    }
  }

  useEffect(() => {
    let x = null;
    if (value != 100) {
      x = setTimeout(() => {
        setValue((p) => p + 1);
      }, 10);
    }
    return () => {
      if (x != null) {
        clearTimeout(x);
      }
    };
  }, [value]);

  const DeviceCore = navigator.hardwareConcurrency;

  const list = [
    {
      id: 1,
      name: "Chiranjibi",
      age: 24,
      bloodGroup: "B+ve",
      education: "MCA",
    },
    {
      id: 2,
      name: "Amit",
      age: 27,
      bloodGroup: "O+ve",
      education: "B.Tech",
    },
    {
      id: 3,
      name: "Priya",
      age: 22,
      bloodGroup: "A-ve",
      education: "MBA",
    },
    {
      id: 4,
      name: "Suman",
      age: 25,
      bloodGroup: "AB+ve",
      education: "M.Sc",
    },
  ];

  const colleges = [
    {
      id: 1,
      name: "IIT Bombay",
      location: "Mumbai, Maharashtra",
      established: 1958,
      coursesOffered: ["Engineering", "Management", "Sciences"],
    },
    {
      id: 2,
      name: "IIM Ahmedabad",
      location: "Ahmedabad, Gujarat",
      established: 1961,
      coursesOffered: ["MBA", "Executive Programs", "Finance"],
    },
    {
      id: 3,
      name: "BITS Pilani",
      location: "Pilani, Rajasthan",
      established: 1964,
      coursesOffered: ["Engineering", "Pharmacy", "Management"],
    },
    {
      id: 4,
      name: "NIT Trichy",
      location: "Tiruchirappalli, Tamil Nadu",
      established: 1964,
      coursesOffered: ["Engineering", "Architecture", "Sciences"],
    },
    {
      id: 5,
      name: "Delhi University",
      location: "New Delhi",
      established: 1922,
      coursesOffered: ["Arts", "Commerce", "Sciences"],
    },
  ];

  return (
    <>
      <div className="Main">
        <div className="sub-main">
          <h1>Device Info</h1>
          <div>
            <p>{deviceNames}</p>
            <p>CPU core:{DeviceCore}</p>
            <p>Progress Bar:{value}%</p>
            <progress value={value} max={100}></progress>
            <p>Stopwatch: {secoundPass.toFixed(2)}</p>
            <div className="btnGroup">
              <div className="startButton">
                <button onClick={handelStart}>Start</button>
              </div>
              <div className="stopButton">
                <button onClick={handelStop}>Stop</button>
              </div>
              <div className="resetButton">
                <button onClick={handelReset}>Reset</button>
              </div>
            </div>
            <div className="boxcopy">
              <div className="btnGroup">
                <button onClick={fetchClipboard}>copy</button>
              </div>
              <div>
                <p>{data}</p>
              </div>
            </div>

            <div className="Cart">
              <button onClick={handelCart}>Add to cart</button>
              <Toaster />
            </div>

            <br />
            <b>List of Students</b>
            <br />
            <br />
            <div className="mapList">
              {list.map((items, index) => (
                <>
                  <p key={index}>
                    <p>
                      <b>Name:</b> {items.name}
                    </p>
                    <p>
                      <b>Age:</b> {items.age}
                    </p>
                    <p>
                      <b>Blood Group:</b> {items.bloodGroup}
                    </p>
                    <p>
                      <b>Edcation:</b> {items.education}
                    </p>
                  </p>
                  <br />
                </>
              ))}
            </div>
            <br />
            <b>List of colleges</b>
            <br />
            <br />
            <div className="colleges">
              {colleges.map((collesge, index) => (
                <>
                  <p key={index}>
                    <p>
                      <b>Name:</b>
                      {collesge.name}
                    </p>
                    <p>
                      <b>Location:</b>
                      {collesge.location}
                    </p>
                    <p>
                      <b>Established:</b>
                      {collesge.established}
                    </p>
                    <p>
                      <b>Course Offered:</b>
                      {collesge.coursesOffered.map((course, index) => (
                        <li key={index}>{course}</li>
                      ))}
                    </p>
                  </p>
                  <br />
                </>
              ))}
            </div>
            <div className="modal">
              <button onClick={openModal}>Open Modal</button>
            </div>
            <div className="mo-wrap" style={!modal? {display: "none"}:{display: "block"}}>
              <div className="mo">
                <p contentEditable>This is a modal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

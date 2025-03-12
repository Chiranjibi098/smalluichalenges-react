import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function CopytoClip() {
  const [data, setData] = useState("");

  useEffect(() => {
    setData("Copy to clipboard");
  }, []);

  async function fetchClipboard() {
    try {
      const text = await navigator.clipboard.writeText(data);
      toast("Text copy to clipboard");
    } catch (error) {
      console.error("Failed to read clipboard:", error);
    }
  }

  return (
    <div className="Main">
      <h2>Copy to Clipboard</h2>
      <div>
        <div className="btnGroup">
          <div className="modal">
            <button onClick={fetchClipboard}><b>copy</b></button>
          </div>
        </div>
        <div>
          <p>{data}</p>
        </div>
        <Toaster />
      </div>
    </div>
  );
}

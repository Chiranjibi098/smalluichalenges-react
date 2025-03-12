import React from "react";

export default function ApiCallone() {
    
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

  return (
    <div className="Main">
      <h2>Api Call One</h2>
      <div className="ApiCall">
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
      </div>
    </div>
  );
}

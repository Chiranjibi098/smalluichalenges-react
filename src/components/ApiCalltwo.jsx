import React from "react";

export default function Apicalltwo() {
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
    <div className="Main">
      <h2>Api call Two</h2>
      <div className="ApiCall">
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
      </div>
    </div>
  );
}

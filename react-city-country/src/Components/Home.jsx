import React, { useEffect, useState } from "react";

export const Home = () => {
  const [data, setData] = useState([]);
  const [sortdata, setSortdata] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/Country`)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        setSortdata(res);
      })
      .catch((err) => console.log(err));
  }, []);

  //   console.log("data", data);

  const handleSort = () => {
    let temp = [...data];
    temp.sort((a, b) => a.population - b.population);
    setSortdata(temp);
    // console.log(data);
  };

  //   console.log("sortdata:", sortdata);

  const handleDelete = (id) => {
    // console.log("id:", id);
    let temp = data.filter((e) => e.id !== id);
    setData(temp);
    setSortdata(temp);
    // console.log("temp:", temp);
  };

  return (
    <div>
      <button onClick={handleSort}>Sort by Population</button>
      <br />
      <br />
      <table style={{ border: "1.5px solid black" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid gray" }}>S.No</th>
            <th style={{ border: "1px solid gray" }}>Country</th>
            <th style={{ border: "1px solid gray" }}>City</th>
            <th style={{ border: "1px solid gray" }}>Population</th>
            <th style={{ border: "1px solid gray" }}>Update</th>
            <th style={{ border: "1px solid gray" }}>Update</th>
          </tr>
        </thead>
        <tbody>
          {sortdata.map((e, i) => (
            <tr key={e.id}>
              <td style={{ border: "1px solid gray" }}>{i + 1}.</td>
              <td style={{ border: "1px solid gray" }}>{e.country_name}</td>
              <td style={{ border: "1px solid gray" }}>{e.city_name}</td>
              <td style={{ border: "1px solid gray" }}>{e.population}</td>
              <td>
                <button>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(e.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
